import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hole.jpeg"
          alt="Background"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/70 via-dark-950/60 to-transparent" />
      </div>
      
      <div className="container relative mx-auto flex min-h-[calc(100vh-5rem)] items-center px-4 py-20 sm:py-32 md:py-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-3xl font-bold tracking-tight text-dark-900 dark:text-white sm:text-4xl md:text-5xl">
            Próximamente
          </h1>
          <p className="mt-6 text-lg leading-8 text-dark-600 dark:text-dark-300">
            Esta página está en construcción. Mientras tanto, te invitamos a explorar nuestros servicios disponibles.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/"
              className="rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-primary-500 hover:shadow-primary-500/25 dark:bg-primary-500 dark:hover:bg-primary-400"
            >
              Volver al Inicio
            </Link>
            <Link
              to="/services"
              className="group flex items-center gap-2 text-sm font-medium text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-300 dark:hover:text-primary-400"
            >
              Ver Servicios
              <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 