import React from 'react';
import { Upload, Settings, Rocket, BarChart } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      number: '01',
      title: 'Connect Your Systems',
      description: 'Integrate TaskRig with your existing tools and workflows in minutes.',
    },
    {
      icon: Settings,
      number: '02',
      title: 'Configure Agents',
      description: 'Customize AI agents to handle your specific tasks and processes.',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Deploy & Automate',
      description: 'Launch your agents and watch them work 24/7 without supervision.',
    },
    {
      icon: BarChart,
      number: '04',
      title: 'Monitor & Optimize',
      description: 'Track performance and continuously improve with real-time insights.',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-32 bg-surface/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/50 backdrop-blur-sm border border-border rounded-full mb-4">
            <span className="text-sm font-medium text-primary">How It Works</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-text font-['Space_Grotesk']">
            Get Started In{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Four Steps
            </span>
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            From setup to automation in less than an hour. No coding required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-8 bg-surface/50 backdrop-blur-sm border border-border rounded-3xl hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center font-black text-2xl text-background shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-surface border border-border rounded-2xl group-hover:border-primary/50 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-text font-['Space_Grotesk']">
                      {step.title}
                    </h3>
                    <p className="text-textSecondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
