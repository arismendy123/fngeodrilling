import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BuildingOffice2Icon,
  GlobeAmericasIcon,
  TrophyIcon,
  UserGroupIcon,
  BeakerIcon,
  ShieldCheckIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const values = [
  {
    name: 'Excelencia',
    description: 'Nos esforzamos por la excelencia en cada proyecto, entregando resultados de alta calidad que superan las expectativas.',
    icon: TrophyIcon,
  },
  {
    name: 'Experiencia',
    description: 'Nuestro equipo de profesionales certificados aporta décadas de experiencia combinada en ingeniería geotécnica.',
    icon: UserGroupIcon,
  },
  {
    name: 'Innovación',
    description: 'Invertimos en la última tecnología y métodos para proporcionar soluciones de vanguardia a nuestros clientes.',
    icon: BeakerIcon,
  },
  {
    name: 'Confiabilidad',
    description: 'Cuente con nosotros para un servicio confiable, resultados precisos y finalización oportuna del proyecto.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Conocimiento Local',
    description: 'Profundo entendimiento de las condiciones geológicas y requisitos de construcción de la República Dominicana.',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'Enfoque al Cliente',
    description: 'Priorizamos las necesidades de nuestros clientes, proporcionando soluciones personalizadas y servicio excepcional.',
    icon: BuildingOffice2Icon,
  },
];

const timeline = [
  {
    name: 'Fundación',
    description: 'FN Geodrilling se estableció en Santo Domingo, República Dominicana.',
    date: '2008',
  },
  {
    name: 'Primer Proyecto Mayor',
    description: 'Completamos nuestra primera investigación geotécnica a gran escala para un proyecto de infraestructura importante.',
    date: '2009',
  },
  {
    name: 'Expansión del Laboratorio',
    description: 'Inauguramos nuestro laboratorio de pruebas geotécnicas de última generación.',
    date: '2012',
  },
  {
    name: 'Certificación ISO',
    description: 'Obtuvimos la certificación ISO 9001 para nuestro sistema de gestión de calidad.',
    date: '2015',
  },
  {
    name: 'Modernización de Equipos',
    description: 'Inversión importante en equipos de perforación modernos y tecnología de pruebas.',
    date: '2018',
  },
  {
    name: 'Expansión Regional',
    description: 'Extendimos nuestros servicios para cubrir toda la República Dominicana.',
    date: '2020',
  },
];

// SEO metadata
const seoMetadata = {
  title: 'Sobre FN Geodrilling - Expertos en Geotecnia en República Dominicana',
  description: 'Más de 15 años de experiencia en servicios geotécnicos, perforación y estudios de suelos en República Dominicana. Conoce nuestra historia y valores.',
  keywords: 'FN Geodrilling, empresa geotécnica, perforación República Dominicana, estudios de suelos, historia empresa geotécnica, servicios geotécnicos Santo Domingo',
};

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/dude working.jpeg";
    img.onload = () => setImageLoaded(true);
    return () => {
      img.onload = null;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-24"
    >
      {/* Hero section */}
      <div className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-dark-900/90 dark:from-dark-950 dark:via-primary-950/50 dark:to-dark-900">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 mix-blend-overlay"
          >
            <img
              src="/images/dude working.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-primary-500/20 to-transparent dark:from-primary-950/40 dark:via-primary-900/30 dark:to-transparent" />
        </div>
        <div className="container relative mx-auto px-4 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-tight text-dark-900 dark:text-white sm:text-6xl">
              Sobre FN Geodrilling
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-600 dark:text-dark-300">
              Desde 2008, FN Geodrilling ha estado a la vanguardia de la ingeniería geotécnica en la República Dominicana.
              Nuestro compromiso con la excelencia, innovación y satisfacción del cliente nos ha convertido en un socio confiable
              para proyectos de construcción y desarrollo en todo el país.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/contact"
                className="rounded-full bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary-500 hover:shadow-primary-500/25 dark:bg-primary-500 dark:hover:bg-primary-400"
              >
                Contáctanos
              </Link>
              <Link
                to="/gallery"
                className="group flex items-center gap-2 text-sm font-semibold text-dark-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
              >
                Ver Nuestros Proyectos
                <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values section */}
      <div className="relative py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">
              Nuestros Valores
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-dark-900 dark:text-white sm:text-4xl">
              Lo Que Nos Distingue
            </p>
            <p className="mt-6 text-lg leading-8 text-dark-600 dark:text-dark-400">
              Nuestros valores fundamentales guían todo lo que hacemos, desde cómo interactuamos con los clientes hasta cómo ejecutamos los proyectos.
              Estos principios han sido la base de nuestro éxito durante más de 15 años.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl dark:bg-dark-800"
              >
                <dt className="flex items-center gap-x-3">
                  <value.icon 
                    className="h-6 w-6 flex-none text-primary-600 dark:text-primary-400" 
                    aria-hidden="true" 
                  />
                  <span className="text-lg font-semibold text-dark-900 dark:text-white">
                    {value.name}
                  </span>
                </dt>
                <dd className="mt-4 text-dark-600 dark:text-dark-400">
                  {value.description}
                </dd>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Timeline section */}
      <div className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-dark-50/50 dark:bg-dark-900/50" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">
              Nuestra Trayectoria
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-dark-900 dark:text-white sm:text-4xl">
              Creciendo Juntos Desde 2008
            </p>
            <p className="mt-6 text-lg leading-8 text-dark-600 dark:text-dark-400">
              Desde nuestros humildes comienzos hasta convertirnos en una empresa líder en ingeniería geotécnica,
              nuestra trayectoria ha estado marcada por el crecimiento continuo y la innovación.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-16 max-w-4xl"
          >
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-dark-200 dark:bg-dark-700" />
              
              <div className="space-y-16">
                {timeline.map((event, index) => (
                  <motion.div
                    key={event.date}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className="relative w-full lg:w-1/2">
                      <div className="rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-dark-800">
                        <time className="block text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {event.date}
                        </time>
                        <h3 className="mt-2 text-lg font-semibold text-dark-900 dark:text-white">
                          {event.name}
                        </h3>
                        <p className="mt-2 text-dark-600 dark:text-dark-400">
                          {event.description}
                        </p>
                      </div>
                      <div className={`absolute top-1/2 ${
                        index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                      } -translate-y-1/2 h-4 w-4 rounded-full border-4 border-primary-600 bg-white dark:border-primary-400 dark:bg-dark-800`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
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
              <div className="h-full w-full bg-gradient-to-br from-primary-600 to-primary-900 opacity-90 dark:from-primary-800 dark:to-primary-950" />
            </div>
            <div className="relative px-6 py-24 sm:px-12 sm:py-32">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Colabora con FN Geodrilling
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
                  Deja que nuestra experiencia y conocimientos guíen tu próximo proyecto hacia el éxito.
                  Contáctanos hoy para discutir tus necesidades de ingeniería geotécnica.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                  <Link
                    to="/contact"
                    className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-900 shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-white/25"
                  >
                    Contáctanos
                  </Link>
                  <Link
                    to="/gallery"
                    className="group flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-white/90"
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
    </motion.div>
  );
} 