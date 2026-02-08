import { ArrowRight, Play, TrendingUp, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-slide-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
            <Zap className="w-4 h-4 text-neon-blue" />
            <span className="text-sm text-gray-300">Trusted by 10,000+ marketers worldwide</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Smarter Marketing
            <br />
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Analytics & Tracking
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real-time attribution, fraud detection, and AI-powered insights for modern marketing teams.
            Track every click, optimize every campaign, and maximize your ROI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-neon-blue/50 transition-all flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass rounded-xl font-semibold text-lg glass-hover flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="w-5 h-5 text-neon-blue" />
                <span className="text-2xl font-bold">99.9%</span>
              </div>
              <p className="text-sm text-gray-400">Uptime SLA</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5 text-neon-purple" />
                <span className="text-2xl font-bold">100M+</span>
              </div>
              <p className="text-sm text-gray-400">Events/Day</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5 text-neon-pink" />
                <span className="text-2xl font-bold">&lt;50ms</span>
              </div>
              <p className="text-sm text-gray-400">Response Time</p>
            </div>
          </div>
        </div>

        <div className="mt-20 relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass rounded-2xl p-2 shadow-2xl">
            <div className="bg-navy-800 rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-sm text-gray-500">dashboard.clicksmeta.io</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="glass rounded-xl p-4 glass-hover">
                  <div className="text-sm text-gray-400 mb-1">Total Clicks</div>
                  <div className="text-3xl font-bold text-neon-blue">248.5K</div>
                  <div className="text-sm text-green-400 mt-1">+12.5% vs last week</div>
                </div>
                <div className="glass rounded-xl p-4 glass-hover">
                  <div className="text-sm text-gray-400 mb-1">Conversions</div>
                  <div className="text-3xl font-bold text-neon-purple">18.2K</div>
                  <div className="text-sm text-green-400 mt-1">+8.3% vs last week</div>
                </div>
                <div className="glass rounded-xl p-4 glass-hover">
                  <div className="text-sm text-gray-400 mb-1">Revenue</div>
                  <div className="text-3xl font-bold text-neon-pink">$127.3K</div>
                  <div className="text-sm text-green-400 mt-1">+15.7% vs last week</div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold">Campaign Performance</span>
                  <span className="text-xs text-gray-400">Last 7 days</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Facebook Ads', value: 92, color: 'bg-blue-500' },
                    { name: 'Google Ads', value: 85, color: 'bg-green-500' },
                    { name: 'TikTok Ads', value: 78, color: 'bg-pink-500' },
                    { name: 'LinkedIn Ads', value: 71, color: 'bg-purple-500' },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-300">{item.name}</span>
                        <span className="text-gray-400">{item.value}%</span>
                      </div>
                      <div className="w-full bg-navy-700 rounded-full h-2">
                        <div
                          className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm mb-6">Trusted by leading brands worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {['Google', 'Meta', 'Amazon', 'Shopify', 'Stripe', 'Nike'].map((brand, idx) => (
              <div key={idx} className="text-2xl font-bold text-gray-600">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
