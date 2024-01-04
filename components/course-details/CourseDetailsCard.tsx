"use client"
/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button';
import { useStore } from '@/hooks/useStore';
import { Accessibility, Clock, FileBadge, Play, Tv, Video } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface IData {
    isSticky?: number | undefined;
    footerRelated?: boolean;
}

const CourseDetailsCard: React.FC<IData> = ({ isSticky, footerRelated }) => {
    const ModalOpenClose = useStore()
    
    const [hight,setHight] = useState(
        typeof window !== 'undefined' && localStorage.getItem('scrollHeight') ? parseInt(localStorage.getItem('scrollHeight') as string, 10) : 0
    )
   
    const [width, setWidth] = useState(() => {  
        const storedWidth = typeof window !== 'undefined' && localStorage.getItem('width');
        return storedWidth ? parseInt(storedWidth, 10) : 0;
      });
      
      // Function to update the width
      const updateWidth = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
        // Store the new width in localStorage
        localStorage.setItem('width', newWidth.toString());
      };
     
      useEffect(() => {
        // Call updateWidth once when the component mounts
        updateWidth();
    
        // Attach the width listener to update the width when the window is resized
        window.addEventListener('resize', updateWidth);
    
        // Remove the width listener when the component unmounts
        return () => {
          window.removeEventListener('resize', updateWidth);
        };
      }, []); // Empty dependency array ensures this effect runs only once
    
    const updateScrollHeight = () => {
        const newScrollHeight = window.scrollY;
        setHight(newScrollHeight);
        // Store the new scrollHeight in localStorage
        localStorage.setItem('scrollHeight', newScrollHeight.toString());
      };
    useEffect(() => {
        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', updateScrollHeight);
        // Remove the scroll event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', updateScrollHeight);
        };
      }, []);
      const  [isMounted, setIsMounted] = useState(false)
      useEffect(() => {
          setIsMounted(true)
      },[])
      if (!isMounted) return null
    return (
        <div className={` mx-auto ${width>=1024?"w-[25vw]":`${ width<800?"w-[100vw]":"w-[50vw]"}`} bg-white text-black border-2 ${isSticky == 1 ? `fixed right-[10%] ${hight>=3000?"top-[0]":"top-[23%] "}` : isSticky == 2 ? "absolute  top-12 right-[10%]" : `${width>=1024?" !hidden":" block"}`} ${footerRelated ? " !block absolute  bottom-12  right-[10%]" : ""} `}>
          {hight<=1000 && <div className=' relative w-full'
              onClick={()=>ModalOpenClose.ModalonOpen()}
          >
           <img src="/assets/5.jpg" alt="" className='w-full h-[200px] z-[-1]' />
           {/* -----make animation button------ */}
            <div className=' absolute top-[35%] left-[40%] w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center cursor-pointer z-[8]  animation_button'>
                 <Play size={30} fill=' black '  />
            </div>
            <div className=' absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[3]'>
                
                </div>
           {/* -----make animation button------ */}
           </div>
               }
            <div className='px-4 py-5 '>
                <div className='flex items-center gap-3'>
                    <h3 className='text-3xl font-semibold tracking-wide '>$9.99</h3>
                    <del>$74.99</del>
                    <p>87% off</p>
                </div>
                <div className='flex items-center gap-4 mt-2 '>
                    <Clock color={"#b32d0f"} size={20} />
                    <p className='text-[#b32d0f]'><span className='font-bold'>4 days</span> left at this price</p>
                </div>
                {/* buttons  */}
                <div className='relative w-full overflow-hidden mt-6 '>
                    <Button className="relative z-[5] bg-[#FFC400] text-white rounded-none w-full text-lg font-bold   ">
                        Buy Now
                    </Button>
                    <Button className="relative z-[5] mt-4  bg-white border-2  text-black rounded-none w-full text-lg font-bold  hover:bg-gray-300  ">
                        Add To Cart
                    </Button>
                </div>

                {/* course content  */}
                <div className='mt-8'>
                    <p className='!font-bold mb-2'>
                        This course includes:
                    </p>
                    <div className='flex items-center gap-2 text-gray-500 mb-2'>
                        <Video size={20} />
                        <p>10 hours on-demand video</p>
                    </div>
                    <div className='flex items-center gap-2 text-gray-500 mb-2'>

                        <Accessibility size={20} />
                        <p>Life time access</p>
                    </div>
                    <div className='flex items-center gap-2 text-gray-500 mb-2'>
                        <FileBadge size={20} />
                        <p>100 articles</p>
                    </div>
                    <div className='flex items-center gap-2 text-gray-500 mb-2'>
                        <Tv size={20} />
                        <p>Access anywhere</p>
                    </div>

                </div>
            </div>
           
        </div>
    );
};

export default CourseDetailsCard;
