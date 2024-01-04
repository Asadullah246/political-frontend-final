import Contact from "@/components/contactus/contact";
import Hero from "@/components/shared/Pagehero";

const Contactpage: React.FC = () => {
    return (
        <div>
            {/* -----hero section----- */}
            <Hero title="Contact Us" subtext="Contact us"/>
            {/* -----hero section----- */}
           {/* ---contact---- */}
           <Contact />
           {/* ---contact---- */}
        </div>
    );
};

export default Contactpage;
