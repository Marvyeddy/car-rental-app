export const Links = [
  { title: 'Home', url: '#' },
  { title: 'About', url: '#' },
  { title: 'Vehicle-Models', url: '#' },
  { title: 'Faq', url: '#' },
  { title: 'Contact', url: '#' },
];

export const Car = [
  { label: 'Audi', value: 'Audi' },
  { label: 'VW Golf', value: 'VW Golf' },
  { label: 'Toyota Camry', value: 'Toyota Camry' },
  { label: 'BMW 320', value: 'BMW 320' },
  { label: 'Benz GLK', value: 'Benz GLK' },
  { label: 'VW Passatcc', value: 'VW Passatcc' },
];

export const Pickup = [
  { label: 'Lagos', value: 'Lagos' },
  { label: 'Benin', value: 'Benin' },
  { label: 'Abuja', value: 'Abuja' },
  { label: 'Delta', value: 'Delta' },
  { label: 'Cross-River', value: 'Cross-River' },
];

export const DropOff = [
  { label: 'Ikeja', value: 'Ikeja' },
  { label: 'Ugbowo', value: 'Ugbowo' },
  { label: 'High-Road', value: 'High-Road' },
  { label: 'Asaba', value: 'Asaba' },
  { label: 'Ibom', value: 'Ibom' },
];

export interface CarsProps {
  name: string;
  price: string;
  image: string;
  model: string;
  year: number;
  fuel: string;
  transmission: string;
}

export const Cars: CarsProps[] = [
  {
    name: 'Audi v7',
    price: '$12',
    image: '/audi.png',
    model: 'Audi',
    year: 2016,
    fuel: 'Gasoline',
    transmission: 'Manual',
  },
  {
    name: 'VW Golf',
    price: '$15',
    image: '/vw golf.png',
    model: 'Volkswagen',
    year: 2012,
    fuel: 'Disel',
    transmission: 'Automatic',
  },
  {
    name: 'Toyota Camry',
    price: '$23',
    image: '/toyota camry.png',
    model: 'Camry',
    year: 2020,
    fuel: 'Hybrid',
    transmission: 'Automatic',
  },
  {
    name: 'BMW 320',
    price: '$50',
    image: '/bmw 320.png',
    model: 'Bmw 320',
    year: 2020,
    fuel: 'Gasoline',
    transmission: 'Automatic',
  },
  {
    name: 'Benz GLK',
    price: '$76',
    image: '/benz glk.png',
    model: 'GLK',
    year: 2023,
    fuel: 'Hybrid',
    transmission: 'Automatic',
  },
  {
    name: 'VW Passatcc',
    price: '$67',
    image: '/vw passetcc.png',
    model: ' Passatcc',
    year: 2016,
    fuel: 'Diesel',
    transmission: 'Manual',
  },
];

interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'What is your return policy?',
    answer: 'Our return policy is 30 days, no questions asked.',
  },
  {
    question: 'How do I track my order?',
    answer:
      'You can track your order using the tracking number provided in the confirmation email.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide.',
  },
  {
    question: 'How can I contact customer service?',
    answer:
      'You can contact our customer service via email at support@example.com.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and Apple Pay.',
  },
];
