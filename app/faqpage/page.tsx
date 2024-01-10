"use client"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/shared/Footer";
import Accordian from "@/components/faq/accordian";
import FaqContact from "@/components/faq/faqContact";
import Hero from "@/components/shared/Pagehero";
import Subscribe from "@/components/shared/Subscribe";
const Faqpage: React.FC = () => {
    return (
        <div className="">
            <ToastContainer />
            <Hero title="FAQ"  subtext="faq"/>
            <div className=" grid grid-cols-12 px-8 pt-[100px] lg:gap-x-16 pb-[80px]">
                 <Accordian/>
                <FaqContact/>
            </div>
            {/* <Subscribe/> */} 
            <Footer/>
        </div>
    );
};

export default Faqpage;
