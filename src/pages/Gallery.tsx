import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface Categories {
  Equipment: GalleryItem[];
  Projects: GalleryItem[];
}

const categories: Categories = {
  'Equipment': [
    {
      id: 1,
      title: 'Equipo de Perforación',
      description: 'Nuestro equipo de perforación de última generación para investigaciones geotécnicas profundas.',
      imageUrl: '/images/bigtruck.jpeg',
    },
    {
      id: 2,
      title: 'Equipo de Laboratorio',
      description: 'Equipos modernos en nuestro laboratorio geotécnico.',
      imageUrl: '/images/dude working.jpeg',
    },
    {
      id: 3,
      title: 'Unidad de Pruebas',
      description: 'Unidad móvil para investigaciones en sitio.',
      imageUrl: '/images/tank machine.jpeg',
    },
    {
      id: 4,
      title: 'Equipo Especializado',
      description: 'Equipos personalizados para terrenos y condiciones desafiantes.',
      imageUrl: '/images/selfmademachina.jpeg',
    },
  ],
  'Projects': [
    {
      id: 5,
      title: 'Desarrollo Comercial',
      description: 'Investigación geotécnica para un importante complejo comercial en Santo Domingo.',
      imageUrl: '/images/big hole.jpeg',
    },
    {
      id: 6,
      title: 'Proyecto de Infraestructura',
      description: 'Pruebas de suelo y análisis para proyecto de expansión vial.',
      imageUrl: '/images/hole.jpeg',
    },
    {
      id: 7,
      title: 'Desarrollo Residencial',
      description: 'Estudios de cimentación para torres residenciales de lujo.',
      imageUrl: '/images/truck machine.jpeg',
    },
  ],
};

const images = [
  {
    src: '/images/Imagen de WhatsApp 2025-03-19 a las 21.37.47_e33abd5b.jpg',
    alt: 'Perforación y Muestreo',
    category: 'Campo',
  },
  {
    src: '/images/Imagen de WhatsApp 2025-03-19 a las 21.39.18_a82bbb1e.jpg',
    alt: 'Equipo Especializado',
    category: 'Equipos',
  },
  {
    src: '/images/Imagen de WhatsApp 2025-03-19 a las 21.39.19_e4aec842.jpg',
    alt: 'Análisis de Suelos',
    category: 'Laboratorio',
  },
  {
    src: '/images/truck machine.jpeg',
    alt: 'Equipo de Perforación Móvil',
    category: 'Equipos',
  },
  {
    src: '/images/tank machine.jpeg',
    alt: 'Unidad de Pruebas Especializadas',
    category: 'Equipos',
  },
  {
    src: '/images/dude working.jpeg',
    alt: 'Pruebas de Campo',
    category: 'Campo',
  },
  {
    src: '/images/big hole.jpeg',
    alt: 'Excavación Profunda',
    category: 'Campo',
  },
  {
    src: '/images/hole.jpeg',
    alt: 'Análisis de Suelo in Situ',
    category: 'Campo',
  },
  {
    src: '/images/bigtruck.jpeg',
    alt: 'Equipo Pesado de Perforación',
    category: 'Equipos',
  },
  {
    src: '/images/smallmachina.jpeg',
    alt: 'Equipo de Muestreo',
    category: 'Equipos',
  },
  {
    src: '/images/carr.jpeg',
    alt: 'Transporte de Equipos',
    category: 'Equipos',
  },
  {
    src: '/images/rich.jpeg',
    alt: 'Análisis de Laboratorio',
    category: 'Laboratorio',
  },
];

const categoryFilter = ['Todos', 'Campo', 'Equipos', 'Laboratorio'];

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentImage, setCurrentImage] = useState(-1);

  const filteredImages = selectedCategory === 'Todos' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-primary-600/20 via-primary-400/10 to-transparent dark:from-primary-900/30 dark:via-primary-800/20" />
        <div className="container mx-auto px-4 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-dark-900 dark:text-white sm:text-6xl">
              Galería de Proyectos
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-600 dark:text-dark-300">
              Explora nuestro trabajo en campo, equipos especializados y servicios de laboratorio.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categoryFilter.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 dark:bg-primary-500'
                  : 'bg-dark-100 text-dark-600 hover:bg-dark-200 dark:bg-dark-800 dark:text-dark-300 dark:hover:bg-dark-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-dark-100 dark:bg-dark-800"
              onClick={() => setCurrentImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/40 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA section */}
      <div className="relative py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-primary-600 dark:bg-primary-900"
          >
            <div className="relative px-6 py-24 sm:px-12 sm:py-32">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  ¿Listo para Iniciar tu Proyecto?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
                  Contáctanos hoy para discutir tus necesidades de ingeniería geotécnica. Nuestro equipo de expertos está listo para ayudarte.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                  <Link
                    to="/contact"
                    className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-900 shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-white/25"
                  >
                    Contactar
                  </Link>
                  <Link
                    to="/services"
                    className="group flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-white/90"
                  >
                    Ver Servicios
                    <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={currentImage >= 0}
        index={currentImage}
        close={() => setCurrentImage(-1)}
        slides={filteredImages}
      />
    </div>
  );
} 