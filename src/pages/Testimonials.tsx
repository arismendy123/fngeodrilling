import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarIcon } from '@heroicons/react/24/solid';

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

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "CTO at TechCorp",
    image: "https://picsum.photos/seed/sarah/100/100",
    content: "The enterprise solutions provided have transformed our business operations. The seamless integration and powerful features have significantly improved our efficiency.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Director of Operations at InnovateCo",
    image: "https://picsum.photos/seed/michael/100/100",
    content: "Outstanding service and support. The team went above and beyond to ensure our needs were met. The custom solutions they developed perfectly fit our requirements.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CEO at GrowthTech",
    image: "https://picsum.photos/seed/emily/100/100",
    content: "Exceptional expertise and professionalism. Their enterprise solutions have helped us scale our operations while maintaining security and efficiency.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Head of IT at ScaleUp Inc",
    image: "https://picsum.photos/seed/david/100/100",
    content: "The cloud solutions implemented by the team have revolutionized our infrastructure. Highly recommended for any enterprise looking to modernize their systems.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Operations Manager at FutureFlow",
    image: "https://picsum.photos/seed/lisa/100/100",
    content: "Incredible attention to detail and customer service. The team is responsive and their technical expertise made the implementation process smooth.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "CIO at DataDrive",
    image: "https://picsum.photos/seed/james/100/100",
    content: "The analytics solutions provided have given us invaluable insights into our operations. The ROI has been remarkable, and the ongoing support is excellent.",
    rating: 5,
  },
];

const stats = [
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Support Available' },
  { value: '500+', label: 'Enterprise Clients' },
  { value: '99.9%', label: 'System Uptime' },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Client Testimonials
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about our enterprise solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={staggerContainer}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-y-3 border-l border-gray-200 dark:border-gray-800 pl-6 first:border-0 first:pl-0 lg:border-l"
            >
              <dt className="text-sm leading-6 text-gray-600 dark:text-gray-400">{stat.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-primary-600 dark:text-primary-400">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={staggerContainer}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col gap-6 rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delay: 0.4 }}
          className="mt-32 rounded-3xl bg-gray-900 px-6 py-20 sm:mt-40 sm:px-12 sm:py-32 lg:px-16"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join our growing list of satisfied enterprise clients and experience the difference our solutions can make.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Sales
              </a>
              <a href="/pricing" className="text-sm font-semibold leading-6 text-white">
                View Pricing <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 