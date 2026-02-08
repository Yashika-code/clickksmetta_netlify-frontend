import { Users, Building2, Megaphone, ShoppingCart } from 'lucide-react';

const useCases = [
  {
    icon: Users,
    title: 'For Affiliates',
    description: 'Track your affiliate campaigns across multiple networks with precision',
    features: [
      'Multi-network tracking',
      'Commission optimization',
      'Automatic link cloaking',
      'Performance analytics',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Building2,
    title: 'For Agencies',
    description: 'Manage multiple client campaigns from a single powerful dashboard',
    features: [
      'Client workspaces',
      'White-label reports',
      'Team collaboration',
      'Bulk campaign management',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Megaphone,
    title: 'For Advertisers',
    description: 'Optimize ad spend with advanced attribution and fraud prevention',
    features: [
      'Multi-touch attribution',
      'Fraud detection AI',
      'Budget optimization',
      'Cross-channel insights',
    ],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: ShoppingCart,
    title: 'For E-commerce',
    description: 'Connect your store and track every sale back to the source',
    features: [
      'Shopify integration',
      'Product-level tracking',
      'Customer journey maps',
      'Revenue attribution',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function UseCases() {
  return (
    <section id="solutions" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 glass rounded-full text-sm font-semibold text-neon-purple mb-4">
            Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for Every
            <br />
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Marketing Professional
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tailored solutions that fit your unique business needs and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl p-8 glass-hover"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <useCase.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-purple transition-colors">
                {useCase.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {useCase.description}
              </p>

              <ul className="space-y-3">
                {useCase.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center space-x-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${useCase.gradient}`} />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 text-sm font-semibold text-neon-purple hover:text-neon-pink transition-colors flex items-center space-x-2">
                <span>Learn more</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 glass rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Not sure which solution fits your needs?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our team will help you find the perfect setup for your business
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl font-semibold hover:shadow-2xl hover:shadow-neon-purple/50 transition-all">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
