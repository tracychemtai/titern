import ContactPage from '@/components/contact/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Titern Concrete Solutions',
  description: 'Get in touch for enquiries, quotations, or partnerships. We\'re here to help with your concrete needs.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Titern Concrete Solutions',
    description: 'Reach out for expert advice and quality concrete product solutions.',
    type: 'website',
  },
};

const Page = () => {
  return <ContactPage />
}

export default Page