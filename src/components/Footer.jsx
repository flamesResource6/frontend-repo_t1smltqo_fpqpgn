import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-white text-xl font-bold">Blue Horizon Motel</h3>
          <p className="mt-2 text-gray-400">Clean rooms, friendly staff, and a perfect location for travelers and families.</p>
          <div className="mt-4 flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
            <a href="mailto:stay@bluehorizon.com" aria-label="Email" className="hover:text-white"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (555) 123-4567</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> stay@bluehorizon.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Seaside Ave, Bayview</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Hours</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Check-in: 3:00 PM</li>
            <li>Check-out: 11:00 AM</li>
            <li>Front Desk: 24/7</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Blue Horizon Motel. All rights reserved.
      </div>
    </footer>
  );
}
