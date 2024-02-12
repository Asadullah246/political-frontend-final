"use client"
import PoliticalCard from "@/components/ploliticalTalent/PoliticalCard";
import Hero from "@/components/shared/Pagehero";

import Footer from "@/components/shared/Footer";

const PloticalTalentPage: React.FC = () => {
    return (
        <div>
            <Hero
            title="All Political Talent" subtext='All Political Talent' />
            <PoliticalCard />
            <Footer/>
        </div> 
    )
}

export default PloticalTalentPage;
