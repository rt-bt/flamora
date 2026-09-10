// =============================================================================
// FLAMORA — Testimonials Data
// =============================================================================
// These are DEMO testimonials for development purposes.
// Replace with real customer reviews before going to production.
// =============================================================================

export type Testimonial = {
  id: string;
  name: string;
  rating: number; // 1-5
  review: string;
  location: string;
  source: string;
  favoriteDish: string;
  dinedOccasion: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "rev-1",
    name: "Rohan Mehta",
    rating: 5,
    location: "Bandra West, Mumbai",
    source: "Zomato Gold Diner",
    favoriteDish: "Bhatti Da Murgh & Cajun Prawns",
    dinedOccasion: "Weekend Family Feast",
    review:
      "Hands down the best live grill experience in Mumbai! The table charcoal grill keeps the skewers sizzling hot right in front of you. My kids devoured the crispy cajun potatoes and the Matka Kulfi dip counter is unmissable. 10/10 service!",
  },
  {
    id: "rev-2",
    name: "Dr. Shalini Verma",
    rating: 5,
    location: "Connaught Place, Delhi",
    source: "Google Verified Review",
    favoriteDish: "Slow-Simmered Dal Flamora & Paneer Tikka",
    dinedOccasion: "Mom's 60th Birthday",
    review:
      "Celebrated my mother's 60th birthday here. The entire crew arrived with sparklers and a complimentary 500g Dutch truffle cake, singing their special birthday track! The Dal Flamora with hot butter garlic naans was pure comfort food.",
  },
  {
    id: "rev-3",
    name: "Karthik Sundaram",
    rating: 5,
    location: "100ft Road, Indiranagar, Bangalore",
    source: "Google Top Reviewer",
    favoriteDish: "Mutton Dum Biryani & Angoori Gulab Jamun",
    dinedOccasion: "Team Lunch (24 Guests)",
    review:
      "Hosted our tech team's sprint success party for 24 people. The private rooftop section in Indiranagar was spectacular. Unlimited skewers never stopped coming until we put the table flag down. Instant GST invoice provided on spot!",
  },
  {
    id: "rev-4",
    name: "Ayesha Qureshi",
    rating: 5,
    location: "Jubilee Hills, Hyderabad",
    source: "Food Blogger @ayeshacooks",
    favoriteDish: "Hyderabadi Kachhi Gosht Biryani",
    dinedOccasion: "Anniversary Dinner",
    review:
      "As a Hyderabadi, I'm extremely picky about Biryani, but Flamora's Dum Handi Biryani was authentic perfection! Tender meat, aromatic long-grain rice, and the grilled cinnamon pineapple was the ultimate palate cleanser.",
  },
  {
    id: "rev-5",
    name: "Aditya Deshmukh",
    rating: 5,
    location: "Koregaon Park, Pune",
    source: "Zomato Verified Diner",
    favoriteDish: "Crispy Corn & Live Kulfi Bar",
    dinedOccasion: "Sunday Brunch",
    review:
      "The garden ambiance in KP coupled with live barbeque skewers is unmatched in Pune. Great vegetarian variety as well — the peri-peri paneer and dahi kebabs were top tier. Superb value for money at ₹699!",
  },
];
