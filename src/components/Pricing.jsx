import { useState } from 'react';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small teams',
    monthlyPrice: 49,
    yearlyPrice: 470,
    features: [
      '100K events per month',
      '3 team members',
      'Basic analytics',
      'Email support',
      '30-day data retention',
      'Standard integrations',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'For growing teams and agencies',
    monthlyPrice: 149,
    yearlyPrice: 1430,
    features: [
      '1M events per month',
      '10 team members',
      'Advanced analytics',
      'Priority support',
      '90-day data retention',
      'All integrations',
      'Custom reports',
      'API access',
      'Fraud detection',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      'Unlimited events',
      'Unlimited team members',
      'White-label solution',
      'Dedicated support',
      'Unlimited data retention',
      'Custom integrations',
      'SLA guarantee',
      'On-premise option',
      'Advanced security',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple rounded-full blur-3xl opacity-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-blue rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 glass rounded-full text-sm font-semibold text-neon-purple mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple, Transparent
            <br />
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <div className="glass rounded-full p-1 flex items-center">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                !isYearly
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                  : 'text-gray-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center space-x-2 ${
                isYearly
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                  : 'text-gray-400'
              }`}
            >
              <span>Yearly</span>
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative glass rounded-2xl p-8 ${
                plan.popular ? 'border-2 border-neon-blue' : ''
              } glass-hover`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-1 rounded-full flex items-center space-x-1">
                    <Zap className="w-3 h-3" />
                    <span className="text-xs font-bold">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              <div className="mb-8">
                {plan.monthlyPrice ? (
                  <>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold">
                        ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-gray-400 mt-2">
                        Billed ${plan.yearlyPrice} annually
                      </p>
                    )}
                  </>
                ) : (
                  <div className="text-3xl font-bold">Custom</div>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-xl font-semibold mb-8 transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/50'
                    : 'bg-navy-700 hover:bg-navy-600'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <span>Cancel anytime</span>
            <span>•</span>
            <span>No setup fees</span>
            <span>•</span>
            <span>24/7 support</span>
          </div>
        </div>

        <div className="mt-16 glass rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Need a custom plan?</h3>
              <p className="text-gray-400 leading-relaxed">
                We offer flexible pricing for high-volume businesses and custom enterprise requirements.
                Let's discuss your needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all">
                Contact Sales
              </button>
              <button className="flex-1 px-6 py-4 border border-gray-700 rounded-xl font-semibold hover:border-neon-blue transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
