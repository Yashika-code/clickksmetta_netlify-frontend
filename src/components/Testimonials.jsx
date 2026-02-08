import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Head of Growth',
    company: 'TechFlow Inc',
    avatar: 'SC',
    rating: 5,
    text: 'ClicksMeta transformed how we track our marketing campaigns. The real-time insights and fraud detection saved us over $50K in the first month alone.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthLabs',
    avatar: 'MR',
    rating: 5,
    text: 'The multi-touch attribution finally shows us which channels actually drive conversions. This is the analytics platform we have been waiting for.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Emily Watson',
    role: 'Affiliate Manager',
    company: 'Digital Ventures',
    avatar: 'EW',
    rating: 5,
    text: 'Managing hundreds of campaigns across networks used to be chaos. ClicksMeta brought order and clarity. Our ROI increased 47% in Q2.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'David Park',
    role: 'CEO',
    company: 'E-com Solutions',
    avatar: 'DP',
    rating: 5,
    text: 'Best investment we made this year. The platform is intuitive, powerful, and the support team is exceptional. Highly recommend.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Lisa Thompson',
    role: 'Performance Lead',
    company: 'AdScale Media',
    avatar: 'LT',
    rating: 5,
    text: 'We switched from three different tools to just ClicksMeta. The unified dashboard and AI insights have been game-changing for our agency.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'James Wilson',
    role: 'CMO',
    company: 'RetailMax',
    avatar: 'JW',
    rating: 5,
    text: 'The Shopify integration is seamless and the product-level tracking gives us insights we never had before. Revenue attribution is finally accurate.',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy-900" />

      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 glass rounded-full text-sm font-semibold text-neon-blue mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Trusted by Marketing
            <br />
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of marketers who have transformed their analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 glass-hover relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-neon-blue/20" />

              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center font-bold text-sm`}>
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed text-sm">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              10K+
            </div>
            <p className="text-sm text-gray-400">Active Users</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              100M+
            </div>
            <p className="text-sm text-gray-400">Events Tracked</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
              99.9%
            </div>
            <p className="text-sm text-gray-400">Uptime</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              4.9/5
            </div>
            <p className="text-sm text-gray-400">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
