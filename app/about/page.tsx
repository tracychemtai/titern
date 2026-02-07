import AboutPage from '@/components/about/AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Titern Concrete Solutions',
  description: 'Discover our mission, vision, and commitment to quality in precast concrete manufacturing.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Titern Concrete Solutions',
    description: 'Learn about our journey, values, and dedication to building Kenya\'s infrastructure.',
    type: 'website',
  },
};

const Page = () => {
  return <AboutPage />
}

export default Page