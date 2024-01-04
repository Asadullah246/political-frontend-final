"use client"
import { ProModal } from '@/components/proModal';
import VideopoPup from '@/components/VideoPopUp/videoPopUp';
/* eslint-disable react/no-unescaped-entities */
import AccordionComponent from '@/components/course-details/AccordionComponent';
import CourseDetailsCard from '@/components/course-details/CourseDetailsCard';
import CourseMainData from '@/components/course-details/CourseMainData';
import MoreCourses from '@/components/course-details/MoreCourses';
import RatingSection from '@/components/course-details/RatingSection';
import SingleNav from '@/components/shared/SingleNav';
import { useStore } from '@/hooks/useStore';
import { CourseMgmt } from '@/store/Store';
import { CheckCircle } from 'lucide-react';
import React, { useEffect } from 'react';

const CourseDetails: React.FC = () => { 
    const {isSticky,setIsSticky,isFooterVisible,setIsFooterVisible,isOpen,onOpen,onClose} =CourseMgmt((state)=>state)
    const handleScroll = () => {
        const threshold = 200;
        const scrollPosition = window.scrollY;

        if(!isFooterVisible){
            setIsSticky((scrollPosition > threshold)==true ? 1:2);
        }


    };
    const ModalOpenClose = useStore()
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isFooterVisible]);
    return (
        <div>
            <div className=' bg-black mb-8 '>
                <div className=' md:py-8 py:0 md:px-8 px-0 relative  text-white'>
                   <div className=' lg:block hidden'>
                   <CourseDetailsCard isSticky={isSticky}></CourseDetailsCard>
                   </div>
                    <div className='w-3/5 lg:block hidden'>
                        <SingleNav courseName={"Talent"}></SingleNav>
                        <CourseMainData></CourseMainData>
                    </div>
                    <div className=' w-[100%] lg:hidden block'>
                    <SingleNav courseName={"Talent"}></SingleNav>
                    <CourseDetailsCard></CourseDetailsCard>
                    </div>
                </div>
            </div>
            <div className="container relative ">
                <div className="lg:w-3/5 w-[100%]">
                    {/* learning subjects  */}
                    <div className='border-2 p-6'>
                        <h3 className='text-3xl font-bold'>What you'll learn</h3>
                        <div className='grid grid-cols-2 gap-4 mt-6'>
                            {[...Array(8)].map((data, index) => {
                                return (
                                    <div key={index} className='flex gap-4'>
                                        <div>
                                            <CheckCircle size={16} color="#0D01E5" className='mt-[5px] ' />
                                        </div>
                                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ipsa animi ea nemo molestias </p>
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                    {/* course content  */}
                    <section className='mt-8 mb-8'>
                        <h2 className='text-4xl font-bold'>Course content</h2>
                        <div className='flex items-center gap-3 mt-4  '>
                            <div className='flex items-center gap-[3px]   '> <p className='mt-2  '>*</p> <p className='font-bold '>100 lectures</p></div>
                            <div className='flex items-center gap-[3px] '> <p className='mt-2 '>*</p> <p className=' '>10h total length</p></div>
                        </div>

                        <div className="border-2 ">
                            {
                                [...Array(5)].map((a, index) => {
                                    return (
                                        <AccordionComponent key={index} data={index}></AccordionComponent>
                                    )
                                })
                            }
                        </div>
                    </section>

                    {/* RAting section  */}
                    <div className='mt-8'>
                        <RatingSection></RatingSection>
                    </div>
                    {/* more courses by this person */}
                    <section className='mt-8'>
                        <MoreCourses></MoreCourses>
                    </section>

                </div>
                <div className=' lg:block hidden'>
                <CourseDetailsCard footerRelated={isFooterVisible}></CourseDetailsCard>
                </div>

            </div>
          {/* ------popup video palyer---- */}
        {
       isOpen ? <ProModal/> : ModalOpenClose.ModalisOpen ? <VideopoPup/>: ''
        }
          {/* ------popup video palyer---- */}
          {/* ----subscription modal---- */}

          {/* ----subscription modal---- */}
        </div>
    );
};

export default CourseDetails;