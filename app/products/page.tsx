import ProductsPage from '@/components/products/ProductsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products | Titern Concrete Solutions',
  description: 'Explore our wide range of high-quality precast concrete products for all construction needs.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Precast Concrete Products | Titern',
    description: 'Quality concrete products including road kerbs, drainage systems, and finishing products.',
    type: 'website',
  },
};

const Page = () => {
  return <ProductsPage />
}

export default Page