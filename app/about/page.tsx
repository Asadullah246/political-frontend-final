"use client";
import AboutBlogs from "@/components/about us/AboutBlogs";
import CourseNews from "@/components/about us/CourseNews";
import OurAims from "@/components/about us/OurAims";
import AboutUSForm from "@/components/about us/aboutUSForm";
import Hero from "@/components/shared/Pagehero";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/shared/Footer";

const AboutUs: React.FC = () => {
  return (
    <div>
      <ToastContainer />
      <Hero title="About us" subtext="About us" />
      <div className=" px-6 md:px-0">
        <div className="mt-20">
          <OurAims></OurAims>
        </div>
        <div className="mt-28 ">
          <CourseNews></CourseNews>
        </div>
        <div className="mt-28 mb-16  ">
          <AboutBlogs></AboutBlogs>
        </div>
        <div className="mt-10 mb-10  container">
          <AboutUSForm></AboutUSForm>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
