"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export function ContactForm() {
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
      <div className="flex flex-col items-center justify-center p-12 text-center bg-flamora-cream rounded-xl border border-flamora-gold/20 h-full min-h-[400px]">
        <CheckCircle2 className="w-16 h-16 text-flamora-red mb-4" />
        <h3 className="font-heading text-3xl text-flamora-charcoal mb-2">
          Message Sent
        </h3>
        <p className="text-muted-foreground max-w-sm mx-auto">
          Thank you for reaching out to us. We will get back to you as soon as possible.
        </p>
        <p className="text-xs text-muted-foreground mt-8">
          (Note: This is a demo confirmation)
        </p>
        <Button 
          variant="outline" 
          className="mt-6"
          onClick={() => setIsSuccess(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full Name *</Label>
          <Input id="contact-name" required placeholder="John Doe" className="bg-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email Address *</Label>
          <Input id="contact-email" type="email" required placeholder="john@example.com" className="bg-white" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone Number</Label>
          <Input id="contact-phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-white" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-subject">Subject *</Label>
          <Input id="contact-subject" required placeholder="How can we help you?" className="bg-white" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Message *</Label>
        <Textarea 
          id="contact-message" 
          required
          placeholder="Your message here..." 
          className="min-h-[150px] bg-white" 
        />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-flamora-red hover:bg-flamora-red/90 text-white font-medium py-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
