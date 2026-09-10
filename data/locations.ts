// =============================================================================
// FLAMORA — Location Data
// =============================================================================
// Update this file to add, remove, or modify restaurant locations.
// =============================================================================

export type Location = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  openingHours: {
    lunch: string;
    dinner: string;
  };
  googleMapsUrl: string;
  image: string;
};

export const locations: Location[] = [
  {
    id: "mumbai-bandra",
    name: "Flamora Bandra",
    address: "123 Linking Road, Bandra West",
    city: "Mumbai",
    state: "Maharashtra",
    phone: "+91 98XX XXX 001",
    email: "bandra@flamora.com",
    openingHours: {
      lunch: "12:00 PM – 3:30 PM",
      dinner: "6:30 PM – 11:00 PM",
    },
    googleMapsUrl: "https://maps.google.com/?q=Bandra+West+Mumbai",
    image: "/images/locations/mumbai-bandra.jpg",
  },
  {
    id: "delhi-cp",
    name: "Flamora Connaught Place",
    address: "45 Janpath, Connaught Place",
    city: "New Delhi",
    state: "Delhi",
    phone: "+91 98XX XXX 002",
    email: "cp@flamora.com",
    openingHours: {
      lunch: "12:00 PM – 3:30 PM",
      dinner: "6:30 PM – 11:00 PM",
    },
    googleMapsUrl: "https://maps.google.com/?q=Connaught+Place+Delhi",
    image: "/images/locations/delhi-cp.jpg",
  },
  {
    id: "bangalore-indiranagar",
    name: "Flamora Indiranagar",
    address: "78 100 Feet Road, Indiranagar",
    city: "Bangalore",
    state: "Karnataka",
    phone: "+91 98XX XXX 003",
    email: "indiranagar@flamora.com",
    openingHours: {
      lunch: "12:00 PM – 3:30 PM",
      dinner: "6:30 PM – 11:00 PM",
    },
    googleMapsUrl: "https://maps.google.com/?q=Indiranagar+Bangalore",
    image: "/images/locations/bangalore-indiranagar.jpg",
  },
  {
    id: "hyderabad-jubilee",
    name: "Flamora Jubilee Hills",
    address: "22 Road No. 36, Jubilee Hills",
    city: "Hyderabad",
    state: "Telangana",
    phone: "+91 98XX XXX 004",
    email: "jubilee@flamora.com",
    openingHours: {
      lunch: "12:00 PM – 3:30 PM",
      dinner: "6:30 PM – 11:00 PM",
    },
    googleMapsUrl: "https://maps.google.com/?q=Jubilee+Hills+Hyderabad",
    image: "/images/locations/hyderabad-jubilee.jpg",
  },
  {
    id: "pune-koregaon",
    name: "Flamora Koregaon Park",
    address: "15 North Main Road, Koregaon Park",
    city: "Pune",
    state: "Maharashtra",
    phone: "+91 98XX XXX 005",
    email: "pune@flamora.com",
    openingHours: {
      lunch: "12:00 PM – 3:30 PM",
      dinner: "6:30 PM – 11:00 PM",
    },
    googleMapsUrl: "https://maps.google.com/?q=Koregaon+Park+Pune",
    image: "/images/locations/pune-koregaon.jpg",
  },
];
