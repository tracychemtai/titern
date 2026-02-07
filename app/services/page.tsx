import ServicesPage from '@/components/services/ServicesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Titern Concrete Solutions',
  description: 'Comprehensive concrete solutions including manufacturing, delivery, and technical support.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Concrete Services | Titern',
    description: 'End-to-end concrete solutions from manufacturing to delivery and support.',
    type: 'website',
  },
};

const Page = () => {
  return <ServicesPage />
}

export default Page