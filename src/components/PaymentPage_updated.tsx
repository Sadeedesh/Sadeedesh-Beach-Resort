import { useState } from 'react';
import { ArrowLeft, CreditCard, Lock, Calendar, User, Mail, Phone } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  facilities: string[];
  totalPrice: number;
  roomName: string;
}

const PaymentPage = ({ onBack, bookingData }: { onBack: () => void; bookingData: BookingData }) => {
  const [paymentData, setPaymentData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    zipCode: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Booking confirmed! You will receive a confirmation email shortly.');
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-pink-50 relative overflow-hidden">
      <AnimatedBackground variant="light" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          Back to Booking
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="text-orange-600" size={24} />
                <h2 className="text-3xl font-bold text-orange-800">Secure Payment</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Guest Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-orange-600" size={20} />
                        <input
                          type="text"
                          name="firstName"
                          value={paymentData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-orange-600" size={20} />
                        <input
                          type="text"
                          name="lastName"
                          value={paymentData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-orange-600" size={20} />
                        <input
                          type="email"
                          name="email"
                          value={paymentData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 text-orange-600" size={20} />
                        <input
                          type="tel"
                          name="phone"
                          value={paymentData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-3 text-orange-600" size={20} />
                        <input
                          type="text"
                          name="cardNumber"
                          value={paymentData.cardNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 text-orange-600" size={20} />
                          <input
                            type="text"
                            name="expiryDate"
                            value={paymentData.expiryDate}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={paymentData.cvv}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Billing Address</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        name="billingAddress"
                        value={paymentData.billingAddress}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                        placeholder="123 Main Street"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={paymentData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                        placeholder="New York"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={paymentData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 disabled:bg-gray-400 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <Lock size={20} />
                      Complete Booking - ${bookingData.totalPrice}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
              <h3 className="text-xl font-bold text-orange-800 mb-6">Booking Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="pb-4 border-b border-gray-200">
                  <h4 className="font-semibold text-gray-900">{bookingData.roomName}</h4>
                  <p className="text-sm text-gray-600">Check-in: {bookingData.checkIn}</p>
                  <p className="text-sm text-gray-600">Check-out: {bookingData.checkOut}</p>
                  <p className="text-sm text-gray-600">Guests: {bookingData.guests}</p>
                </div>

                <div className="pb-4 border-b border-gray-200">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-orange-600">${bookingData.totalPrice}</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="text-orange-600" size={16} />
                  <span className="text-sm font-semibold text-orange-800">Secure Payment</span>
                </div>
                <p className="text-xs text-gray-600">
                  Your payment information is encrypted and secure. We never store your card details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;