import { Quote, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Reviews = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
  const { ref: reviewsRef, isVisible: reviewsVisible } = useScrollAnimation(0.2);

  const reviews = [
    {
      name: 'Elena Vasquez',
      role: 'Creative Director',
      location: 'Barcelona, Spain',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'This isn\'t just a hotel—it\'s an experience that awakens your senses. From the moment I walked in, I felt like I was part of something extraordinary. The staff anticipated my needs before I even knew them.',
      rating: 5,
    },
    {
      name: 'Marcus Thompson',
      role: 'Tech Entrepreneur',
      location: 'San Francisco, USA',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'I\'ve stayed at luxury hotels worldwide, but Grand Vista redefined my expectations. The Innovation Hub Suite felt like stepping into the future—seamless technology wrapped in timeless elegance.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Wellness Coach',
      location: 'Mumbai, India',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The Renewal Retreat experience transformed my perspective on luxury travel. It\'s rare to find a place that nurtures both body and soul while maintaining such sophisticated comfort.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Investment Banker',
      location: 'Seoul, South Korea',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Every detail speaks to excellence. The lifestyle curator understood my preferences intuitively, creating experiences I didn\'t even know I wanted. This is hospitality elevated to an art form.',
      rating: 5,
    },
  ];



  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-amber-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div ref={titleRef as any} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-12'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">Guest Reviews</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by travelers worldwide, our commitment to excellence has earned us countless five-star reviews.
          </p>
        </div>

        <div ref={reviewsRef as any} className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-200 ${reviewsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          {reviews.map((review, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden transform hover:-translate-y-2 ${reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150 + 400}ms` }}>
              <Quote className="absolute top-4 right-4 text-orange-200 opacity-30" size={32} />
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{review.name}</h3>
                <p className="text-orange-700 font-semibold text-sm">{review.role}</p>
                <p className="text-gray-600 text-sm">{review.location}</p>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-orange-500 fill-orange-500" size={16} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;