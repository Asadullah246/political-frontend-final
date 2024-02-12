/* eslint-disable react/no-unescaped-entities */
""


// import AOS from "aos";
// import "aos/dist/aos.css";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import roundIcon2 from "../../public/assets/roundIcon2.png";
import { Button } from "../ui/button";
const AboutUs: React.FC = () => {
    return (


        <div className="pt-12   mt-14"

        >
            <div className="flex flex-col-reverse   lg:flex-row  items-center px-8">
                <div className="w-full lg:w-[50%] mt-16 lg:mt-0 "
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >

                    <h5 className="text-primary1    uppercase tracking-wide text-base leading-5 "><span className="">Our</span> mission</h5>
                    <h2 className="lg:text-4xl text-2xl font-bold mt-2 ">Our target is to give you <br /><span className="text-secondary1">the completion on politics</span></h2>
                    <p className="lg:mt-6 mt-3 tracking-wide  mb-[40px]  md:pr-8 ">
                        At PolitIQ , our mission is simple yet transformative: to empower political talents, engage communities, and shape the future of nations. Through our innovative platform, we are breaking barriers, fostering transparency, and creating a dynamic ecosystem where talents thrive and constituencies flourish.
                    </p>

                    <Button className='relative z-[5] mb-8  bg-primary1   text-white rounded-[25px] p-[25px] text-[20px]'
                        data-aos="fade-up"
                        data-aos-duration="0"
                        variant={'hover'}
                    >
                        See Details
                    </Button>

                </div>
                <div
                    className=" lg:flex-1  relative flex justify-end pr-12   "
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <div className="absolute bottom-4  right-[40%] p-4 border-4 border-primary1 bg-white text-black  rounded-2xl z-[3]  ">
                        <div >
                            <p className="flex gap-2 items-center font-bold mb-3">    <ArrowBigRight strokeWidth={2.5} size={20} style={{ fill: "white" }} className="text-primary1  " /> <span className="whitespace-nowrap ">empower political talents</span></p>
                            <p className="flex gap-2 items-center font-bold mb-3">    <ArrowBigRight strokeWidth={2.5} size={20} style={{ fill: "white" }} className="text-primary1  " /> <span className="whitespace-nowrap " >engage communities</span></p>
                            <p className="flex gap-2 items-center font-bold  ">    <ArrowBigRight strokeWidth={2.5} size={20} style={{ fill: "white" }} className="text-primary1  " /> <span className="whitespace-nowrap " >shape future's nations</span></p>

                        </div>

                    </div>

                    <Image className="absolute top-8 right-[4%]  z-[0] animate-spin duration-500 " style={{ animationDuration: "23000ms" }} src={roundIcon2} alt="icon" width={160} height={160} />
                    {/* <Image className="absolute -z-10 animate-spin duration-500 " style={{animationDuration: "5000ms" }} src={icon2}alt="icon" width={260} height={260} /> */}
                    {/* <Image src={missionPic} alt="mission" width="100%" height="100%" className="z-[2]" /> */}
                    <img src='/assets/mission.png' alt="mission" className="w-auto h-[100%] z-[2]" />
                </div>
            </div>

        </div>
    );
};

export default AboutUs;
