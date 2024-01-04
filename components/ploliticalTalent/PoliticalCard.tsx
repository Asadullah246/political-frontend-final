"use client"
import { Mail, MapPin } from "lucide-react";
import { Button } from "../ui/button";
// import PoliTicalData from "./data.tsx";
import { UserStore } from "@/store/Store";
import { PoliticalDataItem } from "@/store/types";
import Link from "next/link";
import { useEffect } from "react";


const PoliticalCard = () => {
   const {allUser,fetchUsers} = UserStore()
   useEffect(() => {
    fetchUsers()
   },[])
 const typeData:PoliticalDataItem[] = allUser
    return (
        <div className=" w-[85%] mx-auto py-20 grid grid-cols-12 lg:gap-x-10">
             {
                typeData.map((item) =>
                (
                <div className=" col-span-12 md:col-span-6 lg:col-span-4 min-h-[480px] relative w-full bg-gray-200 rounded-[20px] shadow-lg mb-8" key={item._id}>
                {/* ------cover photo----- */}
                <div className={`h-[200px]`}>
                    <img src='/assets/politicalcover.jpg' className=" object-cover bg-no-repeat bg-cover w-full bg-center rounded-t-[20px] h-full" alt="" />
                </div>
                {/* ------cover photo----- */}
                {/* -----profile picture----- */}
                <div className={`absolute left-[33%] w-[120px] h-[120px] top-[25%]`}>
                    <img src={item?.image_url} className=" object-cover bg-no-repeat bg-cover bg-center  h-full w-full rounded-full" alt="" />
                </div>
                <div className=" h-[50px]"></div>
                {/* -----profile picture----- */}
                <div className=" text-center pb-6">
                       {/* -------user name---- */}
                          <h1 className=" text-2xl font-bold text-gray-700 uppercase">{
                                item.name
                          }</h1>
                       {/* -------user name---- */}
                       {/* -----user position----- */}
                       <p className=" text-gray-600 font-[400] text-[13px]">
                       {
                        item.description || "No Bio Yet"
                       }
                       </p>
                       {/* -----user position----- */}
                </div>
                <div className=" w-[70%] mx-auto">
                      <div className=" flex gap-x-8">
                            <div className=" flex gap-x-2 items-center">
                                 <MapPin size={20} className=" text-gray-600"/>
                                 <p className=" text-gray-600 font-[500]"> {
                                    item.country || "No Country Yet"
                                 }</p>
                            </div>
                            <a href={`mailto: ${item.email}`} className=" flex gap-x-2 items-center cursor-pointer">
                                 <Mail size={20} className=" text-gray-600"/>
                                 <p className=" text-gray-600 font-[500]"> Send Mail</p>
                            </a>
                      </div>
                </div>
                <div className=" absolute bottom-0 w-full">
                    <Link href={`/politicalTalent/${item._id}`}>
                    <Button  className="relative z-[5] w-full rounded-b-[20px] rounded-t-none text-[16px] font-[500] h-[50px] text-gray-700">
                        View Profile
                    </Button>
                    </Link>
                </div>
            </div>
               )
                )
            }
        </div>
    );
};

export default PoliticalCard;
