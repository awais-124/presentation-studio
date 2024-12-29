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
  { id: 'categories', label: 'Categories' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Testimonials' },
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

const businessSlides = [
  {
    id: 1,
    title: 'Business Planning',
    link: 'https://drive.google.com/file/d/1i_vnpCRwMOWCPsvv6NAFqos7SEK9irhK/view?usp=drive_link',
    download_link:
      'https://drive.google.com/uc?id=1i_vnpCRwMOWCPsvv6NAFqos7SEK9irhK&export=download',
  },
  {
    id: 2,
    title: 'Shark Tank Global',
    link: 'https://docs.google.com/presentation/d/19vRDJurd686EvWGUkPnrxUqladqdUMGn/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/presentation/d/19vRDJurd686EvWGUkPnrxUqladqdUMGn/export?format=pdf',
  },
  {
    id: 3,
    title: 'Business Startup',
    link: 'https://drive.google.com/file/d/1BwYLyPfH0OvLc57nMIO_6bdn2rpmVJa0/view?usp=drive_link',
    download_link:
      'https://drive.google.com/uc?id=1BwYLyPfH0OvLc57nMIO_6bdn2rpmVJa0&export=download',
  },
  {
    id: 4,
    title: 'Innovation',
    link: 'https://drive.google.com/file/d/1ntIgYmj3LOKf-Hfr17kWiVeWyGjapk_H/view?usp=drive_link',
    download_link:
      'https://drive.google.com/uc?id=1ntIgYmj3LOKf-Hfr17kWiVeWyGjapk_H&export=download',
  },
  {
    id: 5,
    title: 'Presentation Studio',
    link: 'https://docs.google.com/presentation/d/1Gat8TBI07N202zJc0T_AweXDH6ix8ud-/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/presentation/d/1Gat8TBI07N202zJc0T_AweXDH6ix8ud-/export?format=pdf',
  },
];

const educationSlides = [
  {
    id: 1,
    title: 'Bloom Taxonomy',
    link: 'https://docs.google.com/presentation/d/1lf6qg7f2Tm4GMXWIb0THY9Z9Ft_LnjyW/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/presentation/d/1lf6qg7f2Tm4GMXWIb0THY9Z9Ft_LnjyW/export?format=pdf',
  },
  {
    id: 2,
    title: 'Problem Solving Learning',
    link: 'https://docs.google.com/presentation/d/1f04PT4t_yguCIgP5GYot3BnoI7UHjVd_/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/presentation/d/1f04PT4t_yguCIgP5GYot3BnoI7UHjVd_/export?format=pdf',
  },
  {
    id: 3,
    title: 'Social Development',
    link: 'https://docs.google.com/presentation/d/1tNTPP98C5kQwuWCA-g8iRk4oFAo0gjEx/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/presentation/d/1tNTPP98C5kQwuWCA-g8iRk4oFAo0gjEx/export?format=pdf',
  },
  {
    id: 4,
    title: 'Teaching and Learning',
    link: 'https://docs.google.com/presentation/d/1dVZ4PsGlxBcXFXGQv2iGw7kyd27WNBbY/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/presentation/d/1dVZ4PsGlxBcXFXGQv2iGw7kyd27WNBbY/export?format=pdf',
  },
  {
    id: 5,
    title: 'Instructional Strategies',
    link: 'https://docs.google.com/presentation/d/1ZcGx2xsFri9Hf9a8REcaqihpX7EQf1CY/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/presentation/d/1ZcGx2xsFri9Hf9a8REcaqihpX7EQf1CY/export?format=pdf',
  },
  {
    id: 6,
    title: 'Indirect Instructions',
    link: 'https://docs.google.com/presentation/d/1HTaeb5yPYF84SugrE1xjtNzyWTcCFnEv/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/presentation/d/1HTaeb5yPYF84SugrE1xjtNzyWTcCFnEv/export?format=pdf',
  },
  {
    id: 7,
    title: 'Mental Health and Guidance',
    link: 'https://docs.google.com/presentation/d/1Ahfth94hfKGPVImAJUc2HZkDKOyS1NDg/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/presentation/d/1Ahfth94hfKGPVImAJUc2HZkDKOyS1NDg/export?format=pdf',
  },
  {
    id: 8,
    title: 'Individual Differences',
    link: 'https://docs.google.com/presentation/d/1bxzyjyH0MCowXEyYG8Ff1zZcXdUs0s46/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/presentation/d/1bxzyjyH0MCowXEyYG8Ff1zZcXdUs0s46/export?format=pdf',
  },
];

const scienceSlides = [
  {
    id: 1,
    title: 'Energy',
    link: 'https://docs.google.com/presentation/d/17_7SCdqTBtT_-BMRMwPNMpLFFujRz3BK/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=17_7SCdqTBtT_-BMRMwPNMpLFFujRz3BK',
  },
  {
    id: 2,
    title: 'Potential And Kinetic Energy',
    link: 'https://docs.google.com/presentation/d/11ShSqZItIqodNp098iQDbG0IoBFx0kf1/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=11ShSqZItIqodNp098iQDbG0IoBFx0kf1',
  },
  {
    id: 3,
    title: 'Heat Energy',
    link: 'https://docs.google.com/presentation/d/1kiMddvTliAvPWB4N-RYw3n5h_m0zSUGz/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=1kiMddvTliAvPWB4N-RYw3n5h_m0zSUGz',
  },
  {
    id: 4,
    title: 'Temperature',
    link: 'https://docs.google.com/presentation/d/1e5qdjtpLj-34rmU7RdnYyUn9WNWvivRF/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=1e5qdjtpLj-34rmU7RdnYyUn9WNWvivRF',
  },
  {
    id: 5,
    title: 'Layers of Earth',
    link: 'https://docs.google.com/presentation/d/1Wftos_h7smgd0A2BQkR_SNL7f7Vi1Ij1/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=1Wftos_h7smgd0A2BQkR_SNL7f7Vi1Ij1',
  },
  {
    id: 6,
    title: 'Motions of Earth',
    link: 'https://docs.google.com/presentation/d/1ccM6KSb-kjki20ZljQPQ-OnI-dWkS4dS/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=1ccM6KSb-kjki20ZljQPQ-OnI-dWkS4dS',
  },
  {
    id: 7,
    title: 'Contributions of Muslim Scientists',
    link: 'https://docs.google.com/presentation/d/13Q93ARVNFzYJYBZEDWwi9IFl3Lfwi3b0/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=13Q93ARVNFzYJYBZEDWwi9IFl3Lfwi3b0',
  },
  {
    id: 8,
    title: 'Classification of Science',
    link: 'https://docs.google.com/presentation/d/1GhDhW3Hd49PBgSvmLfKijNW4RFeEQPf5/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=1GhDhW3Hd49PBgSvmLfKijNW4RFeEQPf5',
  },
];

const technologySlides = [
  {
    id: 1,
    title: 'OSI Model',
    link: 'https://docs.google.com/presentation/d/15CWZt4jUFOMwaC7EY_ZrmhsFVBtBaWGh/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=15CWZt4jUFOMwaC7EY_ZrmhsFVBtBaWGh',
  },
  {
    id: 2,
    title: 'Account in Fiverr',
    link: 'https://docs.google.com/presentation/d/10YI55yDWh-Su0aeFmjqKZatwc2apK6my/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=10YI55yDWh-Su0aeFmjqKZatwc2apK6my',
  },
  {
    id: 3,
    title: 'Adversarial Search and Games (1)',
    link: 'https://docs.google.com/presentation/d/1dlhcUlPO8x8WOrOh7fMNTVExwyArMN63/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=1dlhcUlPO8x8WOrOh7fMNTVExwyArMN63',
  },
  {
    id: 4,
    title: 'Adversarial Search and Games (2)',
    link: 'https://docs.google.com/presentation/d/1-RbviHyjqXIEMTa9MvCV0xjgzUl39ph5/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=1-RbviHyjqXIEMTa9MvCV0xjgzUl39ph5',
  },
  {
    id: 5,
    title: 'Artificial Intelligence',
    link: 'https://docs.google.com/presentation/d/1uwuJwHlsiRoemX9WH6KM8z4A-P0sNWTo/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=1uwuJwHlsiRoemX9WH6KM8z4A-P0sNWTo',
  },
  {
    id: 6,
    title: 'Solving Problems by Searching',
    link: 'https://docs.google.com/presentation/d/1j3pdY8uMIHXwKhqabScD9jZ1E7x_hhQT/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=1j3pdY8uMIHXwKhqabScD9jZ1E7x_hhQT',
  },
  {
    id: 7,
    title: 'Informed Search Algorithms',
    link: 'https://docs.google.com/presentation/d/1SRlptLuHhwsa0kLVuOjidi228gmphfuj/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=1SRlptLuHhwsa0kLVuOjidi228gmphfuj',
  },
  {
    id: 8,
    title: 'Introduction to Artificial Intelligence',
    link: 'https://docs.google.com/presentation/d/1-kz_JBC2ZsDoumzQ9wZ9HBB-8rVOSwK0/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?export=download&id=1-kz_JBC2ZsDoumzQ9wZ9HBB-8rVOSwK0',
  },
];

const healthCareSlides = [
  {
    id: 1,
    title: 'Individual Differences',
    link: 'https://docs.google.com/presentation/d/1t98mpMV-Vc_iWkb_Vo2PkN6TRC_VjvhZ/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?id=1t98mpMV-Vc_iWkb_Vo2PkN6TRC_VjvhZ&export=download',
  },
  {
    id: 2,
    title: 'Mental Health and Guidance',
    link: 'https://docs.google.com/presentation/d/1Raeq__Z8MaxDUUq45NY3_96cNwDIn4MU/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?id=1Raeq__Z8MaxDUUq45NY3_96cNwDIn4MU&export=download',
  },
  {
    id: 3,
    title: 'Educational Psychology',
    link: 'https://docs.google.com/presentation/d/1-sNhUahDnABC-PYyQxbW-8u7JZLGqZLs/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?id=1-sNhUahDnABC-PYyQxbW-8u7JZLGqZLs&export=download',
  },
  {
    id: 4,
    title: 'Teaching and Learning',
    link: 'https://docs.google.com/presentation/d/1NfdCWPJSgvI_npUuWI5pR1JPUV5KaCdJ/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?id=1NfdCWPJSgvI_npUuWI5pR1JPUV5KaCdJ&export=download',
  },
  {
    id: 5,
    title: 'Social Development',
    link: 'https://docs.google.com/presentation/d/1hsARic19ohxROyQ-2eICt2eJNo2Ads_f/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?id=1hsARic19ohxROyQ-2eICt2eJNo2Ads_f&export=download',
  },
  {
    id: 6,
    title: 'Human Body System',
    link: 'https://docs.google.com/presentation/d/1nkXTiNo4bnA4e5sEl11ad37BrgPo9zxh/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?id=1nkXTiNo4bnA4e5sEl11ad37BrgPo9zxh&export=download',
  },
  {
    id: 7,
    title: 'Circulatory System',
    link: 'https://docs.google.com/presentation/d/16VbcvzyMUt3yJ-L5v374i424UJFPAwmA/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?id=16VbcvzyMUt3yJ-L5v374i424UJFPAwmA&export=download',
  },
  {
    id: 8,
    title: 'Energy Flow in Ecosystem',
    link: 'https://docs.google.com/presentation/d/1H72dj1SYI8RroWfbmBGlNxG0plSD1UFt/edit?usp=drive_link&ouid=117870412249929892273&rtpof=true&sd=true',
    download_link:
      'https://docs.google.com/uc?id=1H72dj1SYI8RroWfbmBGlNxG0plSD1UFt&export=download',
  },
];

const slidesLinks = {
  Business: businessSlides,
  Education: educationSlides,
  Science: scienceSlides,
  HealthCare: healthCareSlides,
  Technology: technologySlides,
};

export {
  navLinks,
  featuresData,
  taglines,
  categoriesData,
  testimonialsData,
  pricingPlans,
  footerContent,
  slidesLinks,
};
