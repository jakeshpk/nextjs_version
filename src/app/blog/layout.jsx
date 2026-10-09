import BlogHeader from '@/components/BlogHeader';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function BlogLayout({ children }) {
  return (
    <>
      <BlogHeader />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
