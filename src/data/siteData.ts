import { listingImages } from "../assets/pageAssets";

type IconFeature = {
  icon: string;
  label: string;
};

export type Listing = {
  title: string;
  location: string;
  price: string;
  status: string;
  statusColor: string;
  image: string;
  imageAlt: string;
  features: IconFeature[];
};

export const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Properties", href: "#properties", id: "properties" },
  { label: "Services", href: "#services", id: "services" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const listings: Listing[] = [
  {
    title: "Aditya's Sky Residence",
    location: "Sector-10, New Panvel",
    price: "₹1,75,00,000",
    status: "For Sale",
    statusColor: "bg-primary-action",
    image: listingImages.apartment,
    imageAlt: "Modern minimalist apartment with white walls and aesthetics.",
    features: [
      { icon: "bed", label: "3 Beds" },
      { icon: "bathtub", label: "2 Baths" },
      { icon: "square_foot", label: "3,200 sqft" },
    ],
  },
  {
    title: "Vaishnav Sadan CHS.",
    location: "Sector-11, New Panvel",
    price: "₹30,000",
    status: "For Rent",
    statusColor: "bg-secondary",
    image: listingImages.flat,
    imageAlt:
      "Contemporary urban apartment with large windows and city skyline views.",
    features: [
      { icon: "bed", label: "2 Beds" },
      { icon: "bathtub", label: "2 Baths" },
      { icon: "square_foot", label: "1,450 sqft" },
    ],
  },
  {
    title: "Aai Bungalow",
    location: "Sector-2, New Panvel",
    price: "₹2,75,00,000",
    status: "For Sale",
    statusColor: "bg-primary-action",
    image: listingImages.bungalow,
    imageAlt: "Coastal beach house with white siding and wraparound porch.",
    features: [
      { icon: "bed", label: "5 Beds" },
      { icon: "bathtub", label: "4 Baths" },
      { icon: "square_foot", label: "4,800 sqft" },
    ],
  },
];

export const services = [
  {
    title: "Property Sales",
    icon: "sell",
    description:
      "Leverage our extensive network and marketing expertise to sell your property at the best market value.",
  },
  {
    title: "Rental Management",
    icon: "key",
    description:
      "Professional property management services ensuring reliable income and quality tenant retention.",
  },
  {
    title: "Commercial Leasing",
    icon: "corporate_fare",
    description:
      "Strategic solutions for commercial spaces, from prime retail locations to high-end corporate offices.",
  },
];

export const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Properties Sold" },
  { value: "1000+", label: "Customers Served" },
  { value: "98%", label: "Client Satisfaction" },
];

export const socialLinks = [
  {
    label: "Map",
    icon: "map",
    href: "https://maps.app.goo.gl/7yirjEcWkSEv1oh17",
  },
  { label: "Call", icon: "call", href: "tel:+919082442352" },
  { label: "Social", icon: "emoji_people", href: "#" },
];

export const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Settings", href: "#" },
  { label: "Office Locations", href: "#" },
];
