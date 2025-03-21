import { motion } from 'framer-motion';
import { BeakerIcon, DocumentTextIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const articles = [
  {
    title: 'Understanding Soil Classification Tests',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: '/images/dude working.jpeg',
    author: 'Dr. Rodriguez',
    date: 'March 15, 2024',
    category: 'Soil Testing'
  },
  {
    title: 'Advanced Rock Core Analysis',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    image: '/images/big hole.jpeg',
    author: 'Eng. Martinez',
    date: 'March 10, 2024',
    category: 'Rock Testing'
  },
  {
    title: 'Modern Laboratory Equipment',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
    image: '/images/tank machine.jpeg',
    author: 'Tech. Gomez',
    date: 'March 5, 2024',
    category: 'Equipment'
  }
];

const testingServices = [
  {
    name: 'Soil Classification',
    description: 'Grain size analysis, Atterberg limits, moisture content, and specific gravity tests.',
    icon: BeakerIcon
  },
  {
    name: 'Strength Testing',
    description: 'Direct shear, triaxial compression, and unconfined compression tests.',
    icon: DocumentTextIcon
  },
  {
    name: 'Rock Testing',
    description: 'Point load strength index, slake durability, and rock quality designation.',
    icon: AcademicCapIcon
  }
];

export default function Laboratory() {
  return (
    <div className="space-y-32">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <img
          src="/images/dude working.jpeg"
          alt="Laboratory"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Geotechnical Laboratory
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            State-of-the-art testing facilities for comprehensive soil and rock analysis
          </p>
        </div>
      </div>

      {/* Testing Services section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Laboratory Testing Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide comprehensive laboratory testing services following ASTM standards
            to ensure accurate and reliable results for your projects.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testingServices.map((service) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col rounded-2xl bg-gray-50 p-8"
            >
              <div className="flex items-center gap-4">
                <service.icon className="h-8 w-8 text-primary-600" />
                <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
              </div>
              <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Articles section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Knowledge Center</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Articles
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay updated with our latest insights and developments in geotechnical testing.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {articles.map((article) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col overflow-hidden rounded-2xl bg-gray-50"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary-600">{article.category}</p>
                  <h3 className="mt-2 text-xl font-semibold leading-8 text-gray-900">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">{article.author}</p>
                    <p className="text-gray-600">{article.date}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 