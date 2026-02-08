import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import ProductPreview from '@/components/ProductPreview';
import About from '@/components/About';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      {/* Background gradient blobs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-accentGreen rounded-full opacity-10 blur-[120px] animate-glow pointer-events-none" />
      <div className="fixed top-1/3 right-1/4 w-[500px] h-[500px] bg-accentGlow rounded-full opacity-10 blur-[140px] animate-glow pointer-events-none" style={{ animationDelay: '2s' }} />
      
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <ProductPreview />
      <About />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
