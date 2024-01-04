import Image from "next/image";
import aimImg from "../../public/assets/mission.png"
import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import roundIcon2 from "../../public/assets/roundIcon2.png"
import SmallTitle, { LargeTitle } from "../shared/SmallComponents";
import { useRouter } from 'next/navigation';

const CourseNews: React.FC = () => {
    const router = useRouter();
    const navigateDetails=()=>{
        router.push('/dashboard/search');
    }
    const aims: string[] = ["Facilitate Knowledge Sharing", "Host Webinars and Virtual Events", "Gamify User Engagement", "Encourage Mentorship and Collaboration", "Foster a Supportive Environment"]
    return (
        <div className="w-full md:w-[85%] mx-auto ">
            <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-y-12 md:gap-y-0 ">
                <div className="relative ">
                    {/* <Image className="absolute top-8 left-[5%]  z-[-1] animate-spin  " style={{ animationDuration: "23000ms" }} src={roundIcon2} alt="icon" width={160} height={160} /> */}

                    <div className="absolute z-[-1]">
                        <div className="image-container">
                            <Image className="absolute top-8 left-[5%]  z-[-1]  " src={roundIcon2} alt="icon" width={160} height={160} />
                        </div>
                    </div>
                    <Image src={aimImg} height={500} width={500} className="z-[2]" alt="aim image" />
                </div>
                <div className="w-full md:w-1/2 ">
                    <SmallTitle >Our Courses</SmallTitle>
                   <LargeTitle>Our special courses to <br />
                   inprove your Knowledge</LargeTitle>
                    <p className="text-[#94979c] mt-4 leading-7 tracking-normal">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quae totam odio iste ea repellat molestias architecto nulla aspernatur quos doloremque quas doloribus unde quidem rem beatae harum, officia nemo quam dignissimos nobis illo aliquam, atque fuga? Assumenda provident similique perspiciatis, voluptates sequi fugiat consequatur modi aliquid dolor quos tenetur.
                    </p>


                    <div className="mt-12">
                        <Button  onClick={navigateDetails} className="relative z-[5] bg-[#FFC400] text-white rounded-[25px] p-[25px] text-[20px]">
                            See Courses
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CourseNews;
