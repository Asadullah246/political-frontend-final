import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { PlaySquare } from 'lucide-react';

interface IData {
    data?: number;
}
const AccordionComponent: React.FC<IData> = ({ data }) => {
    return (
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='px-3 bg-[#F7F9FA]'>
                        <div className='w-full flex items-center justify-between mr-4'>
                            <h4 className='font-bold'> 
                                Day {data? data:0 + 1} - How to get ready to be an expert</h4>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <div className='flex items-center gap-[3px]'> <p className='mt-2'>*</p> <p>10 lectures</p></div>
                                    <div className='flex items-center gap-[3px]'> <p className='mt-2'>*</p> <p>20h total length</p></div>
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='px-3 mt-3'>
                        {
                            [...Array(10)].map((data,index)=>{
                                return(
                                    <div key={index} className='w-full flex justify-between items-center my-3 '>
                            <div className='flex items-center gap-2'>
                                <PlaySquare size={16} color="#FFC400" strokeWidth={2} />
                                <p>How to get start of this journey</p>
                            </div>
                            <div>
                                <p>10.30</p>


                            </div>
                        </div>
                                )
                            })
                        }
                    </AccordionContent>
                </AccordionItem>
            </Accordion>


        </div>
    );
};

export default AccordionComponent;
