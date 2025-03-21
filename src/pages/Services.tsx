import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BeakerIcon,
  ChartBarIcon,
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  MapIcon,
  ClipboardDocumentCheckIcon,
  BoltIcon,
  CubeIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Geotécnia',
    description: 'Servicios completos de investigación geotécnica y análisis de suelos.',
    icon: WrenchScrewdriverIcon,
    features: [
      'Ensayos de Resistividad',
      'Perforaciones Mineras',
      'Ensayos en Pilotes',
      'Geofísica',
      'Instrumentación',
      'Supervisión de Proyectos',
    ],
    image: '/images/truck machine.jpeg',
  },
  {
    name: 'Laboratorio de Materiales',
    description: 'Laboratorio especializado en análisis de materiales y control de calidad.',
    icon: BeakerIcon,
    features: [
      'Control de Calidad QA/QC',
      'Análisis de Suelos',
      'Pruebas de Materiales',
      'Ensayos Normalizados',
      'Certificación de Calidad',
      'Informes Técnicos',
    ],
    image: '/images/dude working.jpeg',
  },
  {
    name: 'Ingeniería Estructural',
    description: 'Servicios de diseño y análisis estructural para proyectos de construcción.',
    icon: BuildingOffice2Icon,
    features: [
      'Diseño Estructural',
      'Análisis Sísmico',
      'Evaluación Estructural',
      'Reforzamiento',
      'Cálculo de Estructuras',
      'Supervisión Técnica',
    ],
    image: '/images/tank machine.jpeg',
  },
  {
    name: 'Ingeniería Hidráulica',
    description: 'Soluciones en ingeniería hidráulica y sistemas de drenaje.',
    icon: ChartBarIcon,
    features: [
      'Diseño de Drenajes',
      'Estudios Hidrológicos',
      'Sistemas de Riego',
      'Control de Erosión',
      'Manejo de Aguas',
      'Obras Hidráulicas',
    ],
    image: '/images/big hole.jpeg',
  },
];

const specialties = [
  'Investigaciones Geotécnicas para Plantas Fotovoltaicas',
  'Investigaciones Geotécnicas para Parques Eólicos',
  'Investigaciones Geotécnicas para Diseño de Carreteras',
  'Estabilidad de Taludes',
  'Perforaciones Mineras',
  'Pruebas de Integridad en Pilotes',
  'Pruebas de Carga Dinámicas y Estáticas',
  'Pruebas Pull Out Test para Perfiles Metálicos',
  'Resistividad Térmica',
  'Instrumentación de Terraplenes',
];

export default function Services() {
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
              Nuestros Servicios
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-600 dark:text-dark-300">
              Soluciones integrales en ingeniería geotécnica, desde investigación hasta consultoría especializada.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/50 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <div className="flex items-center gap-3">
                      <service.icon className="h-6 w-6 text-primary-400" />
                      <h3 className="text-xl font-semibold text-white">
                        {service.name}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-dark-900 dark:text-white">
                  Características
                </h4>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-dark-600 dark:text-dark-400"
                    >
                      <ArrowRightIcon className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Specialties Section */}
      <div className="bg-dark-50/50 dark:bg-dark-900/50 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-dark-900 dark:text-white">
              Nuestras Fortalezas
            </h2>
            <p className="mt-4 text-lg text-dark-600 dark:text-dark-400">
              Tenemos una amplia gama de servicios y equipos que van de la mano con nuestra experiencia,
              tenemos tecnología de punta para cada una de tus necesidades.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-16 max-w-4xl"
          >
            <ul className="grid gap-4 sm:grid-cols-2">
              {specialties.map((specialty, index) => (
                <motion.li
                  key={specialty}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-dark-800"
                >
                  <ArrowRightIcon className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400" />
                  <span className="text-dark-900 dark:text-white">{specialty}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
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
                ¿Necesitas una Cotización?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
                Contáctanos hoy para discutir tus necesidades de ingeniería geotécnica.
                Nuestro equipo de expertos está listo para ayudarte.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                <Link
                  to="/contact"
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-900 shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-white/25"
                >
                  Contactar
                </Link>
                <Link
                  to="/equipment"
                  className="group flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-white/90"
                >
                  Ver Equipamientos
                  <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 