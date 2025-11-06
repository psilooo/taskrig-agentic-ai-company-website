import React from 'react';
import { Truck, Wrench, HardHat, Package, Factory, Hammer } from 'lucide-react';

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: Truck,
      title: 'Logistics & Fleet',
      description: 'Automate route optimization, dispatch, and real-time tracking.',
      image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Wrench,
      title: 'Field Service',
      description: 'Schedule jobs, manage technicians, and track equipment maintenance.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: HardHat,
      title: 'Construction',
      description: 'Coordinate crews, monitor progress, and manage materials inventory.',
      image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Package,
      title: 'Warehousing',
      description: 'Optimize inventory, automate picking, and streamline fulfillment.',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Monitor production lines, predict maintenance, and reduce downtime.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Hammer,
      title: 'Skilled Trades',
      description: 'Manage appointments, track jobs, and automate invoicing.',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <section id="use-cases" className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/50 backdrop-blur-sm border border-border rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Use Cases</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-text font-['Space_Grotesk']">
            Built For{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            From logistics to manufacturing, TaskRig adapts to your unique operational needs.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-surface/30 border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Icon Overlay */}
                <div className="absolute top-6 right-6 p-4 bg-surface/80 backdrop-blur-sm border border-border rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-3">
                <h3 className="text-2xl font-bold text-text font-['Space_Grotesk']">
                  {useCase.title}
                </h3>
                <p className="text-textSecondary leading-relaxed">
                  {useCase.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
