"use client"

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Pagehero";
import React from "react";
import { image } from "../../../components/assets/OIP.jpg";
import CommentForm from "@/components/form/commentForm";

const BlogDetails = () => {
  return (
    <div>
      <Navbar />
      <Hero title="Blog" subtext="Blog" />
      <div className="container">
        {/* main blog */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <img
              src={image}
              alt="Image Description"
              className="w-full h-auto"
            />
            <h2 className="text-2xl font-bold mt-2">Post Title Here</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              tenetur nisi dolor cupiditate nostrum placeat corporis reiciendis
              quas adipisci icta ab exercitationem, minus laborum aliquid.
              Recusandae.
            </p>
            {/* comments */}
            <h3 className="text-xl font-semibold mt-10">3 comments</h3>
            <div>
              <div className="flex mt-8">
                <img
                  src="../../../components/assets/OIP.jpg"
                  alt="user profile imgage"
                />
                <div className="pr-8 mt-">
                  {/* user profile name below in (Orin) */}
                  <p className="text-gray-600">Orin</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, sapiente.
                  </p>
                </div>
               <hr />
              </div>
              <div className="flex mt-8">
                <img
                  src="../../../components/assets/OIP.jpg"
                  alt="user profile imgage"
                />
                <div className="pr-8 mt-">
                  {/* user profile name below in (Orin) */}
                  <p className="text-gray-600">Orin</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, sapiente.
                  </p>
                </div>
               <hr />
              </div>
              <div className="flex mt-8">
                <img
                  src="../../../components/assets/OIP.jpg"
                  alt="user profile imgage"
                />
                <div className="pr-8 mt-">
                  {/* user profile name below in (Orin) */}
                  <p className="text-gray-600">Orin</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, sapiente.
                  </p>
                </div>
               <hr />
              </div>
            </div>
            <CommentForm/>
          </div>
          {/*  Recent post  */}
          <div className="col-span-4 shadow-md p-4 rounded-md">
            <h3 className="text-xl font-semibold">Recent Post</h3>
            <div className="flex items-center mt-10">
              <img src="../../../components/assets/OIP.jpg" alt="imgage" />
              <p className="text-gray-600 ps-4 mr-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt tenetur nisi dolor cupiditate nostrum placeat corporis
                reiciendis quas adipisci icta ab exercitationem, minus laborum
                aliquid. Recusandae.
              </p>
            </div>
            <div className="flex items-center mt-10">
              <img src="../../../components/assets/OIP.jpg" alt="imgage" />
              <p className="text-gray-600 ps-4 mr-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt tenetur nisi dolor cupiditate nostrum placeat corporis
                reiciendis quas adipisci icta ab exercitationem, minus laborum
                aliquid. Recusandae.
              </p>
            </div>
            <div className="flex items-center mt-10">
              <img src="../../../components/assets/OIP.jpg" alt="imgage" />
              <p className="text-gray-600 ps-4 mr-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt tenetur nisi dolor cupiditate nostrum placeat corporis
                reiciendis quas adipisci icta ab exercitationem, minus laborum
                aliquid. Recusandae.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
