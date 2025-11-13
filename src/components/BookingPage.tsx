import { useState } from 'react';
import { Calendar, Users, Wifi, Coffee, Car, Dumbbell, Waves, Utensils, ArrowLeft, CreditCard } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const BookingPage = ({ onBack, onProceedToPayment }: { onBack: () => void; onProceedToPayment: (data: any) => void }) => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: '',
    facilities: [] as string[]
  });

  const rooms = [
    { id: 'skyline', name: 'Skyline King Suite', price: 299 },
    { id: 'metropolitan', name: 'Metropolitan Twin', price: 199 },
    { id: 'royal', name: 'Royal Penthouse', price: 599 },
    { id: 'zen', name: 'Zen Garden Retreat', price: 149 },
    { id: 'heritage', name: 'Heritage Family Villa', price: 349 },
    { id: 'innovation', name: 'Innovation Hub Suite', price: 229 }
  ];

  const facilities = [
    { id: 'wifi', name: 'Premium WiFi', icon: Wifi, price: 0 },
    { id: 'breakfast', name: 'Breakfast Included', icon: Coffee, price: 25 },
    { id: 'parking', name: 'Valet Parking', icon: Car, price: 30 },
    { id: 'gym', name: 'Gym Access', icon: Dumbbell, price: 15 },
    { id: 'spa', name: 'Spa Package', icon: Waves, price: 75 },
    { id: 'dining', name: 'Fine Dining Credit', icon: Utensils, price: 50 }
  ];

  const handleFacilityToggle = (facilityId: string) => {
    setBookingData(prev => ({
      ...prev,
      facilities: prev.facilities.includes(facilityId)
        ? prev.facilities.filter(id => id !== facilityId)
        : [...prev.facilities, facilityId]
    }));
  };

  const selectedRoom = rooms.find(room => room.id === bookingData.roomType);
  const selectedFacilities = facilities.filter(f => bookingData.facilities.includes(f.id));
  const totalPrice = (selectedRoom?.price || 0) + selectedFacilities.reduce((sum, f) => sum + f.price, 0);

  const handleProceedToPayment = () => {
    if (selectedRoom && bookingData.checkIn && bookingData.checkOut) {
      onProceedToPayment({
        ...bookingData,
        totalPrice,
        roomName: selectedRoom.name
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:text-orange-700 mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          Back to Sadeedesh
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-orange-800 mb-6">Complete Your Booking</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Check-in Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-orange-600" size={20} />
                    <input
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) => setBookingData(prev => ({ ...prev, checkIn: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Check-out Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-orange-600" size={20} />
                    <input
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData(prev => ({ ...prev, checkOut: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 text-orange-600" size={20} />
                    <select
                      value={bookingData.guests}
                      onChange={(e) => setBookingData(prev => ({ ...prev, guests: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4+ Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Select Your Room</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {rooms.map((room) => (
                    <div
                      key={room.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        bookingData.roomType === room.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                      onClick={() => setBookingData(prev => ({ ...prev, roomType: room.id }))}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-gray-900">{room.name}</h4>
                        <span className="text-orange-600 font-bold">${room.price}/night</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Add Facilities & Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {facilities.map((facility) => {
                    const Icon = facility.icon;
                    const isSelected = bookingData.facilities.includes(facility.id);
                    
                    return (
                      <div
                        key={facility.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-orange-300'
                        }`}
                        onClick={() => handleFacilityToggle(facility.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Icon className="text-orange-600" size={20} />
                            <span className="font-semibold text-gray-900">{facility.name}</span>
                          </div>
                          <span className="text-orange-600 font-bold">
                            {facility.price === 0 ? 'Free' : `+$${facility.price}`}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
              <h3 className="text-xl font-bold text-orange-800 mb-6">Booking Summary</h3>
              
              {selectedRoom && (
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{selectedRoom.name}</span>
                    <span className="text-orange-600 font-bold">${selectedRoom.price}</span>
                  </div>
                </div>
              )}

              {selectedFacilities.length > 0 && (
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <h4 className="font-semibold mb-2">Selected Facilities:</h4>
                  {selectedFacilities.map((facility) => (
                    <div key={facility.id} className="flex justify-between items-center text-sm mb-1">
                      <span>{facility.name}</span>
                      <span className="text-orange-600">
                        {facility.price === 0 ? 'Free' : `+$${facility.price}`}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-6">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total per night:</span>
                  <span className="text-orange-600">${totalPrice}</span>
                </div>
              </div>

              <button
                onClick={handleProceedToPayment}
                disabled={!selectedRoom || !bookingData.checkIn || !bookingData.checkOut}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 disabled:bg-gray-300 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <CreditCard size={20} />
                Proceed to Payment
              </button>

              <div className="mt-4 text-center text-sm text-gray-600">
                <p>Free cancellation • Best rate guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;