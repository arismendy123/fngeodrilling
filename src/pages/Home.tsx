import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid';
import {
  BeakerIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

const services = [
  {
    name: 'Perforación Geotécnica',
    description: 'Servicios de SPT, Núcleos de Roca, Perforación Rotativa y Helicoidal con equipos de última generación.',
    icon: WrenchScrewdriverIcon,
    image: '/images/truck machine.jpeg',
    href: '/services#drilling',
  },
  {
    name: 'Laboratorio de Suelos',
    description: 'Ensayos completos de suelos y rocas siguiendo normas ASTM.',
    icon: BeakerIcon,
    image: '/images/dude working.jpeg',
    href: '/services#testing',
  },
  {
    name: 'Pruebas de Campo',
    description: 'Servicios de CPT, DCP, Pruebas de Carga y Densidad in situ.',
    icon: ChartBarIcon,
    image: '/images/tank machine.jpeg',
    href: '/services#field',
  },
  {
    name: 'Consultoría Geotécnica',
    description: 'Diseño de cimentaciones y recomendaciones geotécnicas por expertos.',
    icon: BuildingOffice2Icon,
    image: '/images/big hole.jpeg',
    href: '/services#consulting',
  },
];

const stats = [
  { id: 1, name: 'Años de Experiencia', value: '15+' },
  { id: 2, name: 'Proyectos Completados', value: '500+' },
  { id: 3, name: 'Clientes Satisfechos', value: '300+' },
  { id: 4, name: 'Unidades de Equipo', value: '20+' },
];

const carouselImages = [
  '/images/Imagen de WhatsApp 2025-03-19 a las 21.37.47_e33abd5b.jpg',
  '/images/Imagen de WhatsApp 2025-03-19 a las 21.39.18_a82bbb1e.jpg',
  '/images/Imagen de WhatsApp 2025-03-19 a las 21.39.19_e4aec842.jpg',
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        await Promise.all(
          carouselImages.map(
            (src) =>
              new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
              })
          )
        );
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setLoadingImages(false);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [imagesLoaded]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero section */}
      <div className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <AnimatePresence>
            {loadingImages && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loading />
              </div>
            )}
          </AnimatePresence>
          {imagesLoaded && carouselImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 overflow-hidden"
            >
              <img
                src={image}
                alt={`Servicios de perforación geotécnica en República Dominicana - Imagen ${index + 1}`}
                className="h-full w-full object-cover scale-[1.02] transform-gpu"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/70 via-dark-950/60 to-transparent" />
        </div>
        
        <div className="container relative mx-auto px-4 py-20 sm:py-32 md:py-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">FN Geodrilling</span>
              <span className="mt-2 block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Expertos en Perforación Geotécnica
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 max-w-xl sm:max-w-2xl">
              Somos líderes en servicios de perforación geotécnica, estudios de suelos y consultoría en República Dominicana.
              Con más de 15 años de experiencia, garantizamos soluciones confiables para sus proyectos.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto rounded-full bg-primary-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary-500 hover:shadow-primary-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Solicitar Cotización
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary-400"
              >
                Nuestros Servicios
                <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="flex justify-center gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentSlide === index
                    ? 'bg-white w-4'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="relative py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-dark-50/50 dark:bg-dark-900/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-lg transition-shadow hover:shadow-xl dark:bg-dark-800"
              >
                <dt className="text-sm font-medium text-dark-600 dark:text-dark-400">{stat.name}</dt>
                <dd className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-dark-900 dark:text-white">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>

      {/* Services section */}
      <div className="relative py-12 sm:py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">
              Nuestros Servicios
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-dark-900 dark:text-white sm:text-4xl">
              Soluciones Geotécnicas Integrales
            </p>
            <p className="mt-6 text-lg leading-8 text-dark-600 dark:text-dark-400">
              Ofrecemos una amplia gama de servicios geotécnicos para apoyar sus proyectos de construcción,
              desde la investigación inicial hasta el análisis detallado y recomendaciones.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-dark-800"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-x-3">
                    <service.icon 
                      className="h-6 w-6 flex-none text-primary-600 dark:text-primary-400" 
                      aria-hidden="true" 
                    />
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white">
                      {service.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-dark-600 dark:text-dark-400">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    Más información
                    <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0">
              <img
                src="/images/hole.jpeg"
                alt="Servicios de perforación geotécnica"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 to-dark-950/70" />
            </div>
            <div className="relative px-6 py-24 sm:px-12 sm:py-32">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  ¿Listo para Iniciar su Proyecto?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
                  Contáctenos hoy para discutir sus necesidades de ingeniería geotécnica. Nuestro equipo de expertos está listo para ayudarle a alcanzar sus objetivos de construcción.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                  <Link
                    to="/contact"
                    className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-dark-900 shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Contactar
                  </Link>
                  <Link
                    to="/gallery"
                    className="group flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary-400"
                  >
                    Ver Nuestros Proyectos
                    <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 