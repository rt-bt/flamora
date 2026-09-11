"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { outletBuffetList } from "@/data/buffet";
import { Flame, Calendar, Clock, Users, MapPin, CheckCircle2, Phone, User, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileBookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOutletId?: string;
}

export function MobileBookingDrawer({
  isOpen,
  onClose,
  defaultOutletId,
}: MobileBookingDrawerProps) {
  const [selectedOutletId, setSelectedOutletId] = useState<string>(
    defaultOutletId || outletBuffetList[0]?.outletId || "patna-fraser"
  );
  const [selectedDate, setSelectedDate] = useState<string>("today");
  const [selectedMeal, setSelectedMeal] = useState<"Lunch" | "Dinner">("Dinner");
  const [selectedSlot, setSelectedSlot] = useState<string>("07:30 PM");
  const [guestsCount, setGuestsCount] = useState<number>(4);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // User form details
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [specialOccasion, setSpecialOccasion] = useState("Regular Dining");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const activeOutlet =
    outletBuffetList.find((o) => o.outletId === selectedOutletId) ||
    outletBuffetList[0];

  const lunchSlots = ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"];
  const dinnerSlots = ["06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM"];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;
    setIsConfirmed(true);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setStep(1);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="bottom"
        className="max-h-[92vh] rounded-t-3xl border-t border-amber-500/20 bg-flamora-charcoal px-4 pb-8 pt-4 text-white sm:max-w-md sm:mx-auto overflow-y-auto [&>button]:hidden"
      >
        {/* Top Handle Bar */}
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-white/20" />

        <SheetHeader className="flex flex-row items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-flamora-red text-white shadow-md">
              <Flame className="h-4 w-4" />
            </div>
            <div>
              <SheetTitle className="text-left font-heading text-lg font-bold text-white">
                Reserve Live Grill Table
              </SheetTitle>
              <p className="text-xs text-white/60">Instant Confirmation • Unlimited Buffet</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-1.5 text-white/70 hover:bg-white/20 hover:text-white"
            aria-label="Close booking drawer"
          >
            <X className="h-4 w-4" />
          </button>
        </SheetHeader>

        {isConfirmed ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30">
              Table Reserved!
            </span>
            <h3 className="mt-3 font-heading text-2xl font-bold text-white">
              We&apos;re getting your grill fired up! 🔥
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Confirmation SMS &amp; WhatsApp sent to{" "}
              <strong className="text-white">{guestPhone}</strong>.
            </p>

            {/* Booking Summary Card */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-xs space-y-2">
              <div className="flex justify-between text-white/80">
                <span>Guest Name:</span>
                <span className="font-semibold text-white">{guestName}</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Outlet:</span>
                <span className="font-semibold text-flamora-gold">{activeOutlet.outletName}</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Date &amp; Time:</span>
                <span className="font-semibold text-white">
                  {selectedDate === "today" ? "Today" : selectedDate === "tomorrow" ? "Tomorrow" : selectedDate} • {selectedSlot}
                </span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Party Size:</span>
                <span className="font-semibold text-white">{guestsCount} Guests</span>
              </div>
              {specialOccasion !== "Regular Dining" && (
                <div className="flex justify-between text-white/80">
                  <span>Occasion:</span>
                  <span className="font-semibold text-flamora-orange">🎂 {specialOccasion} (Free Cake Alert)</span>
                </div>
              )}
            </div>

            <button
              onClick={handleReset}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-flamora-red to-flamora-orange py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg"
            >
              Done &amp; Return
            </button>
          </div>
        ) : (
          <div className="mt-4 space-y-5">
            {/* Step Indicators */}
            <div className="flex items-center justify-between gap-2 px-1 text-xs">
              <button
                onClick={() => setStep(1)}
                className={cn(
                  "flex-1 py-1.5 rounded-lg font-semibold text-center transition-colors",
                  step === 1 ? "bg-flamora-red text-white" : "bg-white/5 text-white/50"
                )}
              >
                1. Outlet &amp; Date
              </button>
              <button
                onClick={() => setStep(2)}
                className={cn(
                  "flex-1 py-1.5 rounded-lg font-semibold text-center transition-colors",
                  step === 2 ? "bg-flamora-red text-white" : "bg-white/5 text-white/50"
                )}
              >
                2. Time &amp; Guests
              </button>
              <button
                onClick={() => setStep(3)}
                className={cn(
                  "flex-1 py-1.5 rounded-lg font-semibold text-center transition-colors",
                  step === 3 ? "bg-flamora-red text-white" : "bg-white/5 text-white/50"
                )}
              >
                3. Details
              </button>
            </div>

            {/* STEP 1: Select Outlet & Date */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                    <MapPin className="inline h-3.5 w-3.5 mr-1 text-flamora-orange" />
                    Select Flamora Outlet
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {outletBuffetList.map((outlet) => {
                      const isSelected = outlet.outletId === selectedOutletId;
                      return (
                        <button
                          key={outlet.outletId}
                          type="button"
                          onClick={() => setSelectedOutletId(outlet.outletId)}
                          className={cn(
                            "flex items-center justify-between rounded-xl p-3 text-left border transition-all",
                            isSelected
                              ? "border-flamora-orange bg-flamora-orange/15 shadow-sm"
                              : "border-white/10 bg-white/5 hover:border-white/20"
                          )}
                        >
                          <div>
                            <p className="font-semibold text-sm text-white">{outlet.outletName}</p>
                            <p className="text-xs text-white/60 line-clamp-1">{outlet.address}</p>
                          </div>
                          {isSelected && (
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flamora-orange text-white">
                              ✓
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Date Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                    <Calendar className="inline h-3.5 w-3.5 mr-1 text-flamora-orange" />
                    Select Date
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "today", label: "Today", sub: "Instant" },
                      { id: "tomorrow", label: "Tomorrow", sub: "Popular" },
                      { id: "weekend", label: "This Weekend", sub: "Buffet Feast" },
                    ].map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setSelectedDate(d.id)}
                        className={cn(
                          "rounded-xl border p-2.5 text-center transition-all",
                          selectedDate === d.id
                            ? "border-flamora-red bg-flamora-red/20 text-white font-bold"
                            : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                        )}
                      >
                        <span className="block text-xs">{d.label}</span>
                        <span className="block text-[10px] text-flamora-gold font-medium">{d.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="mt-4 w-full rounded-xl bg-gradient-to-r from-flamora-red to-flamora-orange py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg"
                >
                  Next: Choose Time &amp; Guests →
                </button>
              </div>
            )}

            {/* STEP 2: Time & Guests */}
            {step === 2 && (
              <div className="space-y-4">
                {/* Session Lunch / Dinner Toggle */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                    Dining Session
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMeal("Lunch");
                        setSelectedSlot("01:00 PM");
                      }}
                      className={cn(
                        "rounded-xl border p-3 text-center transition-all flex items-center justify-center gap-2",
                        selectedMeal === "Lunch"
                          ? "border-amber-400 bg-amber-500/20 text-white font-bold"
                          : "border-white/10 bg-white/5 text-white/70"
                      )}
                    >
                      <span>☀️</span>
                      <div>
                        <p className="text-xs font-bold">Lunch Buffet</p>
                        <p className="text-[10px] text-amber-300">From ₹699*</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMeal("Dinner");
                        setSelectedSlot("07:30 PM");
                      }}
                      className={cn(
                        "rounded-xl border p-3 text-center transition-all flex items-center justify-center gap-2",
                        selectedMeal === "Dinner"
                          ? "border-flamora-orange bg-flamora-orange/20 text-white font-bold"
                          : "border-white/10 bg-white/5 text-white/70"
                      )}
                    >
                      <span>🌙</span>
                      <div>
                        <p className="text-xs font-bold">Dinner Buffet</p>
                        <p className="text-[10px] text-flamora-orange">From ₹799*</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Slot Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                    <Clock className="inline h-3.5 w-3.5 mr-1 text-flamora-orange" />
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(selectedMeal === "Lunch" ? lunchSlots : dinnerSlots).map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={cn(
                          "rounded-lg border py-2 text-xs font-medium transition-all",
                          selectedSlot === slot
                            ? "border-flamora-gold bg-flamora-gold/20 text-flamora-gold font-bold"
                            : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest Count */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                    <Users className="inline h-3.5 w-3.5 mr-1 text-flamora-orange" />
                    Number of Guests
                  </label>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuestsCount(num)}
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-xs font-bold transition-all",
                          guestsCount === num
                            ? "border-flamora-red bg-flamora-red text-white"
                            : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                        )}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 rounded-xl border border-white/15 bg-white/5 py-3 text-xs font-bold text-white/80"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-2/3 rounded-xl bg-gradient-to-r from-flamora-red to-flamora-orange py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg"
                  >
                    Next: Guest Info →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Guest Details & Confirmation */}
            {step === 3 && (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-white/15 bg-white/5 pl-9 pr-3 py-2.5 text-sm text-white placeholder-white/30 focus:border-flamora-orange focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Mobile Number (for SMS &amp; WhatsApp confirmation) *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-white/15 bg-white/5 pl-9 pr-3 py-2.5 text-sm text-white placeholder-white/30 focus:border-flamora-orange focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Celebrating an Occasion? (Free Sparkler Celebration!)
                  </label>
                  <select
                    value={specialOccasion}
                    onChange={(e) => setSpecialOccasion(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-flamora-charcoal px-3 py-2.5 text-sm text-white focus:border-flamora-orange focus:outline-none"
                  >
                    <option value="Regular Dining">Casual Dining / Feast</option>
                    <option value="Birthday Party">🎂 Birthday (Complimentary Cake &amp; Song)</option>
                    <option value="Anniversary">💍 Anniversary Celebration</option>
                    <option value="Corporate Lunch">💼 Corporate Team Outing</option>
                    <option value="Family Gathering">👨‍👩‍👧‍👦 Family Get-together</option>
                  </select>
                </div>

                {/* Quick Summary Pill */}
                <div className="rounded-xl border border-flamora-gold/30 bg-flamora-gold/10 p-3 text-xs text-flamora-gold flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">{activeOutlet.city} • {selectedSlot}</p>
                    <p className="text-[11px] text-white/70">{guestsCount} Guests • {selectedMeal} Buffet</p>
                  </div>
                  <Sparkles className="h-5 w-5 text-flamora-gold" />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-1/3 rounded-xl border border-white/15 bg-white/5 py-3 text-xs font-bold text-white/80"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 rounded-xl bg-gradient-to-r from-flamora-red to-flamora-orange py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-flamora-red/40"
                  >
                    Confirm Table 🔥
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
