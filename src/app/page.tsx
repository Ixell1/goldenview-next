import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import AvailabilityBar from '@/components/AvailabilityBar';
import Marquee from '@/components/Marquee';
import PromoPackages from '@/components/PromoPackages';
import VideoSection from '@/components/VideoSection';
import About from '@/components/About';
import ServicesBento from '@/components/ServicesBento';
import Apartments from '@/components/Apartments';
import Destination from '@/components/Destination';
import Benefits from '@/components/Benefits';
import Restaurant from '@/components/Restaurant';
import CulinaryVideo from '@/components/CulinaryVideo';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <>
      <Nav />
      <section>
        <Hero />
        <AvailabilityBar />
      </section>
      <Marquee />
      <PromoPackages />
      <VideoSection />
      <About />
      <ServicesBento />
      <Apartments />
      <Destination />
      <Benefits />
      <Restaurant />
      <CulinaryVideo />
      <Testimonials />
      <Gallery />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </>
  );
}
