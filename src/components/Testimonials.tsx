import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: 'Sarah Mitchell',
      role: 'Business Executive',
      location: 'New York, USA',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Grand Vista Hotel exceeded all expectations! The service was impeccable, the room was luxurious, and the staff went above and beyond to make our stay memorable.',
      rating: 5,
    },
    {
      name: 'James Chen',
      role: 'Travel Blogger',
      location: 'Singapore',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Staying at Grand Vista was an absolute delight. The attention to detail and commitment to guest satisfaction is evident in every aspect of the hotel experience.',
      rating: 5,
    },
    {
      name: 'Maria Rodriguez',
      role: 'Family Traveler',
      location: 'Madrid, Spain',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Perfect for our family vacation! The kids loved the amenities, and we appreciated the spacious family suite. The concierge helped us plan amazing local activities.',
      rating: 5,
    },
    {
      name: 'Ahmed Al-Mansouri',
      role: 'Frequent Traveler',
      location: 'Dubai, UAE',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Exceptional hospitality and world-class facilities. Grand Vista Hotel understands luxury travel, and they deliver an unforgettable experience every single time.',
      rating: 5,
    },
  ];

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Guest Reviews</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by travelers worldwide, our commitment to excellence has earned us countless five-star reviews.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-8 left-8 text-amber-200 opacity-50" size={64} />
            <Quote className="absolute bottom-8 right-8 text-amber-200 opacity-50 transform rotate-180" size={64} />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <img
                  src={reviews[activeIndex].image}
                  alt={reviews[activeIndex].name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-amber-200"
                />

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">{reviews[activeIndex].name}</h3>
                  <p className="text-amber-700 font-semibold">{reviews[activeIndex].role}</p>
                  <p className="text-gray-600">{reviews[activeIndex].location}</p>

                  <div className="flex items-center justify-center md:justify-start mt-2">
                    {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-amber-500 fill-amber-500" size={20} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed italic">
                "{reviews[activeIndex].text}"
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-amber-600' : 'w-3 bg-gray-300 hover:bg-amber-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
