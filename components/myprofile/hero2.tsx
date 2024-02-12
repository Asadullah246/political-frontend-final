import { PoliticalDataItem } from "@/store/types";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { ToastSuccess, ToastError } from "../shared/Others";
import { activeAccount, base, updateProfileInfo } from "../shared/apis/api";
import axios from "axios";
import { baseUrl } from "@/store/Store";

interface HeroProps {
    userImg: string | undefined;
    fullName: string | undefined;
    userdata?: PoliticalDataItem;
    exits?: boolean;
    id?: string;
}
interface InfoType {
    name?: string;
    email?: string;
    image_url?: string;
    signingId?: string;
    address?: string;
    phone?: any;
    description?: string;
    city?: string;
    country?: string;
    skills?: string;
    experiences?: string;
    _id?: string;
    talent?: any;
    // Add other properties if needed
}
const Hero2 = ({
    userImg, fullName,
    userdata,
    exits
}: HeroProps) => {

    return (
        <>
            <div className="max-w-[1320px] pb-[50px]">
                <div className=" w-full  lg:h-[240px] grid grid-cols-12 lg:gap-12 gap-4">
                    {/* ------user img----- */}
                    <div className=" h-[100%] lg:col-span-3 col-span-5">
                        <img src={userImg}
                            alt={fullName ? fullName : 'user'}
                            className=' rounded-sm w-[100%] h-[100%]' />
                    </div>
                    {/* ------user img----- */}
                    {/* ------user info----- */}
                    <div className=" lg:col-span-9 col-span-7 h-full border-b">
                        <div className=" mb-[15px]">
                            <h2 className=" text-gray-600 text-[24px] uppercase">
                                {
                                    fullName ? fullName : 'User'
                                }
                            </h2>

                        </div>
                        <div className=" mb-[15px]">
                            <p className=" text-gray-500 uppercase font-[600]">
                                iq level
                            </p>
                            <div className=" flex gap-4 items-center">
                                <span className=" text-[20px] font-[600] text-gray-600">
                                    {
                                        exits ? `0` : userdata?.skill_rating
                                    }
                                </span>
                                <div className=" w-[60%] h-[7px] bg-gray-600 rounded-sm">
                                    <div className={` ${exits ? "w-[0%]" : `w-[${userdata?.skill_rating || 0 * 10}%]`} h-full bg-[#0D01E5] rounded-sm`}></div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>

    );
}

export default Hero2;
