import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Wifi, Coffee, Car, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Rooms = ({ onBookNow }: { onBookNow: () => void }) => {
  const [currentRoom, setCurrentRoom] = useState(0);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
  const { ref: roomRef, isVisible: roomVisible } = useScrollAnimation(0.2);
  const { ref: thumbnailsRef, isVisible: thumbnailsVisible } = useScrollAnimation(0.3);
  const rooms = [
    {
      name: 'Skyline King Suite',
      description: 'Elevated luxury with floor-to-ceiling windows, Italian marble bath, and curated art collection.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: true,
      price: '$299',
    },
    {
      name: 'Metropolitan Twin',
      description: 'Contemporary elegance meets productivity with smart technology and exclusive club privileges.',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: true,
      price: '$199',
    },
    {
      name: 'Royal Penthouse',
      description: 'Ultimate indulgence with private elevator, rooftop terrace, and dedicated butler service.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: false,
      price: '$599',
    },
    {
      name: 'Zen Garden Retreat',
      description: 'Tranquil sanctuary with private garden access, meditation space, and wellness amenities.',
      image: 'https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: false,
      price: '$149',
    },
    {
      name: 'Heritage Family Villa',
      description: 'Multi-generational comfort with interconnected spaces, game room, and personalized concierge.',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: false,
      price: '$349',
    },
    {
      name: 'Innovation Hub Suite',
      description: 'Future-forward design with smart home technology, virtual meeting pods, and wellness integration.',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: false,
      price: '$229',
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-lineart-to-br from-pink-50 via-rose-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div ref={titleRef as any} className={`text-center mb-16 transition-all duration-1000 transform ${titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">Luxury Accommodations</h2>
          <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Sanctuaries of sophistication where every element harmonizes to create your perfect retreat.
            From intimate escapes to grand celebrations, find your ideal space.
          </p>
        </div>

        <div className="relative">
          <div ref={roomRef as any} className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 delay-200 transform hover-lift ${roomVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-6'}`}>
            <div className="grid lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <img
                  src={rooms[currentRoom].image}
                  alt={rooms[currentRoom].name}
                  className="w-full h-full object-cover"
                />
                {rooms[currentRoom].popular && (
                  <div className="absolute top-4 right-4 bg-linear-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-linear-to-r from-orange-600 to-pink-600 text-white px-4 py-2 rounded-full font-bold">
                  {rooms[currentRoom].price}/night
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  {[...Array(rooms[currentRoom].rating)].map((_, i) => (
                    <Star key={i} className="text-orange-500 fill-orange-500" size={20} />
                  ))}
                  <span className="ml-2 text-gray-600 font-semibold">5.0 Rating</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">{rooms[currentRoom].name}</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{rooms[currentRoom].description}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Wifi size={18} className="text-orange-600" />
                    <span>Free WiFi</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Coffee size={18} className="text-orange-600" />
                    <span>Room Service</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Car size={18} className="text-orange-600" />
                    <span>Valet Parking</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={18} className="text-orange-600" />
                    <span>Concierge</span>
                  </div>
                </div>

                <button 
                  onClick={onBookNow}
                  className="w-full bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setCurrentRoom(currentRoom === 0 ? rooms.length - 1 : currentRoom - 1)}
              className="bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {rooms.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentRoom(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentRoom ? 'w-8 bg-linear-to-r from-orange-500 to-pink-500' : 'w-3 bg-gray-300 hover:bg-orange-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentRoom(currentRoom === rooms.length - 1 ? 0 : currentRoom + 1)}
              className="bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div ref={thumbnailsRef as any} className={`grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 transition-all duration-1000 delay-400 transform ${thumbnailsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
            {rooms.map((room, index) => (
              <button
                key={index}
                onClick={() => setCurrentRoom(index)}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentRoom ? 'ring-4 ring-orange-500 scale-105' : 'hover:scale-105'
                }`}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-20 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold text-center px-2">{room.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;