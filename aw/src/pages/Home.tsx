import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db, auth } from '../config/firebase';
import {
  Box,
  Container,
  Typography,
  Card,
  Grid,
  Button,
  TextField,
  InputAdornment,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Search as SearchIcon } from '@mui/icons-material';
import { colors } from '../styles/theme';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  mood: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [stats, setStats] = useState({
    totalEntries: 0,
    thisWeek: 0,
    avgWordsPerEntry: 0,
  });

  useEffect(() => {
    const fetchEntries = async () => {
      if (!auth.currentUser) {
        navigate('/login');
        return;
      }

      const entriesRef = collection(db, `users/${auth.currentUser.uid}/entries`);
      const q = query(entriesRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const fetchedEntries = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
      })) as JournalEntry[];

      setEntries(fetchedEntries);
      
      // Calculate statistics
      const now = new Date();
      const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      
      setStats({
        totalEntries: fetchedEntries.length,
        thisWeek: fetchedEntries.filter(entry => entry.createdAt > oneWeekAgo).length,
        avgWordsPerEntry: Math.round(
          fetchedEntries.reduce((acc, entry) => acc + entry.content.split(' ').length, 0) / 
          (fetchedEntries.length || 1)
        ),
      });
    };

    fetchEntries();
  }, [navigate]);

  const filteredEntries = entries.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ color: colors.ink, mb: 2 }}>
          Welcome to Your Journal
        </Typography>
        
        {/* Statistics Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card
                sx={{
                  p: 3,
                  background: `linear-gradient(135deg, ${colors.sakura}40, ${colors.fuji}40)`,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6">Total Entries</Typography>
                <Typography variant="h3">{stats.totalEntries}</Typography>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card
                sx={{
                  p: 3,
                  background: `linear-gradient(135deg, ${colors.matcha}40, ${colors.bamboo}40)`,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6">This Week</Typography>
                <Typography variant="h3">{stats.thisWeek}</Typography>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card
                sx={{
                  p: 3,
                  background: `linear-gradient(135deg, ${colors.ocean}40, ${colors.fuji}40)`,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6">Avg. Words/Entry</Typography>
                <Typography variant="h3">{stats.avgWordsPerEntry}</Typography>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Search and New Entry */}
        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search entries..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            onClick={() => navigate('/journal/new')}
            sx={{
              background: `linear-gradient(45deg, ${colors.ink}, ${colors.maple})`,
              color: 'white',
              px: 4,
            }}
          >
            New Entry
          </Button>
        </Box>

        {/* Journal Entries */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={3}>
            {filteredEntries.map((entry) => (
              <Grid item xs={12} md={6} key={entry.id}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      p: 3,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      },
                    }}
                    onClick={() => navigate(`/journal/${entry.id}`)}
                  >
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {entry.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.stone,
                        mb: 2,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {entry.content}
                    </Typography>
                    <Typography variant="caption" sx={{ color: colors.stone }}>
                      {entry.createdAt.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home; 