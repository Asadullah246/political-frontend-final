"use client";

import NewQuiz from "@/components/admin/PolitiQTest/NewQuiz";
import PolitTestPage from "@/components/admin/PolitiQTest/PolitTestPage";
import FaqManage from "@/components/admin/faq/FaqManage";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogPage from "@/components/admin/blog/BlogPage";
import TalentPage from "@/components/admin/talent/FaqManage";
import ContactManage from "@/components/admin/contacts/FaqManage";
import WebsiteInfoPage from "@/components/admin/websiteInfo/WebsiteInfoPage";
import TestPage from "@/components/admin/testimonial/FaqManage";
import NewsLetterManage from "@/components/admin/subscribe/FaqManage";
import { checkLogin } from "@/components/shared/apis/api";
import { ToastSuccess,ToastError } from "@/components/shared/Others";
import { usePathname, useRouter } from "next/navigation";
import Adminmange from "@/components/admin/admins/BlogPage";
import MentorManage from "@/components/admin/mentor/FaqManage";
import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";
import { FaCircleInfo } from "react-icons/fa6";
import { PiExamThin } from "react-icons/pi";
import { FcFaq } from "react-icons/fc";
import { FaBlogger } from "react-icons/fa";
import { SiGenius } from "react-icons/si";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { TiContacts } from "react-icons/ti";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";





const Page = () => {
  const router = useRouter();
  const [admin,setAdmin]=useState()
  useEffect(()=>{
    const usercheking =async()=>{
      const cAdmin=JSON.parse(localStorage?.getItem("admin") || JSON.stringify({}))
      console.log("admin", cAdmin)
      if(cAdmin){
        const body={
          email:cAdmin?.email,
          password:cAdmin?.password,
        }
        const res = await checkLogin(body)


        if (res?.status === 'success') {
          setAdmin(cAdmin)
        } else {
          ToastError(res?.message || 'Something error');
          router.push("/adminlogin")
        }
      }
      else {
        ToastError('Something error');
          router.push("/adminlogin")
      }
    }

    usercheking()

  },[router])

  const [current, setCurrent] = useState("Website Info");
  const tabs = [
    { label: "Website Info", icon: <FaCircleInfo /> },
    { label: "Politiq Test", icon: <PiExamThin /> },
    { label: "FAQ", icon: <FcFaq /> },
    { label: "Blogs", icon: <FaBlogger /> },
    { label: "Political Talents", icon: <SiGenius/> },
    { label: "Mentors", icon: <PiChalkboardTeacherThin/> },
    { label: "Contacts", icon:<TiContacts/> },
    { label: "Testimonials", icon:<FaRegNoteSticky/> },
    { label: "NewsLetters", icon: <IoNewspaperOutline/> },
    { label: "Admins", icon: <MdAdminPanelSettings/> },
  ];

  const tabmanage = (text: string) => {
    switch (text) {
      case "Website Info":
        return <WebsiteInfoPage />;

      case "Politiq Test":
        return <PolitTestPage />;
      case "FAQ":
        return <FaqManage />;
      case "Blogs":
        return <BlogPage />;
      case "Testimonials":
        return <TestPage />;
      case "Political Talents":
        return <TalentPage />;
      case "Mentors":
        return <MentorManage />;
      case "Contacts":
        return <ContactManage />;
      case "NewsLetters":
        return <NewsLetterManage />;
      case "Admins":
        return <Adminmange />;
      case "Others":
        return <WebsiteInfoPage />;

      default:
        return <WebsiteInfoPage />;
    }
  };
  return (
    <div>
      <AdminNavbar />
      <ToastContainer />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* flex flex-col items-center justify-center */}
          {/* Page content here */}
          <div className="p-4">{tabmanage(current)}</div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 py-2  w-80 min-h-full text-gray-300 bg-[#671674] font-bold">
            {/* Sidebar content here */}
            <div className="py-2 px-4 mb-4  flex gap-2 items-center">
              {/* <Image
                src={`https://ui-avatars.com/api/?name=${admin?.email}&background=9935F9&color=fff`}

                className="rounded-[50%]"
                height={40}
                width={40}
                alt="user"
              /> */}
              <div>
                <h4 className="text-lg leading-3 ">User</h4>
                <small>{admin?.email}</small>
              </div>
            </div>
            {tabs?.map((t, index) => {
              return (
                <div key={index} onClick={() => setCurrent(t?.label)} className={` flex py-4 px-4 rounded-md cursor-pointer items-center gap-2 ${t?.label == current ? 'bg-[#163c74]':""}`}>
                  <a className={`${t?.label == current ? " text-gray-200 " : ""} text-[16px]`}>
                    {t?.label}
                  </a>
                  <p className={`${t?.label == current ? " text-gray-200" : "text-gray-300"}  text-[16px] font-bold`}>{t?.icon}</p>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
