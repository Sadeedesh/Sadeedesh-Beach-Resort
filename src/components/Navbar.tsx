import { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Navbar = ({ onBookNow }: { onBookNow: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Rooms', id: 'rooms' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50 border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center gap-2 sm:gap-3">
            <div className="bg-linear-to-br from-orange-500 to-pink-600 p-2 rounded-xl shadow-lg">
              
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold bg-linear-to-r from-orange-800 to-pink-700 bg-clip-text text-transparent resort-logo">Sadeedesh</h1>
              <p className="text-xs text-orange-600 font-medium tracking-widest hidden sm:block">BEACH RESORT</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm touch-target"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onBookNow}
              className="bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 touch-target"
            >
              Book Now
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-orange-600 transition-colors touch-target p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1 max-h-screen overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-300 rounded-md touch-target font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onBookNow();
                setIsOpen(false);
              }}
              className="w-full mt-3 bg-linear-to-r from-orange-500 to-pink-500 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 touch-target"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
