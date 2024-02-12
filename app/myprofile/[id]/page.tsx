"use client"
import BasicInfo from "@/components/myprofile/basicInfo"
import Hero from "@/components/myprofile/hero"
import Loading from "@/components/shared/Loading"
import { useUser } from "@clerk/nextjs"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/shared/Footer";
import { useEffect } from "react"


const ProfilePage: React.FC = () => {

    // console.log("authd", auth()  );
    // const {userId}=auth()

    useEffect(() => {
        const sectionToScrollTo = document.getElementById('fiveButtons');
        if (sectionToScrollTo) {
          sectionToScrollTo.scrollIntoView({ behavior: 'smooth' });
        }
      }, []);
    const {isLoaded,isSignedIn,user} = useUser()
    console.log("user", user)
    if(!isLoaded || !isSignedIn) return <Loading/>

    return (
       <>
         <ToastContainer
        />
        <div className="pt-[90px]  pb-[50px]">
        <div className=" lg:w-[90%] lg:px-16 w-[100%] mx-auto px-[20px]">
        <Hero userImg={user?.profileImageUrl} userdata={user} fullName={user?.fullName || undefined}  id={user?.id}/>
         <BasicInfo exits={true}  userdata={user}  id={user?.id} />
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default ProfilePage
