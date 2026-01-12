import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation(0.1);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef as any} className="relative bg-orange-900 text-white pt-16 pb-8 overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        onError={(e) => {
          const target = e.target as HTMLVideoElement;
          target.style.display = 'none';
        }}
      >
        <source src="https://cdn.pixabay.com/vimeo/459761634/sunset-59717.mp4?width=1280&hash=b0e5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5" type="video/mp4" />
        <source src="https://player.vimeo.com/external/459761634.hd.mp4?s=f5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5&profile_id=175" type="video/mp4" />
      </video>
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-orange-900/30 to-orange-800/50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 transition-all duration-1000 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-linear-to-br from-orange-600 to-pink-700 p-2 rounded-xl shadow-lg">
                
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-linear-to-r from-white to-orange-100 bg-clip-text text-transparent resort-logo">Sadeedeh</h3>
                <p className="text-xs text-orange-300 font-medium tracking-widest">BEACH RESORT</p>
              </div>
            </div>
            <p className="text-orange-200 mb-6 leading-relaxed">
              Your premier destination for luxury hospitality. Creating unforgettable experiences and memories since 2003.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-orange-700 hover:bg-orange-600 p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                    aria-label="Social media link"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Rooms', id: 'rooms' },
                { label: 'Services', id: 'services' },
                { label: 'Reviews', id: 'reviews' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-orange-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-400 shrink-0 mt-1" size={20} />
                <span className="text-orange-200">
                  Weligama,<br />
                  Matara,Sri Lanka.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-400 shrink-0" size={20} />
                <span className="text-orange-200">+94 41 111 1111</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-400 shrink-0" size={20} />
                <span className="text-orange-200">sadeedesh499@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-orange-200 mb-4">
              Subscribe to receive updates on our latest offers and exclusive packages.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-orange-700/50 border border-orange-600 text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-orange-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-orange-200 text-center md:text-left">
              &copy; {new Date().getFullYear()}  Beach Resort. All rights reserved.
            </p>
            <div className="flex gap-6 text-orange-200">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
