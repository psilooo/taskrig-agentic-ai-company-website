import React from 'react';
import { TrendingUp, Users, Zap, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '10x',
      label: 'Productivity Increase',
      color: 'text-primary',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Companies Trust Us',
      color: 'text-accent',
    },
    {
      icon: Zap,
      value: '1M+',
      label: 'Tasks Automated',
      color: 'text-primary',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Always Working',
      color: 'text-accent',
    },
  ];

  return (
    <section className="relative py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 bg-surface/50 backdrop-blur-sm border border-border rounded-3xl hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-4">
                <stat.icon className={`w-10 h-10 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                <div>
                  <div className="text-4xl font-black text-text font-['Space_Grotesk']">
                    {stat.value}
                  </div>
                  <div className="text-sm text-textSecondary font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
