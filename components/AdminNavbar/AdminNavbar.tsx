import React, { useState } from 'react';
import logo from '../../public/logo.png'
import Image from 'next/image';
import {TfiAlignLeft } from 'react-icons/tfi'
import { IoIosNotificationsOutline } from "react-icons/io";
const AdminNavbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <div className=' w-[100%] h-[80px] bg-white  top-0 shadow-md px-8 z-[1000] sticky py-3 rounded-md'>
            {/* Navbar container */}
            <div className=' flex justify-between items-center h-[100%] w-[100%]'>
                {/* --logo and text */}
                <div className=' flex gap-6 h-[100%] items-center'>
                     {/* <TfiAlignLeft className=' text-3xl cursor-pointer font-[900]' onClick={()=>setOpen(!open)} /> */}
                    <Image src={logo} alt="" className=' h-[60px]' />
                </div>
                {/* --logo and text */}
                {/* profile icon */}
                
                    <div className=' flex gap-4 items-center  shrink'>
                        <div className=' flex gap-4 items-center'>
                           <div className=' relative h-[100%]'>
                           <IoIosNotificationsOutline className=' text-2xl cursor-pointer ' />
                            <span className=' absolute bottom-[90%] w-[6px] h-[6px] left-[9px] bg-[#FF0000] rounded-full'></span>
                            <div className=' w-[1px] h-[100%] bg-gray-700 absolute bottom-[10%] left-[30px]'></div>
                           </div>
                            <div className=' flex gap-3 items-center'>
                                <div className=' w-[40px] h-[40px] rounded-full bg-gray-800 flex items-center justify-center text-white'>img</div>
                            <h1 className=' text-[#333333] font-semibold text-sm'>Admin</h1>
                            </div>
                        </div>
                    </div>
                
                {/* profile icon */}
            </div>
            {/* Navbar container */}
        </div>
    );
};

export default AdminNavbar;