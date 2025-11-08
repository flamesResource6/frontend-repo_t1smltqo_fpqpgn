import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "Standard Queen",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="booking" className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Book Your Stay</h2>
        <p className="text-gray-600 mt-2">Fast, simple, and secure reservation</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Check-In</label>
              <input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Check-Out</label>
              <input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Guests</label>
              <input type="number" min={1} max={6} name="guests" value={form.guests} onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Room Type</label>
              <select name="roomType" value={form.roomType} onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Standard Queen</option>
                <option>Deluxe King</option>
                <option>Family Suite</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                Check Availability
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-8 bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold">Thanks, {form.name}!</h3>
            <p className="text-gray-600 mt-2">We'll email you shortly at {form.email} to confirm your reservation from {form.checkIn} to {form.checkOut}.</p>
            <button onClick={() => setSubmitted(false)} className="mt-6 inline-flex rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2">
              Make another booking
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
