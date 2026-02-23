import HomePage from '@/components/home/HomePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Titern Concrete Solutions Ltd | Quality Precast Concrete Products',
  description: 'High-quality precast concrete products for construction, infrastructure, and real estate sectors in Kenya.',
  keywords: 'concrete, precast, construction, Kenya, infrastructure, building materials',
  metadataBase: new URL('https://titern.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Titern Concrete Solutions Ltd | Building Kenya\'s Future',
    description: 'Your trusted partner for high-quality precast concrete products in Kenya.',
    url: 'https://titern.vercel.app/',
    siteName: 'Titern Concrete Solutions',
    type: 'website',
    images: [
      {
        url: '/assets/Logo2.2.jpeg', 
        width: 1200,
        height: 630,
        alt: 'Titern Concrete Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titern Concrete Solutions Ltd | Building Kenya\'s Future',
    description: 'Your trusted partner for high-quality precast concrete products in Kenya.',
    images: ['/assets/Logo2.2.jpeg'],
  },
};

const Page = () => {
  return <HomePage />
}

export default Page;