import React from 'react';
import Image from 'next/image'
import Link from "next/link"

interface NavHeader {
    page:string;
}

const NavigationHeader: React.FC<NavHeader>  = ({page,}) => {
    return (
        <div>
            <div className=' h-[400px] w-full relative'>
                <div
                    style={{
                        backgroundImage: `url(/assets/aboutbanner.jpg)`
                    }}
                    className=' h-full w-full bg-cover bg-center filter brightness-[25%]   '>
                    {/* <Image height={300} width={100}  src="/assets/aboutbanner.jpg" alt="" className='h-full w-full  ' /> */}

                </div>
                <div className='absolute h-full w-full top-0 left-0  flex justify-center items-center text-white '>
                   <div className='text-center'>
                   <h1 className='text-3xl font-bold mb-2'>{page}</h1>
                    <div className='flex items-center justify-center  gap-2 '>
                        <Link href="/">Home</Link>
                        <p>/</p>
                        <p className='text-primary1'>{page}</p>
                    </div>
                   </div>
                </div>

            </div>
        </div>
    );
};

export default NavigationHeader;
