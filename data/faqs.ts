// =============================================================================
// FLAMORA — FAQ Data
// =============================================================================
// Update this file to manage Frequently Asked Questions on the website.
// =============================================================================

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Do I need a reservation?",
    answer:
      "While walk-ins are welcome based on availability, we highly recommend making a reservation to ensure the best dining experience. You can book a table through our website or call us directly.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open every day of the week. Lunch is served from 12:00 PM to 3:30 PM, and dinner from 6:30 PM to 11:00 PM. Hours may vary on public holidays — check our social media for updates.",
  },
  {
    question: "Do you have vegetarian options?",
    answer:
      "Absolutely! We have an extensive vegetarian menu that includes live grill items, starters, main course dishes, biryanis, and desserts. Every dish is clearly marked as vegetarian or non-vegetarian on our menu.",
  },
  {
    question: "Do you offer birthday celebrations?",
    answer:
      "Yes! We love celebrating with our guests. Our birthday packages include a complimentary cake, personalized table décor, and a dedicated celebration host. Contact us in advance to plan your special day.",
  },
  {
    question: "Do you provide catering services?",
    answer:
      "We offer comprehensive catering for weddings, corporate events, birthday parties, and private gatherings. Our team will work with you to create a customized menu. Please visit our Catering page or contact us for details.",
  },
  {
    question: "Do you offer takeaway or delivery?",
    answer:
      "Currently, Flamora is a dine-in-only experience. We believe our food is best enjoyed fresh from the grill, in our warm and inviting atmosphere. However, we may explore takeaway options in the future.",
  },
  {
    question: "Do you accept large groups?",
    answer:
      "Yes, we welcome large groups and can accommodate parties of up to 50 guests. For groups of 10 or more, we recommend booking in advance so we can prepare a dedicated dining area for you.",
  },
  {
    question: "Do you accommodate dietary requirements?",
    answer:
      "We are happy to accommodate dietary needs including gluten-free, nut-free, and Jain preparations. Please inform us when making your reservation or speak with your server, and our chefs will ensure your meal is tailored to your needs.",
  },
];
