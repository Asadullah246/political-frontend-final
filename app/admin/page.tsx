"use client";

import NewQuiz from "@/components/admin/PolitiQTest/NewQuiz";
import PolitTestPage from "@/components/admin/PolitiQTest/PolitTestPage";
import FaqManage from "@/components/admin/faq/FaqManage";
// import WebsiteInfoPage from "@/components/admin/news/WebsiteInfoPage";
import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogPage from "@/components/admin/blog/BlogPage";
import TalentPage from "@/components/admin/talent/FaqManage";
import ContactManage from "@/components/admin/contacts/FaqManage";
import WebsiteInfoPage from "@/components/admin/websiteInfo/WebsiteInfoPage";
import TestPage from "@/components/admin/testimonial/FaqManage";

const Page = () => {
  const [current, setCurrent] = useState("Contacts");
  const tabs = [
    { label: "Website Info", icon: "website-icon" },
    { label: "Politiq Test", icon: "politiq-icon" },
    { label: "FAQ", icon: "faq-icon" },
    { label: "Blogs", icon: "blogs-icon" },
    { label: "Political Talents", icon: "political-talents-icon" },
    { label: "Contacts", icon: "testimonials-icon" },
    { label: "Testimonials", icon: "testimonials-icon" },
    { label: "News", icon: "news-icon" },
  ];

  const tabmanage = (text: string) => {
    switch (text) {
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
      case "Contacts":
        return <ContactManage />;

      default:
        return <WebsiteInfoPage />;
    }
  };
  return (
    <div>
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
          <ul className="menu p-4 py-2  w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="py-2 px-4 flex gap-2 items-center">
              <Image
                src="/assets/profilephoto.jpg"
                className="rounded-[50%]"
                height={40}
                width={40}
                alt="user"
              />
              <div>
                <h4 className="text-lg leading-3 ">Asad</h4>
                <small>asad@email.com</small>
              </div>
            </div>
            {tabs?.map((t, index) => {
              return (
                <li key={index} onClick={() => setCurrent(t?.label)}>
                  <a className={t?.label == current ? "text-blue-400" : ""}>
                    {t?.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
