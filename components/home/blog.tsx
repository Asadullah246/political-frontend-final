"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import SectionTittle from "../sectionTittle";
import SingelBlog from "./singelBlog";
import axios from "axios";
import { base } from "../shared/apis/api";

interface BlogItem {
  img: string;
  date: string;
  title: string;
  description: string;
  author: string;
  id: string;
}



const Blog: React.FC = () => {
  const [currentData, setCurrentData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userData, setUserData] = useState();
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios.get(`${base}/api/v1/blogs`).then((res) => {
      //   console.log("users in politic", res);
      if (res?.data?.status === "success") {
        const allData = res?.data?.data;
        // console.log("allData", allData);
        //   const filtered=allData?.filter(a=>!(a?.archived)==true)
        setUserData(allData?.reverse());
        // setUserData(res?.data?.data);
      }
    });
  }, [refresh]);
  useEffect(() => {
    axios
      .get(`${base}/api/v1/blogs`)
      .then((res) => {
        // console.log("response", res.data.data);
        if (res.data.status === "success") {
          setUserData(res?.data?.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className=" mt-[120px]">
      <SectionTittle title="BLOGS" description="Read latest blogs" span="" />
      <div className="px-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {userData?.slice(0,3)?.map((blog, index) => (
          <SingelBlog
            img={blog.img}
            date={blog.date}
            description={blog.description}
            title={blog.title}
            author={blog.author}
            id={blog.id}
            key={index}
          />
        ))}

      </div>
    </div>
  );
};

export default Blog;
