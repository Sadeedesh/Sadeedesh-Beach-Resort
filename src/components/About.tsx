import { Award, Globe, Leaf, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.3);
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation(0.2);

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Winner of Luxury Hotel of the Year 2024 and Forbes 5-Star rating for three consecutive years.',
    },
    {
      icon: Globe,
      title: 'Global Presence',
      description: 'Trusted by international travelers from 80+ countries with multilingual concierge services.',
    },
    {
      icon: Leaf,
      title: 'Green Certified',
      description: 'LEED Platinum certified with 100% renewable energy and zero-waste dining programs.',
    },
    {
      icon: Heart,
      title: 'Guest Loyalty',
      description: '85% return guest rate with personalized experiences remembered across every visit.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div ref={titleRef as any} className={`text-center mb-16 transition-all duration-1000 transform ${titleVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-20 -rotate-3'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4 resort-title">About Sadeedeh Beach Resort</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            More than just a place to stay, we're curators of extraordinary moments. Every guest's journey
            is uniquely crafted, blending modern luxury with personalized touches that feel like home.
          </p>
        </div>

        <div ref={contentRef as any} className={`grid lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 transform ${contentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-orange-800">Excellence in Numbers</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              Two decades of crafting unforgettable experiences, one guest at a time.
            </p>
            
            <div ref={statsRef as any} className={`grid md:grid-cols-2 gap-6 mt-8 transition-all duration-1000 delay-400 transform ${statsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <div className="text-3xl font-bold text-orange-700 mb-2">50K+</div>
                <div className="text-gray-600">Happy Guests</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-500">
                <div className="text-3xl font-bold text-pink-700 mb-2">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                <div className="text-3xl font-bold text-purple-700 mb-2">25</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <div className="text-3xl font-bold text-yellow-700 mb-2">24/7</div>
                <div className="text-gray-600">Concierge Service</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hotel exterior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl -z-10"></div>
          </div>
        </div>

        <div ref={achievementsRef as any} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${achievementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-orange-500 ${achievementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <div className="bg-gradient-to-br from-orange-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-orange-700" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h4>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
