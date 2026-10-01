import Header from './components/Header';
import Hero from './components/Hero';
import CampusSaturday from './components/CampusSaturday';
import Services from './components/Services';
import Teaching from './components/Teaching';
import BookingForm from './components/BookingForm';
import ClassBookingForm from './components/ClassBookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-rose-50/30 via-white to-purple-50/20">
      <Header />
      <main>
        <Hero />
        <CampusSaturday />
        <Services />
        <Teaching />
        <BookingForm />
        <ClassBookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
