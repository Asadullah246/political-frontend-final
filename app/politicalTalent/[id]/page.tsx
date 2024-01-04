"use client"
import BasicInfo from "@/components/myprofile/basicInfo"
import Hero from "@/components/myprofile/hero"
import Loading from "@/components/shared/Loading"
import { baseUrl } from "@/store/Store"
import { PoliticalDataItem } from "@/store/types"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { FC, useEffect, useState } from "react"
interface Props {
    params:{
        id:string
    }
}
const PoliticalId:FC<Props> = ({
    params
}) => {
    const {isLoaded,isSignedIn} = useUser()
    const [userdata,setUserData] = useState<PoliticalDataItem>()
    useEffect(() => {
        const res = axios.get(`${baseUrl}/api/v1/user/singel/${params.id}`) 
        .then(res => {
            console.log(res)
            if(res.data.status==='success') {

                setUserData(res?.data?.data)
            }
        })
    },[params.id])
    if(!isLoaded || !isSignedIn) return <Loading/>
    return (
        <div className="pt-[90px]  pb-[50px]">
        <div className=" lg:w-[90%] lg:px-16 w-[100%] mx-auto px-[20px]">
        <Hero userImg={userdata?.image_url} fullName={userdata?.name} userdata={userdata} exits={false}/>
         <BasicInfo exits={false} userdata={userdata}/>
        </div>
        </div>
    )
};

export default PoliticalId;
