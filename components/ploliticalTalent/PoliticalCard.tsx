"use client"
import { Mail, MapPin } from "lucide-react";
import { Button } from "../ui/button";
// import PoliTicalData from "./data.tsx";
// import { UserStore } from "@/store/Store";
// import { PoliticalDataItem } from "@/store/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { base, getTalent } from "../shared/apis/api";
import axios from "axios";


const PoliticalCard = () => {
    const [talents, setTalents] = useState([])
    const [users, setUsers]=useState([])
    //    useEffect(() => {
    //     const fetchUsers=async()=>{
    //         const res= await getTalent()

    //         if(res.status=="success"){
    //            const allpeople=res?.data
    //            const filtered=allpeople?.filter(p=>p?.talent=="approved")
    //            setTalents(filtered)
    //         }
    //     }
    //     fetchUsers()
    //    },[])

    useEffect(() => {
        axios.get(`${base}/api/v1/talentperson`).then((res) => {
            //   console.log("users in politic", res);
            if (res?.data?.status === "success") {
                const allData = res?.data?.data
                const filtered = allData?.filter(a => a?.status == 2)
                setTalents(filtered)

            }
        });
    }, []);
    useEffect(() => {
        axios.get(`${base}/api/v1/user`).then((res) => {
            //   console.log("users in politic", res);
            if (res?.data?.status === "success") {
                const allData = res?.data?.data
                // const filtered = allData?.filter(a => a?.status == 2)
                setUsers(allData)

            }
        });
    }, []);

    // console.log("talent", talents);
    return (
        <div className=" w-[85%] mx-auto py-20 grid grid-cols-12 lg:gap-x-10">
            {
                talents?.map((item) =>{
                    const user=users?.find(u=>u?.signingId==item?.signingId)
                    return  (
                        <div className=" col-span-12 md:col-span-6 lg:col-span-4 min-h-[480px] relative w-full bg-gray-200 rounded-[20px] shadow-lg mb-8" key={item?._id}>
                            {/* ------cover photo----- */}
                            <div className={`h-[200px]`}>
                                <img src='/assets/politicalcover.jpg' className=" object-cover bg-no-repeat bg-cover w-full bg-center rounded-t-[20px] h-full" alt="" />
                            </div>
                            {/* ------cover photo----- */}
                            {/* -----profile picture----- */}
                            <div className={`absolute left-[33%] w-[120px] h-[120px] top-[25%]`}>
                                <img src={user?.image_url} className=" object-cover bg-no-repeat bg-cover bg-center  h-full w-full rounded-full" alt="" />
                            </div>
                            <div className=" h-[50px]"></div>
                            {/* -----profile picture----- */}
                            <div className=" text-center pb-6">
                                {/* -------user name---- */}
                                <h1 className=" text-2xl font-bold text-gray-700 uppercase">{
                                    user?.name
                                }</h1>
                                {/* -------user name---- */}
                                {/* -----user position----- */}
                                <p className=" text-gray-600 font-[400] text-[13px]">
                                    {
                                        user?.description || "No Bio Yet"
                                    }
                                </p>
                                {/* -----user position----- */}
                            </div>
                            <div className=" w-[70%] mx-auto">
                                <div className=" flex gap-x-8">
                                    <div className=" flex gap-x-2 items-center">
                                        <MapPin size={20} className=" text-gray-600" />
                                        <p className=" text-gray-600 font-[500]"> {
                                            user?.country || "No Country Yet"
                                        }</p>
                                    </div>
                                    <a href={`mailto:${user?.email}`} className=" flex gap-x-2 items-center cursor-pointer">
                                        <Mail size={20} className=" text-gray-600" />
                                        <p className=" text-gray-600 font-[500]"> Send Mail</p>
                                    </a>
                                </div>
                            </div>
                            <div className=" absolute bottom-0 w-full">
                                <Link href={`/politicalTalent/${item?.signingId}`}>
                                    <Button className="relative z-[5] w-full rounded-b-[20px] rounded-t-none text-[16px] font-[500] h-[50px] text-gray-700">
                                        View Profile
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )
                }

                )
            }
        </div>
    );
};

export default PoliticalCard;
