import Image from "next/image";
import aimImg from "../../public/assets/mission.png"
import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import roundIcon2 from "../../public/assets/roundIcon2.png"

const OurAims: React.FC = () => {
    const aims: string[] = ["Facilitate Knowledge Sharing", "Host Webinars and Virtual Events", "Gamify User Engagement", "Encourage Mentorship and Collaboration", "Foster a Supportive Environment"]
    return (
        <div className="w-full md:w-[85%] mx-auto  ">
            <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-y-12 md:gap-y-0 ">
                <div className="w-full md:w-1/2 ">
                    <h5 className="text-base  text-primary1 uppercase tracking-wider ">Our Aims</h5>
                    <h2 className="text-3xl mt-2 ">Creating a Global <br />
                        Political Talent Community</h2>
                    <p className="text-[#94979c] mt-4  leading-7 tracking-normal ">
                        We will create a thriving global political talent community, foster engagement,
                        collaboration, and a sense of belonging among our users.
                        Here&#39;s our intention at PolitIQ. With our clients, customers, talents, and communities,
                        we are determined to:
                    </p>

                    <div className="mt-4 ">
                        {
                            aims?.map((aim, index) => {
                                return (
                                    <div key={index} className="flex items-center gap-2 mt-2">
                                        <CheckCircle size={16} strokeWidth={2.5} color="#0D01E5" />
                                        <p>{aim}</p>
                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className="mt-8">
                        <Button className="relative z-[5] bg-[#FFC400] text-white rounded-[25px] p-[25px] text-[20px]">
                            Read More
                        </Button>
                    </div>

                </div>
                <div className="relative ">
                    <Image className="absolute top-8 right-[4%]  z-[-1]  animate-spin   " style={{ animationDuration: "38000ms" }} src={roundIcon2} alt="icon" width={160} height={160} />
                    <Image src={aimImg} height={500} width={500} className="z-[2]" alt="aim image" />
                </div>
            </div>
        </div>
    );
};

export default OurAims;
