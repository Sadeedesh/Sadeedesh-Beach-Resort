import { ArrowRight } from 'lucide-react';
import { useScrollAnimation, useParallaxScroll } from '../hooks/useScrollAnimation';

const Hero = ({ onBookNow }: { onBookNow: () => void }) => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.3);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.2);
  const parallaxOffset = useParallaxScroll(0.3);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef as any} id="home" className="relative min-h-screen bg-black overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-75"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/50" />

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-3 gap-12 items-center min-h-screen py-16">
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 transform ${heroVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="bg-linear-to-br from-orange-500 to-pink-500 p-3 rounded-xl shadow-2xl border-2 border-white/30">
                  
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white resort-title">
                    Sadeedesh
                  </h1>
                  <p className="text-orange-300 font-semibold tracking-wide text-sm uppercase">Beach Resort</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl text-white font-bold leading-tight">
                Premium Beachfront Hospitality
              </h2>
              
              <p className="text-lg text-white max-w-2xl leading-relaxed">
                Experience unparalleled luxury and professional service at our award-winning beachfront resort. 
                Where business excellence meets leisure perfection.
              </p>
              
              <div ref={statsRef as any} className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 transition-all duration-1000 delay-300 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-white p-2 rounded-md shadow-md border-l-2 border-orange-500">
                  <div className="text-lg font-bold text-orange-600">50K+</div>
                  <div className="text-xs text-gray-600">Satisfied Guests</div>
                </div>
                <div className="bg-white p-2 rounded-md shadow-md border-l-2 border-pink-500">
                  <div className="text-lg font-bold text-pink-600">98%</div>
                  <div className="text-xs text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="bg-white p-2 rounded-md shadow-md border-l-2 border-purple-500">
                  <div className="text-lg font-bold text-purple-600">25</div>
                  <div className="text-xs text-gray-600">Industry Awards</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('rooms')}
                className="group px-6 py-2 bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center text-sm"
              >
                View Accommodations
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold rounded-lg transition-all duration-300 text-sm"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div ref={formRef as any} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/20 transition-all duration-1000 delay-500 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="text-center mb-4">
              <div className="bg-linear-to-r from-orange-500 to-pink-500 p-1 rounded-xl mb-3">
                <div className="bg-white rounded-xl p-3">
                  <h3 className="text-lg font-bold bg-linear-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-1">Instant Booking</h3>
                  <p className="text-gray-700 text-sm">Your luxury escape awaits</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 mb-3">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">CHECK-IN</label>
                  <input type="date" className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs focus:border-orange-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">CHECK-OUT</label>
                  <input type="date" className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs focus:border-orange-500 outline-none" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-3">
                <select className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs focus:border-orange-500 outline-none">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3+ Guests</option>
                </select>
                <select className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs focus:border-orange-500 outline-none">
                  <option>Any Room</option>
                  <option>Suite</option>
                  <option>Penthouse</option>
                </select>
              </div>
              
              <button
                type="button"
                onClick={onBookNow}
                className="w-full bg-linear-to-r from-orange-500 to-pink-500 text-white font-bold py-2 rounded-xl shadow-lg text-sm hover:shadow-xl transition-all"
              >
                🏨 Reserve Now
              </button>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center gap-4 text-xs text-white/80 mb-2">
                <span>✨ Instant Confirm</span>
                <span>🔒 Secure</span>
                <span>📞 24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
