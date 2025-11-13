import { ShoppingCart, Star } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      name: 'Deluxe King Suite',
      description: 'Spacious suite with king bed, city views, marble bathroom, and premium amenities for ultimate comfort.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: true,
      price: '$299',
    },
    {
      name: 'Executive Double Room',
      description: 'Modern room with two queen beds, work desk, and executive lounge access for business travelers.',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: true,
      price: '$199',
    },
    {
      name: 'Presidential Suite',
      description: 'Luxurious penthouse suite with panoramic views, private terrace, and personalized concierge service.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: false,
      price: '$599',
    },
    {
      name: 'Garden View Room',
      description: 'Peaceful room overlooking landscaped gardens with queen bed and modern amenities.',
      image: 'https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: false,
      price: '$149',
    },
    {
      name: 'Family Suite',
      description: 'Connecting rooms perfect for families with separate living area and kid-friendly amenities.',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: false,
      price: '$349',
    },
    {
      name: 'Business Class Room',
      description: 'Designed for business travelers with ergonomic workspace, high-speed internet, and meeting facilities.',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: false,
      price: '$229',
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Luxury Accommodations</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our carefully designed rooms and suites, each crafted to deliver
            exceptional comfort and unforgettable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {room.popular && (
                <div className="absolute top-4 right-4 z-10 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-amber-900 font-bold">{room.price}/night</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(room.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-500 fill-amber-500" size={16} />
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{room.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>

                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center group">
                  <ShoppingCart className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
