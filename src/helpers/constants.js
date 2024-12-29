import aliHassan from '../assets/images/Ali-Hassan.jpg';
import fatimaKhan from '../assets/images/Fatima-Khan.jpg';
import raoUsama from '../assets/images/Rao-Usama.jpg';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'popular-slides', label: 'Popular Slides' },
  { id: 'categories', label: 'Categories' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'working', label: 'How It Works' },
  { id: 'testimonial', label: 'Testimonials' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Contact' },
];

const featuresData = [
  {
    title: 'Online PPT Viewing',
    description:
      'View slides directly on the web app without downloading, making access seamless and instant.',
    icon: '📄', // You can replace this with an icon library like FontAwesome or Material-UI icons
  },
  {
    title: 'Easy Downloads',
    description:
      'Download your selected slides with a single click and in the desired format.',
    icon: '⬇️',
  },
  {
    title: 'Search by Category',
    description:
      'Easily find slides by filtering through categories like Business, Education, or Technology.',
    icon: '🔍',
  },
  {
    title: 'Secure Purchases',
    description:
      'Our platform ensures secure and encrypted payment processing for a safe experience.',
    icon: '🔒',
  },
  {
    title: 'Responsive Design',
    description:
      'Enjoy a seamless experience across all devices with a fully responsive layout.',
    icon: '📱',
  },
];

const taglines = [
  'Professional Slides, Just a Click Away.',
  'Elevate Your Presentations with Stunning Slides.',
  'Captivate Your Audience with Every Slide.',
  'Professional, Polished, and Ready-to-Use.',
  'Turn Ideas into Impactful Presentations.',
  'Unlock a World of Designer Slides.',
];

const categoriesData = [
  {
    name: 'Business',
    description:
      'Slides tailored for corporate presentations and business pitches.',
  },
  {
    name: 'Education',
    description: 'Perfect for academic lectures and educational content.',
  },
  {
    name: 'Marketing',
    description:
      'Highlight your marketing strategies with these stunning slides.',
  },
  {
    name: 'Technology',
    description: 'Showcase technological advancements with a sleek design.',
  },
  {
    name: 'Science',
    description: 'Present scientific ideas with precision and clarity.',
  },
  {
    name: 'HealthCare',
    description:
      'Slides designed for medical and health-related presentations.',
  },
  {
    name: 'Finance',
    description: 'Professional slides for financial reports and presentations.',
  },
  {
    name: 'Custom Made',
    description: 'Unique designs crafted to suit your needs.',
  },
];

const testimonialsData = [
  {
    name: 'Ali Hassan',
    feedback:
      'This platform has completely transformed my presentations. Highly recommend!',
    imgPath: aliHassan,
  },
  {
    name: 'Fatima Khan',
    feedback:
      'The ease of use and the quality of slides available are outstanding!',
    imgPath: fatimaKhan,
  },
  {
    name: 'Rao Usama',
    feedback:
      'Fantastic designs and super easy to find what I need. A game-changer for my projects.',
    imgPath: raoUsama,
  },
];

const pricingPlans = [
  {
    title: 'Free',
    price: '$0',
    description: 'Download Free Slides',
    features: [
      '100+ Free Slides',
      'Standard Designs',
      'For Beginners',
      'Basic Support',
    ],
  },
  {
    title: 'Basic',
    price: '$19/month',
    description: 'Download Basic Slides',
    features: [
      '500+ Basic Slides',
      'Good Design Quality',
      'With Few Animations',
      'Standard Support',
    ],
  },
  {
    title: 'Pro',
    price: '$49/month',
    description: 'Download Premium Slides',
    features: [
      '1000+ Premium Slides',
      'Unique & Custom Designs',
      'Animated Slides Included',
      '24/7 Premium Support',
    ],
  },
];

const companyInfoLinks = [
  { name: 'About Us', url: '#' },
  { name: 'Careers', url: '#' },
  { name: 'Privacy Policy', url: '#' },
  { name: 'Terms of Service', url: '#' },
];

const quickLinks = [
  { name: 'Home', url: '#' },
  { name: 'Categories', url: '#' },
  { name: 'Contact Us', url: '#' },
  { name: 'FAQs', url: '#' },
];

const socialLinks = [
  { name: 'Facebook', icon: <FaFacebookF />, url: 'https://facebook.com' },
  { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
  { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
  { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
];

const footerContent = {
  companyInfoLinks,
  quickLinks,
  socialLinks,
};

export {
  navLinks,
  featuresData,
  taglines,
  categoriesData,
  testimonialsData,
  pricingPlans,
  footerContent,
};
