"use client"
import { Clock, Star, User } from "lucide-react";

interface Course {
    id: string,
    title: string,
    img: string,
    rating?: [],
    review: number,
    price: number | string,
    time?: [],
    student: number,
}


import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

const SingelCourse = ({ img, price, title, review,  student }: Course) => {
    const router = useRouter();
    const [totalTime, setTotalTime] = useState('')
    const navigateDetails=()=>{
        router.push('/course-details');
    }
//    const AvgRating  = rating?.map((a:any)=>a.rating).reduce((a,b)=>a+b,0)/rating?.length!! || 0

//   useEffect(() => {
//     let totalMinutes = 0;
//     time.forEach((item:any) => {
//         const parts = item?.length.split(' ');
//         for (let i = 0; i < parts.length; i += 2) {
//           if (parts[i + 1] === 'hours') {
//             totalMinutes += parseInt(parts[i]) * 60;
//           } else if (parts[i + 1] === 'minutes') {
//             totalMinutes += parseInt(parts[i]);
//           }
//         }
//       });

//       const hours = Math.floor(totalMinutes / 60);
//       const minutes = totalMinutes % 60;

//       setTotalTime(`${hours}:${minutes < 10 ? '0' : ''}${minutes}`);
//   }, [time])
    return (
        <div onClick={navigateDetails}>
            <div className=" text-left mb-[30px] hover:shadow-lg rounded-[10px] overflow-hidden bg-white cursor-pointer px-2 group">
                {/* -----course header----- */}
                <div className=" relative overflow-hidden ">
                    <img src={img} alt="" className="w-[100%] min-h-[200px] h-[250px] border-none shadow-none rounded-md group-hover:img_hover" />
                </div>
                {/* -----course header----- */}
                {/* --------content-------- */}
                <div className=" px-2 py-4">
                    {/* -----course price---- */}
                    {/* <div className=" mb-[8px]">
                        {
                            typeof price === "number" ? <span className=" text-[24px] font-[700] text-[#FFC400]">${price}</span> :  <span className=" text-[24px] font-[700] text-[#FFC400]">{price}</span>
                        }

                    </div> */}
                    {/* -----course price---- */}
                    {/* -----course title---- */}
                    <div className="">
                        <h3>
                            <a href="#" className=" no-underline text-[#130F40] text-xl
                         font-[700]   inline-block shadow-none" >{title}</a>
                        </h3>
                    </div>
                    {/* course by  */}
                    <p className="mt-1">By Asad</p>

                    {/* -----course rating---- */}
                    <div className=" flex gap-2 mt-1 items-center ">
                        <div>
                            {/* <p className="font-bold ">{rating}</p>  */}
                            {/* <p className="font-bold ">{AvgRating}</p> */}
                        </div>
                        {/* <div className=" flex gap-1">
                            {
                                [...Array(AvgRating)].map((a, index) => {
                                    return (
                                        <Star key={index} size={16} strokeWidth={1.5} className={`text-[#FFC400]  ${(4 >= (index + 1) ? "fill-[#FFC400]" : "fill-transparent")}`} />
                                    )
                                })
                            }
                        </div> */}
                        <div className=" text-gray-400 text-[14px] font-[500]">
                            ({review} Reviews)
                        </div>
                    </div>
                    {/* course price  */}
                    <div className="flex items-center gap-2">
                        <p className="font-extrabold " >${price}</p>

                    </div>
                    {/* ------course footer--- */}
                    <div className=" border-t-[1px] border-[#e6f0fa] pt-4 mt-4 ">
                        <div className=" flex">
                            {/* <div className=" flex items-center text-gray-400 gap-2">
                                <Clock className=" h-4 w-4" />
                                <h2>
                                    {
                                        totalTime.split(":")[0]
                                    } <span className=" text-gray-600">
                                        hours
                                    </span>
                                </h2>
                                <h2>
                                    {
                                        totalTime.split(":")[1]
                                    } <span className=" text-gray-600">
                                        minutes
                                    </span>
                                </h2>
                            </div> */}
                            <div className=" ml-auto flex gap-1 text-gray-400 items-center">
                                <User className=" w-5 h-5" />
                                <h2>
                                    {
                                        student
                                    }
                                </h2>
                            </div>
                        </div>
                    </div>
                    {/* ------course footer--- */}
                </div>
                {/* --------content-------- */}
            </div>
        </div>)
}

export default SingelCourse;
