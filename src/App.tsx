import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { Suspense } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// SEO metadata
const seoMetadata = {
  title: 'FN Geodrilling - Servicios Geotécnicos en República Dominicana',
  description: 'Empresa líder en perforación geotécnica y estudios de suelos en República Dominicana. Servicios especializados de geotecnia, laboratorio y consultoría.',
  keywords: 'perforación geotécnica, estudios de suelos, geotecnia República Dominicana, SPT, ensayos de laboratorio, consultoría geotécnica',
};

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Suspense>
            <AnimatedRoutes />
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
