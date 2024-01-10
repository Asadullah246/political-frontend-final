"use client"

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Pagehero";
import React, { useState, useEffect } from "react";
// import { image } from "../../../components/assets/OIP.jpg";
import CommentForm from "@/components/form/commentForm";
import axios from "axios";
import { base } from "@/components/shared/apis/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogDetails = ({ params }) => {

  const [info, setInfo] = useState()
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    if (params?.id) {
      axios.get(`${base}/api/v1/blogs/${params?.id}`)
        .then(data => {
          console.log("data", data?.data?.data)
          setInfo(data?.data?.data)
        })
        .catch(error => {
          console.log("err", error)
        })
    }

  }, [params?.id, refresh])

  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .get(`${base}/api/v1/blogs`)
      .then((res) => {
        console.log("response", res.data.data);
        if (res.data.status === "success") {
          setUserData(res?.data?.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [refresh]);
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Hero title="Blog" subtext="Blog Details" />
      <div className="container pb-14">
        {/* main blog */}
        <div className="grid grid-cols-12 gap-8 mt-12">
          <div className="col-span-12 lg:col-span-7">
            <img
              src={`${base}${info?.logoImage}`}
              alt="Image Description"
              className="w-full h-auto"
            />
            <h2 className="text-2xl font-bold mt-12">{info?.title}</h2>
            <h2 className="text-2xl font-bold mt-12">Description</h2>
            <p className="text-gray-600 mt-6">
              {info?.description}
            </p>
            {/* comments */}
            <h3 className="text-xl font-semibold mt-12">{info?.comments?.length || "0"} comments</h3>
            <div>

              {
                info?.comments?.map(s => {
                  return (
                    <div key={s?._id}>
                      <div className="flex mt-8 gap-4 ">
                        <img
                          src={`https://ui-avatars.com/api/?name=${s?.name}&background=9935F9&color=fff`}
                          alt="user"
                          className="h-12 w-12 rounded-[50%]  "
                        />

                        <div className="pr-8 mt-">
                          {/* user profile name below in (Orin) */}
                          <p className="text-gray-600">{s?.name}</p>
                          <p>
                            {s?.email}
                          </p>
                        </div>
                        <hr />
                      </div>

                      <p className="mt-4">{s?.comment}</p>

                    </div>
                  )
                })
              }


            </div>
            <CommentForm info={info} refresh={refresh} setRefresh={setRefresh} />
          </div>
          {/*  Recent post  */}
          <div className="lg:col-span-1 hidden lg:block"></div>
          <div className="col-span-12 lg:col-span-4 shadow-md p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-6">Recent Blogs</h3> 
            {
              userData?.reverse()?.slice(0,5)?.map(r=>{
                return (
               <a href={`blog/${r?._id}`} key={r?._id} className=" mt-10" >
                   <div  className="flex items-start gap-4">
                  <img src={`${base}${info?.logoImage}`} className="w-12 h-auto " alt="image" />
                  <p className="text-gray-600 ps-4 mr-16">
                   {r?.title}
                  </p>
                </div>
                <p className="mt-4 ">{r?.description?.slice(0,30)}</p>
               </a>
                )
              })
            }


          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogDetails;
