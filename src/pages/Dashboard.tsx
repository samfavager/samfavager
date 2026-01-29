import { useState } from "react";
import MainDevice from "@/components/Dashboard/MainDevice";
import ContactPopup from "@/components/Dashboard/ContactPopup";
import ProjectsSection from "@/components/Dashboard/ProjectsSection";
import Marquee from "@/components/Dashboard/Marquee";
import Footer from "@/components/Dashboard/Footer";

const Dashboard = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background bg-dotted-grid">
      {/* Main content */}
      <main className="relative">
        {/* Hero / Device section */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
          <MainDevice onContactClick={() => setIsContactOpen(true)} />
        </section>

        {/* Marquee */}
        <Marquee />

        {/* Projects */}
        <ProjectsSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Contact popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default Dashboard;
