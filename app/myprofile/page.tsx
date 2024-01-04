"use client"
import BasicInfo from "@/components/myprofile/basicInfo"
import Hero from "@/components/myprofile/hero"
import Loading from "@/components/shared/Loading"
import { useUser } from "@clerk/nextjs"

const ProfilePage: React.FC = () => {
    const {isLoaded,isSignedIn,user} = useUser()
    if(!isLoaded || !isSignedIn) return <Loading/>
    return (
        <div className="pt-[90px]  pb-[50px]">
        <div className=" lg:w-[90%] lg:px-16 w-[100%] mx-auto px-[20px]">
        <Hero userImg={user?.profileImageUrl} fullName={user?.fullName || undefined}/>
         <BasicInfo exits={true} />
        </div>
        </div>
    )
}

export default ProfilePage
