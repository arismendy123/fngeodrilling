import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon } from '@heroicons/react/24/outline';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const tiers = [
  {
    name: 'Starter',
    price: 99,
    description: 'Perfect for small businesses just getting started.',
    features: [
      'Up to 10 team members',
      '5GB cloud storage',
      'Basic analytics',
      'Email support',
      'API access',
      'Basic integrations',
    ],
    cta: 'Start with Starter',
    featured: false,
  },
  {
    name: 'Professional',
    price: 199,
    description: 'Everything you need for a growing business.',
    features: [
      'Up to 50 team members',
      '50GB cloud storage',
      'Advanced analytics',
      'Priority email & phone support',
      'Advanced API access',
      'Premium integrations',
      'Custom workflows',
      'Team training',
    ],
    cta: 'Go Professional',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 399,
    description: 'Advanced features for large organizations.',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'Enterprise API access',
      'Custom integrations',
      'Advanced security',
      'Dedicated account manager',
      'On-premise deployment',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
];

export default function Pricing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={fadeIn}
              transition={{ delay: 0.1 * (index + 1) }}
              className={`relative flex flex-col rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10 ${
                tier.featured
                  ? 'z-10 scale-105 shadow-2xl ring-2 ring-primary-600'
                  : ''
              }`}
            >
              <div className="mb-8">
                <h3
                  className={`text-2xl font-bold ${
                    tier.featured
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {tier.description}
                </p>
                <p className="mt-6">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    ${tier.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
                    /month
                  </span>
                </p>
              </div>

              <div className="flex-1">
                <ul role="list" className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckIcon
                        className={`h-6 w-6 flex-none ${
                          tier.featured
                            ? 'text-primary-600 dark:text-primary-400'
                            : 'text-gray-600 dark:text-gray-400'
                        }`}
                      />
                      <span className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={tier.name === 'Enterprise' ? '/contact' : '#'}
                className={`mt-8 block rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-primary-600 text-white shadow-sm hover:bg-primary-500 focus-visible:outline-primary-600'
                    : 'bg-primary-50 text-primary-600 hover:bg-primary-100 dark:bg-primary-900 dark:text-primary-400 dark:hover:bg-primary-800'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-32 max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-700"
        >
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-700">
            {[
              {
                question: 'What forms of payment do you accept?',
                answer:
                  'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
              },
              {
                question: 'Can I change plans later?',
                answer:
                  'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
              },
              {
                question: 'What happens after my trial ends?',
                answer:
                  'After your 14-day trial, your selected plan will begin automatically. You can cancel at any time before the trial ends.',
              },
              {
                question: 'Is there a long-term contract?',
                answer:
                  'No, all our plans are month-to-month. You can cancel or change your plan at any time without penalty.',
              },
            ].map((faq) => (
              <div key={faq.question} className="pt-6">
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
} 