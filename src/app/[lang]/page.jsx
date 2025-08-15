import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import InfiniteLogos from "@/components/InfiniteLogos";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />
            <Hero />
            <InfiniteLogos />
            <Features />
            <Plans />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    );
}
