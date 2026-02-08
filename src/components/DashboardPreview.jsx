import { TrendingUp, Users, MousePointerClick, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function DashboardPreview() {
  const metrics = [
    {
      label: 'Active Campaigns',
      value: '247',
      change: '+18.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-blue-400',
    },
    {
      label: 'Total Clicks',
      value: '1.2M',
      change: '+24.5%',
      trend: 'up',
      icon: MousePointerClick,
      color: 'text-purple-400',
    },
    {
      label: 'Active Users',
      value: '48.2K',
      change: '+12.8%',
      trend: 'up',
      icon: Users,
      color: 'text-pink-400',
    },
    {
      label: 'Revenue',
      value: '$284K',
      change: '+31.4%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-400',
    },
  ];

  const topCampaigns = [
    { name: 'Summer Sale 2024', clicks: '124.5K', conversions: '8.2K', roi: '284%', status: 'active' },
    { name: 'Product Launch Q2', clicks: '98.3K', conversions: '6.7K', roi: '247%', status: 'active' },
    { name: 'Email Campaign #45', clicks: '76.8K', conversions: '5.1K', roi: '189%', status: 'active' },
    { name: 'Retargeting Flow', clicks: '54.2K', conversions: '4.3K', roi: '312%', status: 'active' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 glass rounded-full text-sm font-semibold text-neon-purple mb-4">
            Platform Overview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Your Marketing Hub,
            <br />
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              All in One Place
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time dashboards, powerful analytics, and actionable insights at your fingertips
          </p>
        </div>

        <div className="glass rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="glass rounded-xl p-6 glass-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-navy-800 ${metric.color}`}>
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm font-semibold ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    <span>{metric.change}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Performance Trends</h3>
                <select className="bg-navy-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Conversion Rate</span>
                  <span className="text-sm font-semibold">7.3%</span>
                </div>
                <div className="w-full bg-navy-700 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-neon-blue to-neon-purple h-2.5 rounded-full" style={{ width: '73%' }} />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-400">Click-Through Rate</span>
                  <span className="text-sm font-semibold">12.8%</span>
                </div>
                <div className="w-full bg-navy-700 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-neon-purple to-neon-pink h-2.5 rounded-full" style={{ width: '85%' }} />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-400">ROI Performance</span>
                  <span className="text-sm font-semibold">284%</span>
                </div>
                <div className="w-full bg-navy-700 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2.5 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>

              <div className="mt-6 p-4 bg-navy-800 rounded-lg border border-neon-blue/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Average Order Value</span>
                  <span className="text-xl font-bold text-neon-blue">$148.50</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Top Campaigns</h3>
                <button className="text-sm text-neon-blue hover:text-neon-purple transition-colors">
                  View All
                </button>
              </div>

              <div className="space-y-3">
                {topCampaigns.map((campaign, idx) => (
                  <div key={idx} className="p-4 bg-navy-800 rounded-lg hover:bg-navy-700 transition-colors cursor-pointer border border-gray-800 hover:border-neon-blue/30">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-semibold">{campaign.name}</span>
                          <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                            {campaign.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                          <span>{campaign.clicks} clicks</span>
                          <span>{campaign.conversions} conv.</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-green-400">{campaign.roi}</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 glass rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-bold mb-1">Ready to see your data?</h3>
                <p className="text-sm text-gray-400">Start tracking in under 5 minutes with our quick setup</p>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
