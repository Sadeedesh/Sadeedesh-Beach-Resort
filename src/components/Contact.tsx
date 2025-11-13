import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = ({ onBookNow }: { onBookNow?: () => void }) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.2);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.3);
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation(0.4);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Initialize EmailJS with your public key
      emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'sadeedesh499@gmail.com',
        subject: `Hotel Inquiry from ${formData.name}`
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );
      
      setSubmitMessage('Thank you for your message! We have received your inquiry and will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div ref={titleRef as any} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">Begin Your Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your extraordinary experience awaits. Connect with our lifestyle curators to craft your perfect stay, 
            or simply reach out to discover how we can exceed your expectations.
          </p>
        </div>

        <div ref={cardsRef as any} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-200 ${cardsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-orange-700" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak directly with our reservations team</p>
            <p className="text-orange-700 font-bold text-lg mb-4">+1 (555) 123-4567</p>
            <button 
              onClick={() => window.open('tel:+15551234567', '_self')}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Call Now
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="text-pink-700" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Live Chat</h3>
            <p className="text-gray-600 mb-4">Get instant answers to your questions</p>
            <p className="text-pink-700 font-bold text-lg mb-4">Available 24/7</p>
            <button 
              onClick={() => {
                const chatButton = document.querySelector('[data-chat-toggle]') as HTMLButtonElement;
                if (chatButton) chatButton.click();
              }}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Start Chat
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-purple-700" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us your detailed requirements</p>
            <p className="text-purple-700 font-bold text-sm mb-4">sadeedesh499@gmail.com</p>
            <button 
              onClick={() => window.open('mailto:sadeedesh499@gmail.com?subject=Hotel Inquiry&body=Hello, I would like to inquire about...', '_self')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Send Email
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-yellow-700" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Book Online</h3>
            <p className="text-gray-600 mb-4">Reserve your room with instant confirmation</p>
            <p className="text-yellow-700 font-bold text-lg mb-4">Best Rate Guarantee</p>
            <button 
              onClick={onBookNow}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>

        <div ref={formRef as any} className={`bg-white rounded-2xl shadow-xl p-8 lg:p-12 transition-all duration-1000 delay-300 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-orange-800 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 outline-none"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 outline-none"
                    placeholder="Email Address"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 outline-none resize-none"
                  placeholder="Your message..."
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 flex items-center justify-center"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send className="ml-2" size={20} />
                    </>
                  )}
                </button>
                {submitMessage && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-orange-800 mb-6">Visit Our Hotel</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-orange-600" size={20} />
                    <span className="text-gray-700">123 Beachfront Boulevard, Coastal Paradise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-orange-600" size={20} />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-orange-600" size={20} />
                    <span className="text-gray-700">sadeedesh499@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-orange-800 mb-4">Reception Hours</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Check-in:</span>
                    <span className="font-semibold">3:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out:</span>
                    <span className="font-semibold">7:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Concierge:</span>
                    <span className="font-semibold">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={mapRef as any} className={`mt-12 rounded-2xl overflow-hidden shadow-2xl h-96 transition-all duration-1000 delay-400 ${mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126738.56347862248!2d79.77380033359375!3d6.927078699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sadeedesh Beach Resort Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
