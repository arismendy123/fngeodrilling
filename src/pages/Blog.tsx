import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline';

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

const articles = [
  {
    id: 1,
    title: "The Future of Enterprise Cloud Computing",
    excerpt: "Explore the latest trends and innovations in enterprise cloud solutions and how they're shaping business transformation.",
    image: "https://picsum.photos/seed/cloud/800/600",
    author: "David Chen",
    date: "March 1, 2024",
    category: "Cloud Computing",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Implementing Zero-Trust Security in Enterprise Networks",
    excerpt: "A comprehensive guide to implementing zero-trust architecture in your enterprise security infrastructure.",
    image: "https://picsum.photos/seed/security/800/600",
    author: "Sarah Williams",
    date: "February 28, 2024",
    category: "Security",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "AI-Driven Analytics for Business Intelligence",
    excerpt: "How artificial intelligence is revolutionizing business analytics and decision-making processes.",
    image: "https://picsum.photos/seed/artificial-intelligence/800/600",
    author: "Michael Zhang",
    date: "February 25, 2024",
    category: "AI & Analytics",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Digital Transformation Success Stories",
    excerpt: "Real-world examples of successful digital transformation initiatives and their impact on business outcomes.",
    image: "https://picsum.photos/seed/digital-transformation/800/600",
    author: "Emily Parker",
    date: "February 22, 2024",
    category: "Digital Transformation",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "The Rise of Edge Computing in Enterprise IoT",
    excerpt: "Understanding the role of edge computing in modern IoT implementations and its benefits for enterprises.",
    image: "https://picsum.photos/seed/iot/800/600",
    author: "James Wilson",
    date: "February 20, 2024",
    category: "IoT",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Enterprise API Integration Best Practices",
    excerpt: "Key considerations and best practices for successful API integration in enterprise environments.",
    image: "https://picsum.photos/seed/api/800/600",
    author: "Lisa Thompson",
    date: "February 18, 2024",
    category: "Integration",
    readTime: "5 min read",
  },
];

const categories = [
  "All",
  "Cloud Computing",
  "Security",
  "AI & Analytics",
  "Digital Transformation",
  "IoT",
  "Integration",
];

export default function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

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
            Latest Insights & News
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Stay updated with the latest trends, insights, and best practices in enterprise technology.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              variants={staggerContainer}
              transition={{ delay: index * 0.1 }}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={article.image}
                alt={article.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <div className="flex items-center gap-x-2">
                  <UserIcon className="h-5 w-5" />
                  {article.author}
                </div>
                <div className="mx-2">·</div>
                <div className="flex items-center gap-x-2">
                  <CalendarIcon className="h-5 w-5" />
                  {article.date}
                </div>
                <div className="mx-2">·</div>
                <div className="flex items-center gap-x-2">
                  <TagIcon className="h-5 w-5" />
                  {article.category}
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={`/blog/${article.id}`}>
                  <span className="absolute inset-0" />
                  {article.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-300">{article.excerpt}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delay: 0.4 }}
          className="mt-32 rounded-3xl bg-gray-900/5 dark:bg-white/5 px-6 py-16 sm:mt-40 sm:px-8 sm:py-24 lg:px-12"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <form className="mt-6 sm:flex sm:max-w-md sm:mx-auto">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:w-64 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 