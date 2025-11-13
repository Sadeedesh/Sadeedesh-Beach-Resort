import { useState } from 'react';
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Rooms from "./components/Rooms.tsx";
import Services from "./components/Services.tsx";
import Gallery from "./components/Gallery.tsx";
import Reviews from "./components/Reviews.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import BookingPage from "./components/BookingPage.tsx";
import PaymentPage from "./components/PaymentPage.tsx";
import ChatBot from "./components/ChatBot.tsx";
import ScrollProgress from "./components/ScrollProgress.tsx";

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'booking' | 'payment'>('home');
  const [bookingData, setBookingData] = useState<any>(null);

  if (currentPage === 'payment' && bookingData) {
    return (
      <PaymentPage 
        onBack={() => setCurrentPage('booking')} 
        bookingData={bookingData}
      />
    );
  }

  if (currentPage === 'booking') {
    return (
      <BookingPage 
        onBack={() => setCurrentPage('home')} 
        onProceedToPayment={(data) => {
          setBookingData(data);
          setCurrentPage('payment');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar onBookNow={() => setCurrentPage('booking')} />
      <Hero onBookNow={() => setCurrentPage('booking')} />
      <About />
      <Rooms onBookNow={() => setCurrentPage('booking')} />
      <Services onBookNow={() => setCurrentPage('booking')} />
      <Gallery />
      <Reviews />
      <Contact onBookNow={() => setCurrentPage('booking')} />
      <Footer />
      <ChatBot onBookNow={() => setCurrentPage('booking')} />
    </div>
  );
}

export default App;
