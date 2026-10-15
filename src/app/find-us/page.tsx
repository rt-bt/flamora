"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ExternalLink,
  Send,
  CheckCircle2,
  Car,
  Utensils,
  Bike,
} from "lucide-react";
import {
  siteConfig,
  getWhatsAppOrderUrl,
  isRestaurantOpen,
} from "@/config/siteConfig";

export default function FindUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Table Reservation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const isOpen = isRestaurantOpen();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hi Flamora! My name is ${formData.name || "Customer"}.\nSubject: ${formData.subject}\nPhone: ${formData.phone}\nMessage: ${formData.message || "I have an inquiry."}`;
    window.open(getWhatsAppOrderUrl(text), "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F4EBD6] pb-24">
      {/* =========================================================================
          HERO BANNER
      ========================================================================= */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#141414] to-[#0F0F0F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs sm:text-sm font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase">
            COME ON OVER
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            Find Us in Motihari
          </h1>
          <p className="text-sm sm:text-base text-[#F4EBD6]/80 max-w-xl mx-auto leading-relaxed">
            Smell the smoke, hear the sizzle, and enjoy the warmest hospitality in East Champaran, Bihar.
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isOpen ? "bg-[#25D366] animate-pulse" : "bg-yellow-500"
              }`}
            />
            <span className="text-white font-medium">
              {isOpen ? "Currently Open · Dine-in & Takeaway Active" : "Opens at 11:00 AM"}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN OUTLET DETAILS & CONTACT SECTION
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Location Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141414] rounded-[24px] border border-white/10 p-6 sm:p-8 shadow-card-dark space-y-6">
              <div>
                <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block mb-1">
                  OUTLET LOCATION
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  Flamora – Grill &amp; Fry
                </h2>
              </div>

              {/* Address Block */}
              <div className="space-y-4 text-sm text-[#F4EBD6]/85">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6A24]/10 border border-[#FF6A24]/30 flex items-center justify-center text-[#FF6A24] flex-shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Address &amp; Landmark</p>
                    <p className="text-xs sm:text-sm text-[#F4EBD6]/80 mt-1 leading-relaxed">
                      {siteConfig.address.full}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Prominently located right near Bariyarpur Bypass for easy parking and access.
                    </p>
                  </div>
                </div>

                {/* Timings Block */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6A24]/10 border border-[#FF6A24]/30 flex items-center justify-center text-[#FF6A24] flex-shrink-0 mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Operating Hours</p>
                    <p className="text-xs sm:text-sm text-[#F4EBD6]/80 mt-1">
                      {siteConfig.timings.display}
                    </p>
                    <p className="text-[11px] text-[#FFC107] mt-0.5">
                      Open 7 Days a Week (Mon – Sun)
                    </p>
                  </div>
                </div>

                {/* Direct Phone Call Block */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6A24]/10 border border-[#FF6A24]/30 flex items-center justify-center text-[#FF6A24] flex-shrink-0 mt-0.5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Direct Phone Call</p>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="text-xs sm:text-sm text-[#FF6A24] hover:underline font-semibold mt-1 block"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <a
                  href={siteConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#FF6A24] hover:bg-[#E55815] text-white py-3.5 px-4 rounded-xl font-heading font-semibold text-sm transition-all shadow-flame-sm"
                >
                  <MapPin size={16} />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3.5 px-4 rounded-xl font-heading font-semibold text-sm transition-all shadow-[0_4px_14px_rgba(37,211,102,0.3)]"
                >
                  <MessageCircle size={16} />
                  <span>Chat &amp; Order on WhatsApp</span>
                </a>
              </div>

              {/* Amenities Grid */}
              <div className="pt-4 border-t border-white/5 grid grid-cols-3 gap-2 text-center text-[11px] text-[#F4EBD6]/80">
                <div className="bg-white/5 p-2 rounded-lg">
                  <Utensils size={16} className="mx-auto text-[#FF6A24] mb-1" />
                  <span>AC Dine-In</span>
                </div>
                <div className="bg-white/5 p-2 rounded-lg">
                  <Car size={16} className="mx-auto text-[#FF6A24] mb-1" />
                  <span>Easy Parking</span>
                </div>
                <div className="bg-white/5 p-2 rounded-lg">
                  <Bike size={16} className="mx-auto text-[#FF6A24] mb-1" />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map & Contact Form */}
          <div className="lg:col-span-7 space-y-8">
            {/* Large Embedded Google Map */}
            <div className="bg-[#141414] rounded-[24px] border border-white/10 p-3 shadow-card-dark overflow-hidden">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden">
                <iframe
                  src={siteConfig.maps.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Flamora Motihari Interactive Map"
                  className="w-full h-full"
                />
              </div>

              <div className="p-3 flex items-center justify-between text-xs text-gray-400">
                <span>Motihari, East Champaran, Bihar</span>
                <a
                  href={siteConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF6A24] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Open Full Screen in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div className="bg-[#141414] rounded-[24px] border border-white/10 p-6 sm:p-8 shadow-card-dark">
              <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block mb-1">
                MESSAGE US
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-2">
                Have a Question or Reservation Request?
              </h3>
              <p className="text-xs text-[#F4EBD6]/70 mb-6">
                Fill in your details below. You can send it directly to our team via WhatsApp or web form.
              </p>

              {submitted ? (
                <div className="bg-[#FF6A24]/10 border border-[#FF6A24]/40 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 size={36} className="text-[#25D366] mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-white">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs text-[#F4EBD6]/80 max-w-sm mx-auto">
                    We have received your message. Our team in Motihari will contact you shortly at {formData.phone}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        subject: "Table Reservation",
                        message: "",
                      });
                    }}
                    className="text-xs text-[#FF6A24] hover:underline font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#F4EBD6]/80 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Kumar"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A24]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F4EBD6]/80 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F4EBD6]/80 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6A24]"
                    >
                      <option value="Table Reservation">Table Reservation</option>
                      <option value="Party & Bulk Order">Party &amp; Bulk Order</option>
                      <option value="Feedback / Query">Feedback / Query</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F4EBD6]/80 mb-1">
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what you need..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A24]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-[#FF6A24] hover:bg-[#E55815] text-white py-3 px-4 rounded-xl font-heading font-semibold text-xs transition-colors shadow-flame-sm flex items-center justify-center gap-2"
                    >
                      <Send size={14} />
                      <span>Submit Query</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-4 rounded-xl font-heading font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={14} />
                      <span>Send Directly on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
