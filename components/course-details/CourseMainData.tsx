import { CalendarDays, Globe, Star } from 'lucide-react';
import React from 'react';

const CourseMainData: React.FC = () => {
    return (
        <div className=''>
        <h3 className='text-3xl mt-3 tracking-wide '>
            100 Days of Political talent course
        </h3>
        <h5 className='text-lg font-normal mt-2 text-gray-300 tracking-wide '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, temporibus? sit amet consectetur adipisicing elit. Dolor, temporibus?
        </h5>

        <div className=" flex gap-2 mt-2 items-center ">
            <div>
                <p className="font-bold ">4.6</p>
            </div>
            <div className=" flex gap-1 text-gray-300">
                {
                    [...Array(4)].map((a, index) => {
                        return (
                            <Star key={index} size={16} strokeWidth={1.5} className={`text-[#FFC400]  ${(4 >= (index + 1) ? "fill-[#FFC400]" : "fill-transparent")}`} />
                        )
                    })
                }
            </div>
            <div className=" text-secondary1 text-[14px] font-[500]">
                ({100} Reviews)
            </div>
            <div className=" text-gray-300 text-[14px] font-[500]">
                10000 Students
            </div>
        </div>
        <p className='mt-2'>Created by <a className='text-secondary1 underline underline-offset-2' href='#'>Asad</a></p>
        <div className="flex items-center gap-4 text-gray-300 mt-2 ">
            <div className='flex items-center gap-2'>
                <CalendarDays size={20} strokeWidth={2} />
                <span>Last updated 8/2023</span>
            </div>
            <div className='flex items-center gap-2'>
                <Globe size={20} strokeWidth={2} />
                <span>English</span>
            </div>
        </div>
    </div>
    );
};

export default CourseMainData;
