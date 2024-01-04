"use client"
import AboutBlogs from '@/components/about us/AboutBlogs';
import CourseNews from '@/components/about us/CourseNews';
import OurAims from '@/components/about us/OurAims';
import Hero from '@/components/shared/Pagehero';
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div>
            <Hero
            title="About us" subtext='About us' />
             <div className=' px-6 md:px-0'>
             <div className='mt-20'>
                <OurAims></OurAims>
            </div>
            <div className='mt-28 '>
                <CourseNews></CourseNews>
            </div>
            <div className='mt-28 mb-24  '>
                <AboutBlogs></AboutBlogs>
            </div>
             </div>

        </div>
    );
};

export default AboutUs;