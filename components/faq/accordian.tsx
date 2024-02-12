"use client";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
// import Data from "./data";
import { getfaq } from "../shared/apis/api";
// import Data from "./data.js";

const Accordian: React.FC = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getFaqdata = async () => {
            const res = await getfaq()
            console.log("faq", res)
            if (res?.status == "success") {

                const length = res?.data?.length - 1
                if (length) {

                    setData(res?.data[length])
                }
                // setData(res?.data)
            }
        }
        getFaqdata()
    }, [])

    console.log("data", data )
    return (
        <div className=" lg:col-span-8 col-span-12">
            <h2 className=" text-[16px] font-[600] text-[#0D01E5]">
                WHY CHOOSE US
            </h2>
            <h2 className="text-[36px] font-[800] mt-[10px]">
                Frequently Asked Question
            </h2>
            <div className=" pt-[49px]">
                {
                    data?.faqData?.map((item, index) => <>
                        <Accordion type="single" collapsible
                            key={index}
                            className=" bg-[#F7F7F7] rounded-[20px] shadow-lg px-[30px] py-[30px] mb-[20px]"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger
                                    className="font-[600] text-[20px] leading-[28px] cursor-pointer"
                                >{
                                        item?.question
                                    }</AccordionTrigger>
                                <AccordionContent className=" text-gray-500 font-[500] pt-3 text-[16px]">
                                    {
                                        item?.answer
                                    }
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </>)
                }
            </div>
        </div>
    )
}

export default Accordian
