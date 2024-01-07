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

const Blogs: BlogItem[] = [
  {
    img: "/assets/bd.png",
    date: "12th May 2023",
    title: "Mapping Bangladesh's Political Crisis | Crisis Group",
    description:
      "Tortor neque sed tellus est eget dui id ante tristique tristique dolor.",
    author: "Admin",
    id: "1",
  },
  {
    img: "/assets/india.png",
    date: "21th Aug 2023",
    title: "The Changing Landscape of Indian Politics | South Asia Journal",
    description:
      "The noted Indian historian Ramchandra Guha, has recently suggested that the Nehru-Gandhi family members must leave the Indian National Congress (INC)",
    author: "Admin",
    id: "2",
  },
  {
    img: "/assets/africa.jpg",
    date: "01 Oct 2023",
    title: "The moral bankruptcy in African politics | This is Africa",
    description:
      "The ineptitude of African governments and regimes to provide their citizens basic and essential services i.e. public safety",
    author: "Admin",
    id: "3",
  },
];

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
        setUserData(allData);
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
        {userData?.map((blog, index) => (
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
