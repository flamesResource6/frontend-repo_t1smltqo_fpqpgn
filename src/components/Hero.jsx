import { MapPin, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2MDI3MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" aria-hidden />
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>Cozy stays, downtown convenience</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Blue Horizon Motel
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              Comfortable rooms, friendly service, and the best value for your next getaway or overnight stay.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#booking" className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 transition text-white font-semibold px-6 py-3 shadow-lg">
                Book a Room
              </a>
              <a href="#rooms" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition text-white font-semibold px-6 py-3">
                View Rooms
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-white/90">
              <div className="inline-flex items-center gap-2"><MapPin className="w-5 h-5" /><span>123 Seaside Ave, Bayview</span></div>
              <div className="inline-flex items-center gap-2"><Phone className="w-5 h-5" /><span>(555) 123-4567</span></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            <img src="https://images.unsplash.com/photo-1678762200388-51e11225d4de?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb29tJTIwaW50ZXJpb3J8ZW58MHwwfHx8MTc2MjYxMTY1Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Room interior" className="rounded-xl shadow-2xl aspect-[4/3] object-cover" />
            <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2069&auto=format&fit=crop" alt="Lobby seating" className="rounded-xl shadow-2xl aspect-[4/3] object-cover mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
