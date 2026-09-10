"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, Calendar } from "lucide-react";
import { locations } from "@/data/locations";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ReservationForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    locationId: locations[0]?.id || "",
    date: new Date().toISOString().split('T')[0],
    time: "7:30 PM",
    guests: "2",
    name: "",
    phone: "",
    email: "",
    specialRequests: ""
  });

  useEffect(() => {
    if (searchParams) {
      const outletParam = searchParams.get("outlet");
      const dateParam = searchParams.get("date");
      const sessionParam = searchParams.get("session");
      const guestsParam = searchParams.get("guests");

      setFormData(prev => ({
        ...prev,
        locationId: outletParam || prev.locationId,
        date: dateParam || prev.date,
        time: sessionParam === "Lunch" ? "1:00 PM" : sessionParam === "Dinner" ? "7:30 PM" : prev.time,
        guests: guestsParam || prev.guests,
      }));
    }
  }, [searchParams]);

  // Time slots generation
  const timeSlots = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM",
    "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"
  ];

  const guestsOptions = Array.from({ length: 10 }, (_, i) => `${i + 1}`);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string | null) => {
    setFormData(prev => ({ ...prev, [name]: value ?? "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      locationId: "",
      date: "",
      time: "",
      guests: "",
      name: "",
      phone: "",
      email: "",
      specialRequests: ""
    });
    setIsSuccess(false);
  };

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];

  const selectedLocation = locations.find(loc => loc.id === formData.locationId);

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-heading text-flamora-charcoal mb-2">Reservation Request Received</h3>
        <p className="text-gray-600 mb-8 max-w-md">
          Thank you for choosing FLAMORA. We look forward to hosting you!
        </p>
        
        <div className="bg-flamora-cream/50 w-full rounded-xl p-6 text-left mb-8 space-y-3">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-500">Location</span>
            <span className="font-medium text-flamora-charcoal">{selectedLocation?.name || "N/A"}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-500">Date</span>
            <span className="font-medium text-flamora-charcoal">{formData.date}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-500">Time</span>
            <span className="font-medium text-flamora-charcoal">{formData.time}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-500">Guests</span>
            <span className="font-medium text-flamora-charcoal">{formData.guests} {formData.guests === "1" ? "Person" : "People"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Name</span>
            <span className="font-medium text-flamora-charcoal">{formData.name}</span>
          </div>
        </div>

        <div className="text-sm text-gray-500 bg-blue-50 text-blue-800 p-4 rounded-lg mb-8 text-left w-full">
          <strong>Note:</strong> This is a demo. In production, you will receive a confirmation via email and SMS.
        </div>

        <Button 
          onClick={resetForm}
          variant="outline" 
          className="w-full"
        >
          Make Another Reservation
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-heading text-flamora-charcoal mb-4 border-b border-gray-100 pb-4">
          Reservation Details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="location">Restaurant Location *</Label>
            <Select 
              value={formData.locationId} 
              onValueChange={(val) => handleSelectChange("locationId", val)} 
              required
            >
              <SelectTrigger id="location">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map(loc => (
                  <SelectItem key={loc.id} value={loc.id}>
                    {loc.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date *</Label>
            <div className="relative">
              <Input 
                type="date" 
                id="date" 
                name="date" 
                value={formData.date}
                onChange={handleInputChange}
                min={today}
                required 
                className="pl-10"
              />
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Time *</Label>
            <Select 
              value={formData.time} 
              onValueChange={(val) => handleSelectChange("time", val)}
              required
            >
              <SelectTrigger id="time">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map(time => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="guests">Number of Guests *</Label>
            <Select 
              value={formData.guests} 
              onValueChange={(val) => handleSelectChange("guests", val)}
              required
            >
              <SelectTrigger id="guests">
                <SelectValue placeholder="Select party size" />
              </SelectTrigger>
              <SelectContent>
                {guestsOptions.map(num => (
                  <SelectItem key={num} value={num}>
                    {num} {num === "1" ? "Person" : "People"}
                  </SelectItem>
                ))}
                <SelectItem value="10+">10+ People (Large Party)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-heading text-flamora-charcoal mb-4 border-b border-gray-100 pb-4">
          Contact Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="john@example.com" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="+1 (555) 000-0000" 
              value={formData.phone}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
            <Textarea 
              id="specialRequests" 
              name="specialRequests" 
              placeholder="Allergies, dietary requirements, or special occasions..." 
              value={formData.specialRequests}
              onChange={handleInputChange}
              className="resize-none h-24"
            />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full bg-flamora-red hover:bg-flamora-red/90 text-white h-12 text-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            "Reserve My Table"
          )}
        </Button>
      </div>
    </form>
  );
}
