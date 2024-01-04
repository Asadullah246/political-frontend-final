"use client" 
import PoliticalCard from "@/components/ploliticalTalent/PoliticalCard";
import Hero from "@/components/shared/Pagehero";

const PloticalTalentPage: React.FC = () => {
    return (
        <div>
            <Hero
            title="All Political Talent" subtext='All Political Talent' />
            <PoliticalCard />
        </div>
    )
}

export default PloticalTalentPage;
