import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeroCardProps {
    heroTitle: string;
    heroDescription: string;
    icon: LucideIcon;
}
const HeroCard = ({ heroTitle,heroDescription,icon:Icon }: HeroCardProps) => {
    return (

        <div className=" bg-white  px-[30px] pt-[50px] pb-[41px] rounded-[15px] mb-[30px] group  cursor-pointer relative card_transition overflow-hidden z-[2] shadow-lg min-h-[350px]">
            <div className=" w-[80px] h-[80px] bg-[#FFC400] rounded-full text-center flex justify-center items-center mb-4 group-hover:text-white group-hover:bg-white/10">

        
                <Icon className={cn("w-10 h-10 text-white")} />
            </div>
            <div className="mt[24px]">
                         <h3 className=" font-[600] text-[20px] mb-[16px] leading-[26px]  group-hover:text-white ">
                            {
                                heroTitle
                            }
                         </h3>
                         <p className="  text-gray-500 group-hover:text-white">
                            {
                                heroDescription
                            }
                         </p>
            </div>

        </div>
    )
}

export default HeroCard;
