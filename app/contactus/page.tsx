"use client"
import Contact from "@/components/contactus/contact";
import Hero from "@/components/shared/Pagehero";
import Footer from "@/components/shared/Footer";

const Contactpage: React.FC = () => {
    return (
        <div>
            {/* -----hero section----- */}
            <Hero title="Contact Us" subtext="Contact us"/>
            {/* -----hero section----- */}
           {/* ---contact---- */}
           <Contact />
           {/* ---contact---- */}
           <Footer/>
        </div>
    );
};

export default Contactpage;
