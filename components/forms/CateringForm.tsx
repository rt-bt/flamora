"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";

export function CateringForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-flamora-cream rounded-xl border border-flamora-gold/20 h-[500px]">
        <CheckCircle2 className="w-16 h-16 text-flamora-red mb-4" />
        <h3 className="font-heading text-3xl text-flamora-charcoal mb-2">
          Catering Enquiry Received
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for considering FLAMORA for your event. Our catering team will get back to you within 24 hours.
        </p>
        <p className="text-xs text-muted-foreground mt-8">
          (Note: This is a demo confirmation)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" required placeholder="John Doe" className="bg-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" type="tel" required placeholder="+1 (555) 000-0000" className="bg-white" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input id="email" type="email" required placeholder="john@example.com" className="bg-white" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="eventType">Event Type *</Label>
          <Select required name="eventType">
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="corporate">Corporate Event</SelectItem>
              <SelectItem value="birthday">Birthday Party</SelectItem>
              <SelectItem value="private">Private Event</SelectItem>
              <SelectItem value="family">Family Function</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="guests">Number of Guests *</Label>
          <Select required name="guests">
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select guest count" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="25-50">25-50</SelectItem>
              <SelectItem value="50-100">50-100</SelectItem>
              <SelectItem value="100-200">100-200</SelectItem>
              <SelectItem value="200-500">200-500</SelectItem>
              <SelectItem value="500+">500+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="date">Event Date *</Label>
          <Input id="date" type="date" required className="bg-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location / Venue</Label>
          <Input id="location" placeholder="Venue name or address" className="bg-white" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Details</Label>
        <Textarea 
          id="message" 
          placeholder="Tell us about your event, dietary requirements, or any specific requests..." 
          className="min-h-[120px] bg-white" 
        />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-flamora-red hover:bg-flamora-red/90 text-white font-medium py-6 text-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending Enquiry...
          </>
        ) : (
          "Request Catering"
        )}
      </Button>
    </form>
  );
}
