"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reviewImg3 from "../../public/assets/testimonial-v1-1 (1).jpg";
import reviewImg1 from "../../public/assets/testimonial-v1-1.jpg";
import reviewImg2 from "../../public/assets/testimonial-v1-2.jpg";
import styles from "../../styles/home.module.css";
import SectionTittle from "../sectionTittle";
import axios from "axios";
import { base, getTest } from "../shared/apis/api";
import { ToastError, ToastSuccess } from "../shared/Others";

// interface YourComponentProps {
//     deviceType?: string; // Define the prop with optional type
// }

interface ReviewItem {
  _id: number;
  name: string;
  rating: number;
  image: any;
  designation: string;
  comment: string;
}

const Testimonial: React.FC = () => {
  const reviews: ReviewItem[] = [
    {
      _id: 1,
      name: "Robert",
      rating: 5,
      image: reviewImg1,
      designation: "politician",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias odio deleniti corrupti fugiat perferendis accusantium, officiis temporibus consequuntur reiciendis culpa.",
    },
    {
      _id: 2,
      name: "James",
      rating: 4,
      image: reviewImg2,
      designation: "politician",
      comment:
        " adipisicing elit. Alias odio deleniti corrupti fugiat perferendis accusantium, officiis temporibus consequuntur reiciendis culpa.",
    },
    {
      _id: 3,
      name: "James",
      rating: 3,
      image: reviewImg3,
      designation: "politician",
      comment:
        "  perferendis accusantium, officiis temporibus consequuntur reiciendis culpa adipisicing elit. Alias odio deleniti corrupti fugiat.",
    },
    {
      _id: 4,
      name: "David",
      rating: 3,
      image: reviewImg2,
      designation: "politician",
      comment:
        "  perferendis accusantium, officiis temporibus consequuntur reiciendis culpa adipisicing elit. Alias odio deleniti corrupti fugiat.",
    },
    {
      _id: 5,
      name: "Michael",
      rating: 2,
      image: reviewImg3,
      designation: "politician",
      comment:
        "   accusantium, officiis temporibus consequuntur reiciendis culpa adipisicing elit. Alias odio deleniti corrupti fugiat.",
    },
  ];

  // console.log("reviews", reviews);

  const [userData, setUserData] = useState();
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios.get(`${base}/api/v1/testimonial`).then((res) => {
      //   console.log("users in politic", res);
      if (res?.data?.status === "success") {
        const allData = res?.data?.data;
        //   const filtered=allData?.filter(a=>!(a?.archived)==true)
        setUserData(allData);
        // setUserData(res?.data?.data);
      }
    });
  }, [refresh]);

  console.log("Test data", userData);

  if (!userData || userData?.length === 0) {
    // Handle case when there's no data
    // return <NoDataMessage />;
    return <p>No data found</p>
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="bg-white mt-[120px]  ">
      <div className="container">
        {/* <div className='text-center '>
                <h5 className='text-[#FFC400] font-bold mx-auto text-center '>TESTIMONIALS</h5>
                <h2 className='text-center mt-4 text-[40px] font-[700] leading-[50px]'>We are Very Glad to Get <br />
                People Review
                </h2>

            </div> */}

        <div className="mt-12 ">
          <SectionTittle
            title="TESTIMONIALS"
            description="We are Very Glad to Get "
            span="People Review"
          />
          <div className="">
            <Carousel
              swipeable={false}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all 2s"
              transitionDuration={1500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              // removeArrowOnDeviceType={}
              // deviceType={"desktop" ||"mobile" }
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {userData?.map((r, index) => {
                return (
                  <div
                    key={r._id}
                    className="mx-6 relative  "
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div
                      className={`bg-white min-h-[200px] shadow-lg   p-8 ${styles.carouselDiv}`}
                    >
                      <div className="flex items-center">
                        {[...Array(5)].map((a, index) => {
                          return (
                            <Star
                              key={index}
                              size={16}
                              strokeWidth={1.5}
                              className={`text-[#FFC400]  ${
                                r?.rating >= index + 1
                                  ? "fill-[#FFC400]"
                                  : "fill-transparent"
                              }`}
                            />
                          );
                        })}
                      </div>
                      <p className="mt-4 ">{r?.description}</p>
                    </div>
                    <div className="ml-8 flex items-center mt-6 gap-4">
                      {r?.logoImage &&
                      <Image
                      src={`${base}${r?.logoImage}`}
                      alt={r?.name}
                      width={70}
                      height={70}
                      className="rounded-[50%]"
                    />
                      } 
                      {/* <Image
                        src={`${base}${r?.logoImage}`}
                        alt={r?.name}
                        width={70}
                        height={70}
                        className="rounded-[50%]"
                      /> */}
                      <div>
                        <h4 className="text-xl">{r?.name}</h4>
                        <p>{r?.designation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

// Testimonial.defaultProps = {
//     deviceType: 'desktop'
// };
