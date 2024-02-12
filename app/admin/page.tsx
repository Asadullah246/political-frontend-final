"use client";

import NewQuiz from "@/components/admin/PolitiQTest/NewQuiz";
import PolitTestPage from "@/components/admin/PolitiQTest/PolitTestPage";
import FaqManage from "@/components/admin/faq/FaqManage";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogPage from "@/components/admin/blog/BlogPage";
// import TalentPage from "@/components/admin/talent/FaqManage";
import ContactManage from "@/components/admin/contacts/FaqManage";
import WebsiteInfoPage from "@/components/admin/websiteInfo/WebsiteInfoPage";
import TestPage from "@/components/admin/testimonial/FaqManage";
import NewsLetterManage from "@/components/admin/subscribe/FaqManage";
import { checkLogin } from "@/components/shared/apis/api";
import { ToastSuccess, ToastError } from "@/components/shared/Others";
import { usePathname, useRouter } from "next/navigation";
import Adminmange from "@/components/admin/admins/BlogPage";
// import MentorManage from "@/components/admin/mentor/FaqManage";
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
import Experienced from "@/components/admin/experiencedPolitician/FaqManage";
import OrganizationManage from "@/components/admin/organization/FaqManage";
import ConstituenlyManage from "@/components/admin/constituenly/FaqManage";
import TalentPage from "@/components/admin/talent/FaqManage";
import MentorManage from "@/components/admin/mentor/FaqManage";
import AllUserManage from "@/components/admin/allUser/FaqManage";
import OtherRequests from "@/components/admin/othersRequests/FaqManage";
import Courses from "@/components/admin/courses/FaqManage";





const Page = () => {
  const router = useRouter();
  const [admin, setAdmin] = useState("")
  const [current, setCurrent] = useState("Website Info");
  useEffect(() => {
    const usercheking = async () => {
      const cAdmin = JSON.parse(localStorage?.getItem("admin"))

      if (cAdmin) {
        const body = {
          email: cAdmin?.email,
          password: cAdmin?.password,
        }
        const res = await checkLogin(body)


        if (res?.status === 'success') {
          console.log("res is ", res)
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

  }, [router])

console.log("amdin is ", admin ) 

  if (!admin || admin==undefined || admin=="" ) {
    return <h3 className="text-center font-semibold text-blue-400 mt-20 ">Loading Dashboard</h3>
  }

  const tabs = [
    { label: "Website Info", icon: <FaCircleInfo /> },
    { label: "Courses", icon: <FaCircleInfo /> },
    { label: "Political Talents", icon: <SiGenius /> },
    { label: "Mentors", icon: <PiChalkboardTeacherThin /> },
    { label: "Experienced Political", icon: <FaBlogger /> },
    { label: "organizations", icon: <PiChalkboardTeacherThin /> },
    { label: "Constituenly", icon: <IoNewspaperOutline /> },
    { label: "Others Requests", icon: <IoNewspaperOutline /> },
    { label: "All User", icon: <MdAdminPanelSettings /> },
    { label: "Politiq Test", icon: <PiExamThin /> },
    { label: "FAQ", icon: <FcFaq /> },
    { label: "Blogs", icon: <FaBlogger /> },
    { label: "Contacts", icon: <TiContacts /> },
    { label: "Testimonials", icon: <FaRegNoteSticky /> },
    { label: "NewsLetters", icon: <IoNewspaperOutline /> },
    { label: "Dashboard Access", icon: <MdAdminPanelSettings /> },
  ];
  const tabsSales = [
    // { label: "Website Info", icon: <FaCircleInfo /> },
    { label: "Political Talents", icon: <SiGenius /> },
    { label: "Mentors", icon: <PiChalkboardTeacherThin /> },
    { label: "Experienced Political", icon: <FaBlogger /> },
    { label: "organizations", icon: <PiChalkboardTeacherThin /> },
    { label: "Constituenly", icon: <IoNewspaperOutline /> },
    { label: "Others Requests", icon: <IoNewspaperOutline /> },
    // { label: "All User", icon: <MdAdminPanelSettings/> },
    // { label: "Politiq Test", icon: <PiExamThin /> },
    // { label: "FAQ", icon: <FcFaq /> },
    // { label: "Blogs", icon: <FaBlogger /> },
    { label: "Contacts", icon: <TiContacts /> },
    { label: "Testimonials", icon: <FaRegNoteSticky /> },
    { label: "NewsLetters", icon: <IoNewspaperOutline /> },
    // { label: "Dashboard Access", icon: <MdAdminPanelSettings/> },
  ];

  const tabmanage = (text: string) => {
    switch (text) {
      case "Website Info":
        return <WebsiteInfoPage />;
      case "Courses":
        return <Courses />;

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
      case "Experienced Political":
        return <Experienced />;
      case "organizations":
        return <OrganizationManage />;
      case "Constituenly":
        return <ConstituenlyManage />;
      case "Others Requests":
        return <OtherRequests />;
      case "All User":
        return <AllUserManage />;
      case "Contacts":
        return <ContactManage />;
      case "NewsLetters":
        return <NewsLetterManage />;
      case "Dashboard Access":
        return <Adminmange />;
      case "Others":
        return <WebsiteInfoPage />;

      default:
        return <WebsiteInfoPage />;
    }
  };

  const logout = () => {
    localStorage.removeItem("admin")
    router.push("/")

  }

  return (
    <div>
      <AdminNavbar admin={admin} />
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
            {(admin?.role=="admin"? tabs : tabsSales)?.map((t, index) => {
            {/* {tabs?.map((t, index) => { */}

              return (
                <div key={index} onClick={() => setCurrent(t?.label)} className={` flex py-4 px-4 rounded-md cursor-pointer items-center gap-2 ${t?.label == current ? 'bg-[#163c74]' : ""}`}>
                  <a className={`${t?.label == current ? " text-gray-200 " : ""} text-[16px]`}>
                    {t?.label}
                  </a>
                  <p className={`${t?.label == current ? " text-gray-200" : "text-gray-300"}  text-[16px] font-bold`}>{t?.icon}</p>
                </div>
              );
            })}

            <div onClick={logout} className={` flex py-4 px-4 rounded-md cursor-pointer items-center gap-2 `}>
              <a className={`text-[16px]`}>
                Log Out
              </a>
              <p className={`  text-[16px] font-bold`}><FaRegNoteSticky /></p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
