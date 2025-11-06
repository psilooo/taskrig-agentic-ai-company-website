import React from 'react';
import { Bot, Shield, Gauge, Workflow, Database, Cpu } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Agents',
      description: 'AI-powered agents that learn and adapt to your specific workflows and requirements.',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Workflow,
      title: 'Seamless Integration',
      description: 'Connect with your existing tools and systems without disrupting operations.',
      gradient: 'from-accent to-primary',
    },
    {
      icon: Gauge,
      title: 'Real-Time Monitoring',
      description: 'Track performance, efficiency, and results with comprehensive dashboards.',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance standards to protect your data.',
      gradient: 'from-accent to-primary',
    },
    {
      icon: Database,
      title: 'Scalable Infrastructure',
      description: 'Grow from 10 to 10,000 agents without missing a beat.',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Cpu,
      title: 'Custom Workflows',
      description: 'Build agents tailored to your unique processes and business logic.',
      gradient: 'from-accent to-primary',
    },
  ];

  return (
    <section id="features" className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/50 backdrop-blur-sm border border-border rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-text font-['Space_Grotesk']">
            Built For The{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Real World
            </span>
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Everything you need to automate operations and scale your business with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-surface/30 backdrop-blur-sm border border-border rounded-3xl hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-background" />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-3">
                <h3 className="text-2xl font-bold text-text font-['Space_Grotesk']">
                  {feature.title}
                </h3>
                <p className="text-textSecondary leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500 rounded-b-3xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
