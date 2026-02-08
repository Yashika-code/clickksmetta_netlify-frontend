import { BarChart3, Shield, Zap, Target, Brain, Network } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Monitor campaign performance instantly with live data updates and interactive dashboards.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Smart Campaign Tracking',
    description: 'Advanced UTM tracking, custom parameters, and intelligent link management for all channels.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Fraud Protection',
    description: 'AI-powered fraud detection that blocks invalid clicks and protects your ad spend automatically.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Zap,
    title: 'Conversion Attribution',
    description: 'Multi-touch attribution models that show exactly which channels drive real results.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Brain,
    title: 'AI Insights',
    description: 'Machine learning algorithms that analyze patterns and suggest optimization strategies.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Network,
    title: 'Multi-Channel Tracking',
    description: 'Unified tracking across social, search, email, and affiliate channels in one platform.',
    color: 'from-pink-500 to-rose-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-blue rounded-full blur-3xl opacity-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-purple rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 glass rounded-full text-sm font-semibold text-neon-blue mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Track & Optimize
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade analytics tools built for modern marketing teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative glass rounded-2xl p-8 glass-hover cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl from-neon-blue to-neon-purple" />

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-semibold">Learn more</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glass rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Need Custom Enterprise Features?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get dedicated support, custom integrations, and white-label solutions for your organization
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold hover:shadow-2xl hover:shadow-neon-blue/50 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
