import Header from '@/react-app/components/Header';
import HeroSection from '@/react-app/components/HeroSection';
import DownloadSection from '@/react-app/components/DownloadSection';
import IncentivesSection from '@/react-app/components/IncentivesSection';
import DriverCTASection from '@/react-app/components/DriverCTASection';
import SafetySection from '@/react-app/components/SafetySection';
import BlogSection from '@/react-app/components/BlogSection';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <DownloadSection />
        <IncentivesSection />
        <DriverCTASection />
        <SafetySection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
