import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight">Blue Horizon Motel</a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#rooms" className="hover:text-blue-600">Rooms</a>
            <a href="#booking" className="hover:text-blue-600">Book</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <a href="#booking" className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2">
            Reserve
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Rooms />
        <Booking />
      </main>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold">Find Us</h2>
        <p className="text-gray-600 mt-2">123 Seaside Ave, Bayview • (555) 123-4567 • stay@bluehorizon.com</p>
        <div className="mt-6 rounded-xl overflow-hidden shadow">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373531584416!3d-37.816279442021464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f0f1bb%3A0x5045675218ce6e0!2sDowntown!5e0!3m2!1sen!2s!4v1611818346907!5m2!1sen!2s"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
