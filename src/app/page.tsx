import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/home/Hero';
import { TechStackSection } from '@/components/home/TechStackSection';
import { FeaturedCourses } from '@/components/home/FeaturedCourses';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { CallToAction } from '@/components/home/CallToAction';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <TechStackSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <FeaturedProjects />
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
