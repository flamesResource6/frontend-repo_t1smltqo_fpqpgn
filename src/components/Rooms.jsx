import { BedDouble, Bath, Wifi, Tv } from "lucide-react";

const rooms = [
  {
    type: "Standard Queen",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=2070&auto=format&fit=crop",
    features: ["1 Queen Bed", "Ensuite Bathroom", "Free Wi‑Fi", "Smart TV"],
  },
  {
    type: "Deluxe King",
    price: 119,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop",
    features: ["1 King Bed", "City View", "Free Wi‑Fi", "55\" TV"],
  },
  {
    type: "Family Suite",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=2069&auto=format&fit=crop",
    features: ["2 Queen Beds", "Sofa Bed", "Kitchenette", "Smart TV"],
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Rooms</h2>
        <p className="text-gray-600">Comfort for every budget</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.type} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img src={room.image} alt={room.type} className="h-52 w-full object-cover" />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{room.type}</h3>
                <span className="text-blue-600 font-bold">${room.price}/night</span>
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                {room.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    {f.includes("Bed") ? (
                      <BedDouble className="w-4 h-4" />
                    ) : f.includes("Bath") ? (
                      <Bath className="w-4 h-4" />
                    ) : f.toLowerCase().includes("wi") ? (
                      <Wifi className="w-4 h-4" />
                    ) : (
                      <Tv className="w-4 h-4" />
                    )}
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-5 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2">
                Reserve
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
