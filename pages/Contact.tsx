
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h1 className="text-7xl font-serif mb-8 leading-tight dark:text-white uppercase tracking-tighter">Talk to the <br /> Gidi Stylists.</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-12 dark:text-zinc-400">
              Whether you need a custom Agbada for your next Owambe, styling advice for an Abuja gala, or want to stock us in your boutique, our concierge is ready for you.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gray-50 dark:bg-zinc-900 rounded-3xl flex items-center justify-center transition-colors group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email Our Concierge</h4>
                  <p className="text-xl font-medium dark:text-white">concierge@doosseeh.ng</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gray-50 dark:bg-zinc-900 rounded-3xl flex items-center justify-center transition-colors group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Call Our Lagos HQ</h4>
                  <p className="text-xl font-medium dark:text-white">+234 (0) 812 000 0001</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gray-50 dark:bg-zinc-900 rounded-3xl flex items-center justify-center transition-colors group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Visit Victoria Island</h4>
                  <p className="text-xl font-medium dark:text-white">Plot 42, Alexander Road, Ikoyi, Lagos</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
               {[Instagram, Twitter, Facebook].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 border border-gray-100 dark:border-zinc-800 rounded-full flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
                    <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-zinc-900 rounded-[60px] p-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">First Name</label>
                  <input type="text" className="w-full bg-white dark:bg-black border-none outline-none rounded-2xl px-6 py-4 shadow-sm dark:text-white" placeholder="Chidi" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Last Name</label>
                  <input type="text" className="w-full bg-white dark:bg-black border-none outline-none rounded-2xl px-6 py-4 shadow-sm dark:text-white" placeholder="Okafor" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Your WhatsApp Number</label>
                <input type="tel" className="w-full bg-white dark:bg-black border-none outline-none rounded-2xl px-6 py-4 shadow-sm dark:text-white" placeholder="+234..." />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Event Inquiry</label>
                <select className="w-full bg-white dark:bg-black border-none outline-none rounded-2xl px-6 py-4 shadow-sm appearance-none cursor-pointer dark:text-white">
                  <option>Traditional Wedding (Owambe)</option>
                  <option>Gala / Black Tie Event</option>
                  <option>Corporate Branding</option>
                  <option>Personal Styling Session</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Briefing for Stylist</label>
                <textarea className="w-full bg-white dark:bg-black border-none outline-none rounded-3xl px-6 py-4 shadow-sm h-40 resize-none dark:text-white" placeholder="Tell us about your next big appearance..."></textarea>
              </div>
              <button className="w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-full font-bold uppercase tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xl active:scale-95 transform">
                Send Request to Gidi HQ
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
