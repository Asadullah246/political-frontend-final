/* eslint-disable react/no-unescaped-entities */

"use client"

import { ArrowLeft, ArrowRight, Factory, GridIcon, Plane, Stethoscope } from 'lucide-react';
import SwiperCore, { A11y, Autoplay, EffectFade, Navigation, Zoom } from 'swiper';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/zoom/zoom.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Button } from '../ui/button';
import HeroCard from "./hero-card";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();
SwiperCore.use([Navigation, EffectFade, Zoom,Autoplay,A11y]);


interface SliderTextItem {
    image: string;
    id: number;
}

interface HeroCardTextItem {
    id: number;
    heroTitle: string;
    heroDescription: string;
    icon: any;
}

const SliderText: SliderTextItem[] = [
    {
        image:'/assets/slide.jpg',
        id:1,
    },{
        image:'/assets/slide1.jpg',
        id:2
    }
]
const HeroCardText: HeroCardTextItem[] = [
    {
        id:1,
        heroTitle:'Discover Your Political Destiny ',
        heroDescription:"Are you an aspiring political leader with a vision for change? Or a constituency seeking a visionary representative who shares your values? ",
        icon:Stethoscope
    },{
        id:2,
        heroTitle:"Unleash Your Potential",
        heroDescription:"We believe that every political talent has the power to make a difference. That's why we offer comprehensive training, mentorship programs",
        icon:Factory

    },{
        id:3,
        heroTitle:'Beyond Boundaries',
        heroDescription:"Diversification and Innovation: We are not just a political talent matchmaking platform; we are pioneers of innovation. Stay tuned as we expand our services ",
        icon:GridIcon

    },
    {
        id:4,
        heroTitle:'Join the Movement',
        heroDescription:"Are you ready to shape the future of politics? Join us today and be a part of a global movement towards effective representation",
        icon:Plane

    }
]
const Slider: React.FC = () => {
    return(
      <div className='w-[100%] relative'>
        <Swiper

        effect='fade'
        slidesPerView={1}
        speed={1000}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        spaceBetween={1}
        zoom={true}
        className='w-full h-[100%] relative'
        loop={true}
        >
        {
            SliderText.map((text,index)=>(
             <SwiperSlide
              key={index}
             >
             <div style={{
                 backgroundImage :`url('${text.image}')`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                width:'100%',
                position:'relative',
                zIndex:1,

        }}
        className={`w-full relative `}
        >
            <div className=' absolute top-0 right-0 bottom-0 left-0 bg-black/60'>
            </div>
        <div className=' lg:pl-[150px] pl-[20px] relative lg:pt-[136px] pt-[100px] lg:pb-[225px] pb-[100px]'>
         <div className=' max-w-[1320px] py-[0px] px-[15px] m-[0px]  mx-[auto]'>
            <div className=' grid grid-cols-12'>
                 <h2 className=' text-white lg:font-[700] font-[600] lg:text-[55px] text-[35px] lg:leading-[1.1em] leading-[1.5em] mb-[16px] col-span-12'
                 data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="1500"
                 >

                    The Global Powerhous'e <br />
                    In Political <span className=' text-[#0D01E5]'>Talent</span> <br />
                    Matchmaking

                 </h2>
                 <p className=' text-white font-[400] text-[18px] leading-[32px] relative mb-[40px] col-span-12'
                 data-aos="fade-left"
                 data-aos-easing="linear"
                 data-aos-duration="1550"
                 >

                 We are revolutionizing the world of politics by

                 <br />
                 with forward-looking constituencies, paving the way for
                 </p>
                 <div className=' col-span-7'>
                 <Button className='relative z-[5] bg-[#FFC400] text-white rounded-[25px] p-[25px] text-[20px]'
                 data-aos="fade-up"
                 data-aos-duration="1600"
                 variant={'hover'}
                 >
                    Our Mission
                 </Button>
                 </div>
            </div>

         </div>
         </div>
        </div>
        {/* -------Contain Container---- */}
         {/* -----prev button and next button------ */}
             <div className='absolute w-[60px] h-[60px] bg-gray-500 text-white rounded-full hover:bg-[#FFC400] lg:flex justify-center items-center top-[50%] left-[5%] z-10 cursor-pointer hidden '
              onClick={()=>console.log('prev')}
             >
                 <ArrowLeft className=' w-7 h-5'/>
             </div>
             <div className='absolute w-[60px] h-[60px] bg-gray-500 text-white rounded-full hover:bg-[#FFC400] lg:flex justify-center items-center top-[50%] right-[5%] z-10 cursor-pointer hidden'
                onClick={()=>console.log('next')}
             >
                 <ArrowRight className=' w-7 h-5'/>
             </div>
         {/* -----prev button and next button------ */}
        {/*-------Main Slider------  */}
             </SwiperSlide>

            ))
        }
        {/*-------Main Slider------  */}

        {/* -------Contain Container---- */}

        </Swiper>

      
       <div className=' overflow-y-auto h-[100%]'>
       <div className=" lg:absolute static top-[85%] grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8 px-8 z-[2] pt-8 lg:pt-0"

data-aos="fade-up"
data-aos-duration="1500"
>
    {
           HeroCardText.map((text,index)=>(
               <HeroCard heroTitle={text.heroTitle} icon={text.icon} key={text.id} heroDescription={text.heroDescription}/>
           ))
    }

       </div>
       </div>
      </div>)
}

export default Slider;
