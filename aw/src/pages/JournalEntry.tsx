import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, setDoc, updateDoc, collection } from 'firebase/firestore';
import { db, auth } from '../config/firebase';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactConfetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '../styles/theme';

const JournalEntry = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('neutral');
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchEntry = async () => {
      if (!auth.currentUser) {
        navigate('/login');
        return;
      }

      if (id === 'new') return;

      try {
        const entryRef = doc(db, `users/${auth.currentUser.uid}/entries/${id}`);
        const entrySnap = await getDoc(entryRef);

        if (entrySnap.exists()) {
          const data = entrySnap.data();
          setTitle(data.title);
          setContent(data.content);
          setMood(data.mood);
        }
      } catch (error) {
        console.error('Error fetching entry:', error);
        navigate('/');
      }
    };

    fetchEntry();
  }, [id, navigate]);

  const handleSave = async () => {
    if (!auth.currentUser) return;

    setIsSaving(true);
    try {
      const entryData = {
        title,
        content,
        mood,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const entryRef = id === 'new'
        ? doc(collection(db, `users/${auth.currentUser.uid}/entries`))
        : doc(db, `users/${auth.currentUser.uid}/entries/${id}`);

      await (id === 'new' ? setDoc : updateDoc)(entryRef, entryData);

      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error saving entry:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      [{ color: [] }, { background: [] }],
      ['clean'],
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ReactConfetti
              width={window.innerWidth}
              height={window.innerHeight}
              colors={[
                colors.sakura,
                colors.maple,
                colors.ocean,
                colors.matcha,
                colors.fuji,
              ]}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 2,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ color: colors.ink, mb: 3 }}>
            {id === 'new' ? 'New Entry' : 'Edit Entry'}
          </Typography>

          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 3 }}
          />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Mood</InputLabel>
            <Select
              value={mood}
              label="Mood"
              onChange={(e) => setMood(e.target.value)}
            >
              <MenuItem value="happy">😊 Happy</MenuItem>
              <MenuItem value="neutral">😐 Neutral</MenuItem>
              <MenuItem value="sad">😔 Sad</MenuItem>
              <MenuItem value="excited">🎉 Excited</MenuItem>
              <MenuItem value="tired">😴 Tired</MenuItem>
            </Select>
          </FormControl>

          <Box
            sx={{
              '.ql-container': {
                height: '400px',
                fontSize: '1.1rem',
                mb: 3,
                border: `1px solid ${colors.stone}40`,
                borderTop: 'none',
                borderRadius: '0 0 4px 4px',
              },
              '.ql-editor': {
                fontFamily: 'inherit',
              },
              '.ql-toolbar': {
                border: `1px solid ${colors.stone}40`,
                borderRadius: '4px 4px 0 0',
              },
            }}
          >
            <ReactQuill
              value={content}
              onChange={setContent}
              modules={quillModules}
              placeholder="Write your thoughts..."
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            <Button
              variant="outlined"
              onClick={() => navigate('/')}
              sx={{
                color: colors.ink,
                borderColor: colors.ink,
                '&:hover': {
                  borderColor: colors.ink,
                  backgroundColor: `${colors.ink}10`,
                },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSave}
              disabled={isSaving || !title.trim() || !content.trim()}
              sx={{
                background: `linear-gradient(45deg, ${colors.ink}, ${colors.maple})`,
                color: 'white',
                '&:disabled': {
                  background: colors.stone,
                },
              }}
            >
              {isSaving ? 'Saving...' : 'Save Entry'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default JournalEntry; 