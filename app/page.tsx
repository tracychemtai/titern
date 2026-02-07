import HomePage from '@/components/home/HomePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Titern Concrete Solutions Ltd | Quality Precast Concrete Products',
  description: 'High-quality precast concrete products for construction, infrastructure, and real estate sectors in Kenya.',
  keywords: 'concrete, precast, construction, Kenya, infrastructure, building materials',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Titern Concrete Solutions Ltd | Building Kenya\'s Future',
    description: 'Your trusted partner for high-quality precast concrete products in Kenya.',
    type: 'website',
  },
};

const Page = () => {
  return <HomePage />
}

export default Page