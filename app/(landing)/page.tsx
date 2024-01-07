// app/theme-provider.tsx
"use client"
import { getCourses } from "@/actions/get-courses";
import { CoursesList } from "@/components/courses-list";
import AboutUs from "@/components/home/AboutUs";
import Testimonial from "@/components/home/Testimonial";
import Blog from "@/components/home/blog";
import Course from "@/components/home/course";
import Slider from "@/components/home/slider";
import Subscribe from "@/components/shared/Subscribe";
import { CourseMgmt, UserStore, baseUrl } from "@/store/Store";
import { useUser } from "@clerk/nextjs";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect } from "react";
import PloticalTalentPage from "../politicalTalent/page";
const HomePage: React.FC = () => {
  const {fetchUsers,setUser,allUser,setAllUser} = UserStore()
  const {allCourse,fetchAllCourse,courses} = CourseMgmt()

  const {user } = useUser();
  // if (!isLoaded || !isSignedIn) return null;
useEffect(() => {
  AOS.init({
    duration: 1000,
  });
 fetchUsers()
fetchAllCourse()
 const CreateUser = async () => {
  try {
    const data = {
      name: user?.fullName,
      email: user?.emailAddresses[0].emailAddress,
      skill_rating: 0,
      skill:[],
      courses:[],
      experiences:'',
      phone_number:'',
      address:'',
      description:'',
      image_url: user?.profileImageUrl,
      country:'',
      tittle:''
    }

    // const res = await axios.post("http://localhost:5000/api/v1/user/create", data);
    const res = await axios.post(`${baseUrl}/api/v1/user/create`, data);

    if(res.data.status === 'success'){
      setUser(res?.data?.data)
      setAllUser([...allUser,res?.data?.data])
    }
  } catch (error) {
  }
}
CreateUser()
}, []);
 const getCourses1 = async () => {
  const courses = await getCourses({
    userId: 'user_2UnjdB9NxMgN9YxI7aDtRQCyd64',
    title: 'dashboard/search',
    categoryId: '',
  });
  return courses
 }
 useEffect(() => {
  getCourses1()
  .then(res => {
    // console.log(res,'hello')
  })
  .catch(err => {
    // console.log(err,'hello')
  })
 }, [])
//  console.log('hello')
  return (
     <div>
      {/* ----user home page----- */}


      <div className="w-full ">
      <Slider/>
      </div>

      <div className=" bg-[#F9F9F9] lg:h-[50vh]">
        {/* <PloticalTalentPage/> */}
      </div>
       {/* ----user home page----- */}
      <AboutUs/>
      {/* <CoursesList items={courses} /> */}
      <Testimonial/>
      <Blog/>
     <div className="mt-12">
     <Subscribe/>
     </div>
     </div>
  )
}
export default HomePage ;

