
import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";

// Lazy load components for better performance
const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const Projects = lazy(() => import("@/components/Projects"));
const Skills = lazy(() => import("@/components/Skills"));
const Contact = lazy(() => import("@/components/Contact"));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-400 border-t-transparent"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900">
      <Navigation />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Index;
