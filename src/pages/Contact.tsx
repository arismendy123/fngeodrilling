import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const contactInfo = [
  {
    name: 'Correo',
    description: 'fngeodrillingcntc@gmail.com',
    href: 'mailto:fngeodrillingcntc@gmail.com',
    icon: EnvelopeIcon,
  },
  {
    name: 'Teléfono',
    description: '+1 (849) 449-7231',
    href: 'tel:+18494497231',
    icon: PhoneIcon,
  },
  {
    name: 'Oficina',
    description: 'Santo Domingo, República Dominicana',
    href: 'https://maps.google.com',
    icon: MapPinIcon,
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setFormStatus('success');
      form.current?.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-dark-900">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-br from-primary-600/5 via-primary-400/5 to-transparent dark:from-primary-900/20 dark:via-primary-800/10" />
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="relative"
          >
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-dark-900 dark:text-white sm:text-5xl">
                Contáctanos
              </h1>
              <p className="mt-6 text-lg leading-8 text-dark-600 dark:text-dark-300">
                ¿Tienes preguntas? Nos encantaría escucharte. Envíanos un mensaje y te responderemos lo antes posible.
              </p>
              <dl className="mt-10 space-y-6">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={fadeIn}
                    className="relative flex items-center gap-6 rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-dark-800"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600/10 dark:bg-primary-400/10">
                      <item.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <dt className="font-semibold text-dark-900 dark:text-white">
                        {item.name}
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={item.href}
                          className="text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400"
                        >
                          {item.description}
                        </a>
                      </dd>
                    </div>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <form ref={form} onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-lg dark:bg-dark-800">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-dark-900 dark:text-white"
                  >
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="user_name"
                      id="first-name"
                      required
                      autoComplete="given-name"
                      className="block w-full rounded-lg border-0 bg-dark-50 px-4 py-3 text-dark-900 shadow-sm ring-1 ring-inset ring-dark-200 placeholder:text-dark-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-dark-700 dark:text-white dark:ring-dark-600 dark:placeholder:text-dark-400 dark:focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-dark-900 dark:text-white"
                  >
                    Apellido
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="user_lastname"
                      id="last-name"
                      required
                      autoComplete="family-name"
                      className="block w-full rounded-lg border-0 bg-dark-50 px-4 py-3 text-dark-900 shadow-sm ring-1 ring-inset ring-dark-200 placeholder:text-dark-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-dark-700 dark:text-white dark:ring-dark-600 dark:placeholder:text-dark-400 dark:focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark-900 dark:text-white"
                  >
                    Correo electrónico
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-lg border-0 bg-dark-50 px-4 py-3 text-dark-900 shadow-sm ring-1 ring-inset ring-dark-200 placeholder:text-dark-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-dark-700 dark:text-white dark:ring-dark-600 dark:placeholder:text-dark-400 dark:focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-dark-900 dark:text-white"
                  >
                    Teléfono
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="user_phone"
                      id="phone"
                      required
                      autoComplete="tel"
                      className="block w-full rounded-lg border-0 bg-dark-50 px-4 py-3 text-dark-900 shadow-sm ring-1 ring-inset ring-dark-200 placeholder:text-dark-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-dark-700 dark:text-white dark:ring-dark-600 dark:placeholder:text-dark-400 dark:focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark-900 dark:text-white"
                  >
                    Mensaje
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={4}
                      className="block w-full rounded-lg border-0 bg-dark-50 px-4 py-3 text-dark-900 shadow-sm ring-1 ring-inset ring-dark-200 placeholder:text-dark-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-dark-700 dark:text-white dark:ring-dark-600 dark:placeholder:text-dark-400 dark:focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full rounded-full bg-primary-600 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary-500 hover:shadow-primary-500/25 dark:bg-primary-500 dark:hover:bg-primary-400 disabled:opacity-70"
                >
                  {formStatus === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
                
                {formStatus === 'success' && (
                  <p className="mt-4 text-center text-sm text-green-600 dark:text-green-400">
                    ¡Mensaje enviado con éxito! Te contactaremos pronto.
                  </p>
                )}
                
                {formStatus === 'error' && (
                  <p className="mt-4 text-center text-sm text-red-600 dark:text-red-400">
                    Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ delay: 0.4 }}
        className="container mx-auto px-4 pb-16"
      >
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title="Ubicación de la Oficina"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121968.85330282553!2d-69.98959569059431!3d18.481679563407534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89f1107ea5ab%3A0xd6c587b82715c164!2sSanto%20Domingo%2C%20Dominican%20Republic!5e0!3m2!1sen!2sus!4v1647128498802!5m2!1sen!2sus"
            className="aspect-video w-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
} 