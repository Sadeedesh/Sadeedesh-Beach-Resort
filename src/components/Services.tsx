import { useState } from 'react';
import { Wifi, Car, Utensils, Dumbbell, Waves, Coffee, Bed, Users, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = ({ onBookNow }: { onBookNow?: () => void }) => {
  const [activeTab, setActiveTab] = useState('wellness');
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
  const { ref: tabsRef, isVisible: tabsVisible } = useScrollAnimation(0.2);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.3);

  const categories = [
    { id: 'wellness', label: 'Wellness & Spa', icon: Waves },
    { id: 'dining', label: 'Dining & Events', icon: Utensils },
    { id: 'business', label: 'Business & Tech', icon: Briefcase },
    { id: 'lifestyle', label: 'Lifestyle & Leisure', icon: Coffee },
  ];
  const servicesByCategory = {
    wellness: [
      { icon: Waves, title: 'Renewal Retreat Spa', description: 'Transformative wellness experiences with ancient and modern healing practices.' },
      { icon: Dumbbell, title: 'Vitality Studio', description: 'State-of-the-art fitness with celebrity trainers and biometric tracking.' },
      { icon: Bed, title: 'Sleep Sanctuary', description: 'Premium bedding and sleep optimization technology for perfect rest.' },
    ],
    dining: [
      { icon: Utensils, title: 'Culinary Journey', description: 'Michelin-inspired cuisine by world-renowned chefs, 24/7 availability.' },
      { icon: Coffee, title: 'Artisan Coffee Bar', description: 'Specialty coffee and tea experiences with master baristas.' },
      { icon: Users, title: 'Private Events', description: 'Bespoke event planning for intimate gatherings and celebrations.' },
    ],
    business: [
      { icon: Wifi, title: 'Digital Sanctuary', description: 'Ultra-fast connectivity and smart room technology integration.' },
      { icon: Briefcase, title: 'Executive Lounge', description: 'Premium workspace with meeting facilities and business support.' },
      { icon: Car, title: 'Arrival Artistry', description: 'White-glove valet and luxury transportation services.' },
    ],
    lifestyle: [
      { icon: Coffee, title: 'Lifestyle Curator', description: 'Personal concierge crafting bespoke experiences and recommendations.' },
      { icon: Users, title: 'Social Spaces', description: 'Curated lounges and terraces for networking and relaxation.' },
      { icon: Bed, title: 'Room Personalization', description: 'AI-powered room customization based on guest preferences.' },
    ],
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-purple-50 to-violet-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div ref={titleRef as any} className={`text-center mb-16 transition-all duration-1000 transform ${titleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">Signature Experiences</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Immersive experiences that elevate every moment of your journey, from arrival to departure and beyond.
          </p>
        </div>

        <div ref={tabsRef as any} className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 delay-200 transform hover-lift ${tabsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}>
          <div className="flex flex-wrap border-b border-gray-200">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-3 px-6 py-4 font-semibold transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white border-b-2 border-orange-600'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="hidden sm:inline">{category.label}</span>
                </button>
              );
            })}
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {servicesByCategory[activeTab as keyof typeof servicesByCategory].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className={`group p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-500 transform hover-lift ${tabsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`} style={{ transitionDelay: `${index * 100 + 400}ms` }}>
                    <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                      <Icon className="text-orange-700" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div ref={ctaRef as any} className={`mt-16 bg-gradient-to-r from-orange-700 to-purple-800 rounded-2xl p-12 text-center text-white transition-all duration-1000 delay-300 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Luxury?</h3>
          <p className="text-xl mb-8 text-orange-100">
            Our team of hospitality professionals is here to make your stay unforgettable.
          </p>
          <button
            onClick={onBookNow}
            className="bg-white text-orange-800 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Stay
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
