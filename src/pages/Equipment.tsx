import { motion } from 'framer-motion';
import { WrenchScrewdriverIcon, TruckIcon, BeakerIcon } from '@heroicons/react/24/outline';

const timeline = [
  {
    year: 2008,
    title: 'First Drilling Rig',
    description: 'Started operations with our first Mobile B-53 drilling rig',
    icon: WrenchScrewdriverIcon,
    image: '/images/truck machine.jpeg'
  },
  {
    year: 2012,
    title: 'Laboratory Equipment',
    description: 'Established state-of-the-art soil testing laboratory',
    icon: BeakerIcon,
    image: '/images/dude working.jpeg'
  },
  {
    year: 2015,
    title: 'Fleet Expansion',
    description: 'Added multiple drilling rigs and support vehicles',
    icon: TruckIcon,
    image: '/images/tank machine.jpeg'
  },
  {
    year: 2020,
    title: 'Modern Technology',
    description: 'Integrated digital logging and testing equipment',
    icon: WrenchScrewdriverIcon,
    image: '/images/big hole.jpeg'
  }
];

const currentEquipment = [
  {
    category: 'Drilling Rigs',
    items: [
      'Mobile B-53 HDX Drilling Rig',
      'CME-55 Track Mounted Rig',
      'Diedrich D-50 Turbo Diesel',
      'Mobile B-57 Heavy Duty'
    ]
  },
  {
    category: 'Testing Equipment',
    items: [
      'Standard Penetration Test (SPT) Equipment',
      'Cone Penetration Test (CPT) Unit',
      'Dynamic Cone Penetrometer',
      'Plate Load Testing System'
    ]
  },
  {
    category: 'Support Vehicles',
    items: [
      'Water Trucks',
      'Equipment Transport Trucks',
      'Service Vehicles',
      'Mobile Workshops'
    ]
  }
];

export default function Equipment() {
  return (
    <div className="space-y-32">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <img
          src="/images/bigtruck.jpeg"
          alt="Equipment"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Equipment</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            State-of-the-art drilling and testing equipment for all your geotechnical needs
          </p>
        </div>
      </div>

      {/* Timeline section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Journey</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Equipment Timeline
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Over the years, we've continuously invested in the latest technology and equipment
            to provide the best geotechnical services to our clients.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="w-1/2 space-y-4">
                  <div className="flex items-center gap-4">
                    <item.icon className="h-8 w-8 text-primary-600" />
                    <h3 className="text-2xl font-bold text-gray-900">{item.year}</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Current Equipment section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Fleet</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Current Equipment
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We maintain a diverse fleet of modern equipment to handle any geotechnical project.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {currentEquipment.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-gray-50 p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
              <ul className="mt-6 space-y-4">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <WrenchScrewdriverIcon className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 