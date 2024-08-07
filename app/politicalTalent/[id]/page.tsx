"use client"

import BasicInfo2 from "@/components/myprofile/basicInfo2"
import Hero2 from "@/components/myprofile/hero2"
import Navbar from "@/components/shared/Navbar"
import { base } from "@/components/shared/apis/api"
import axios from "axios"
import { FC, useEffect, useState } from "react"
import Footer from "@/components/shared/Footer";

interface Props {
    params: {
        id: string
    }
}
const PoliticalId: FC<Props> = ({
    params
}) => {

    console.log("param id ", params?.id)

    // const {isLoaded,isSignedIn} = useUser()
    const [userdata, setUserData] = useState()
    useEffect(() => {
        axios.get(`${base}/api/v1/user/${params?.id}`)
            .then(res => {
                console.log("sing", res?.data?.data)
                if (res.data.status === 'success') {

                    setUserData(res?.data?.data)
                }
            })
    }, [params?.id])

    // if(!isLoaded || !isSignedIn) return <Loading/>
    return (
        <div>
            <Navbar />
            <div className="pt-[90px]  pb-[50px]">
                <div className=" lg:w-[90%] lg:px-16 w-[100%] mx-auto px-[20px]">
                    <Hero2 userImg={userdata?.image_url} fullName={userdata?.name} userdata={userdata} exits={false} />
                    <BasicInfo2 exits={false} userdata={userdata} />
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default PoliticalId;
