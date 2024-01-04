import { Button } from "../ui/button";
import Input from "./Input";

const Subscribe: React.FC = () => {
    return (
        <div className="relative  lg:min-h-[200px] h-[300px] w-full">
            <div style={{ backgroundImage: "url(/assets/subscribe.jpg)", backgroundPosition: "center center" }} className="  bottom-[54px] right-0 bg-cover bg-no-repeat bg-scroll bg-center 
         h-full w-full flex items-center">
            
                <div className=" lg:px-8 px-2 grid grid-cols-12 gap-x-8 w-[100%] z-10">
                    <div className=" md:col-span-4 col-span-12 mr-6 text-center md:text-start mb-3 md:mb-0">
                        <h2 className=" text-white font-[700] lg:text-[36px] leading-[40px] text-[25px]">
                            Subscribe To Our
                            <br />
                            Newsletter
                        </h2>
                    </div>
                    <div className=" md:col-span-8 col-span-12 lg:ml-6 ml-0">
                        <div className=" grid lg:grid-cols-3 grid-cols-2 lg:gap-x-8 items-end gap-x-4">
                            <Input type="text" placeholder="Your Name" className=" bg-gray-100 pt-3 pb-3 lg:mb-0 mb-2" />
                            <Input type="email" placeholder="Your email" className=" bg-gray-100 pt-3 pb-3 lg:mb-0 mb-2" />
                            <Button className="relative z-[5] bg-[#0D01E5] text-white px-8 pt-3 pb-3 rounded-[30px] w-full h-[50px] text-[20px] leading-[20px] font-[700] cursor-pointer lg:mb-0 mb-2"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="top-0 left-0 absolute bottom-0 right-0 bg-[#FFC400]/40 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black/40 before:content-[''] before:z-[2]">
            </div>
        </div>
    );
};

export default Subscribe;
