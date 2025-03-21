import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import '@fontsource/outfit';
import '@fontsource/inter';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/about' },
  { name: 'Servicios', href: '/services' },
  { name: 'Galería', href: '/gallery' },
  { name: 'Contactar', href: '/contact' },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans dark:bg-dark-900 transition-colors duration-200">
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">INGESA</span>
              <img
                className="h-12 w-auto rounded transition-transform hover:scale-105"
                src="/images/logo.jpeg"
                alt="INGESA"
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark-700 dark:text-dark-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-dark-600 transition-colors hover:bg-dark-100 dark:text-dark-300 dark:hover:bg-dark-800"
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            <Link
              to="/contact"
              className="rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-primary-500 hover:shadow-primary-500/25 dark:bg-primary-500 dark:hover:bg-primary-400"
            >
              Contactar
            </Link>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel
                as={motion.div}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 dark:bg-dark-800 sm:max-w-sm sm:ring-1 sm:ring-dark-900/10"
              >
                <div className="flex items-center justify-between">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">INGESA</span>
                    <img
                      className="h-8 w-auto rounded"
                      src="/images/logo.jpeg"
                      alt="INGESA"
                    />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-dark-700 dark:text-dark-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Cerrar menú</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-dark-500/10 dark:divide-dark-700">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                            location.pathname === item.href
                              ? 'text-primary-600 dark:text-primary-400'
                              : 'text-dark-900 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-800'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            toggleTheme();
                            setMobileMenuOpen(false);
                          }}
                          className="rounded-full p-2 text-dark-600 transition-colors hover:bg-dark-100 dark:text-dark-300 dark:hover:bg-dark-800"
                          aria-label="Cambiar tema"
                        >
                          {theme === 'dark' ? (
                            <SunIcon className="h-5 w-5" />
                          ) : (
                            <MoonIcon className="h-5 w-5" />
                          )}
                        </button>
                        <Link
                          to="/contact"
                          className="rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-primary-500 hover:shadow-primary-500/25 dark:bg-primary-500 dark:hover:bg-primary-400"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Contactar
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          )}
        </AnimatePresence>
      </header>

      <main className="relative min-h-screen pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          {children}
        </motion.div>

        <footer className="mt-auto bg-white dark:bg-dark-900">
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <img
                  className="h-12 w-auto rounded bg-white/5 transition-transform hover:scale-105 dark:bg-white/10"
                  src="/images/logo.jpeg"
                  alt="FN Geodrilling"
                />
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-400">
                  FN Geodrilling - Servicios geotécnicos especializados desde 2003.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-dark-900 dark:text-white">Navegación</h3>
                <ul className="mt-4 space-y-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-dark-900 dark:text-white">Contacto</h3>
                <ul className="mt-4 space-y-3 text-sm text-dark-600 dark:text-dark-400">
                  <li>Santo Domingo, República Dominicana</li>
                  <li>+1 (849) 449-7231</li>
                  <li>fngeodrillingcntc@gmail.com</li>
                  <li>Lun-Vie: 08:30 AM - 5:30 PM</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-dark-900 dark:text-white">Servicios</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link to="/services#geotecnia" className="text-sm text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400">
                      Geotécnia
                    </Link>
                  </li>
                  <li>
                    <Link to="/services#laboratory" className="text-sm text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400">
                      Laboratorio de Materiales
                    </Link>
                  </li>
                  <li>
                    <Link to="/services#supervision" className="text-sm text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400">
                      Supervisión de Proyectos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-dark-200 pt-8 dark:border-dark-800">
              <p className="text-center text-xs text-dark-600 dark:text-dark-400">
                © {new Date().getFullYear()} FN Geodrilling | Todos los derechos reservados | Designed by{' '}
                <span className="font-medium">Ari</span>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
} 