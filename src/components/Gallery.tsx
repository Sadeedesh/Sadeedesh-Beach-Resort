import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
  const { ref: filtersRef, isVisible: filtersVisible } = useScrollAnimation(0.2);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.3);

  const categories = ['All', 'Rooms', 'Exterior', 'Amenities', 'Interior'];

  const images = [
    {
      src: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Luxury Suite',
      category: 'Rooms',
      height: 'h-64'
    },
    {
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Hotel Exterior',
      category: 'Exterior',
      height: 'h-80'
    },
    {
      src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Executive Room',
      category: 'Rooms',
      height: 'h-72'
    },
    {
      src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Presidential Suite',
      category: 'Rooms',
      height: 'h-96'
    },
    {
      src: 'https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Garden View',
      category: 'Amenities',
      height: 'h-60'
    },
    {
      src: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Family Suite',
      category: 'Rooms',
      height: 'h-88'
    },
    {
      src: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Business Center',
      category: 'Amenities',
      height: 'h-76'
    },
    {
      src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Hotel Lobby',
      category: 'Interior',
      height: 'h-84'
    }
  ];

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(image => image.category === activeFilter);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div ref={titleRef as any} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">Photo Gallery</h2>
          <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Discover the elegance and luxury that awaits you at Grand Vista Hotel through our curated collection of spaces.
          </p>
        </div>

        <div ref={filtersRef as any} className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${filtersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-linear-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-orange-600 hover:bg-orange-50 border border-orange-200'
              }`}
            >
              <Filter className="inline mr-2" size={16} />
              {category}
            </button>
          ))}
        </div>

        <div ref={galleryRef as any} className={`columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 transition-all duration-1000 delay-400 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-lg break-inside-avoid mb-6 ${image.height} transition-all duration-500 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100 + 600}ms` }}
              onClick={() => setSelectedImage(images.findIndex(img => img.src === image.src))}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">{image.alt}</p>
                  <p className="text-sm text-orange-300">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors"
            >
              <ChevronLeft size={48} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-semibold">{images[selectedImage].alt}</h3>
                <p className="text-orange-300">{images[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;