import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <ContactCTA />
      <section id="resultados" className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 border px-4 py-1.5">
            <span className="h-2 w-2 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Resultados
            </span>
          </div>
          <h2 className="font-satoshi text-4xl font-black text-foreground md:text-5xl">
            RESULTADOS <span className="text-primary">EN VIVO</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Consulta los resultados de nuestros eventos más recientes. Actualización en tiempo real durante la competencia.
          </p>
          <a href="#contacto" className="btn-mechanical mt-8 inline-flex bg-primary text-primary-foreground">
            Consultar Resultados
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
