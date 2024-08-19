import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const PageLinks = [
  { id: 1, href: "#Home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const SocialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const ServiceLink = [
  {
    id: 1,
    icon: "fas fa-chair fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    title: "saving money",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    title: "endless hiking",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    title: "amazing comfort",
  },
  
];

export const Tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "Uk",
    duration: "6 days",
    cost: "from $2100",
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "Best of java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "Usa",
    duration: "9 days",
    cost: "from $5100",
  },
  {
    id: 3,
    image: tour3,
    date: "july 6th, 2022",
    title: "Best in C#",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "japan",
    duration: "2 days",
    cost: "from $1000",
  },
  {
    id: 4,
    image: tour4,
    date: "august 2nd, 2023",
    title: "explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "china",
    duration: "3 days",
    cost: "from $700",
  },
];