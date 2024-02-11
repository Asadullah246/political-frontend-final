import { ToastSuccess, ToastError } from "@/components/shared/Others";
import { base, updateMentorInfo, updateOthers, updateProfileInfo } from "@/components/shared/apis/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaDeleteLeft } from "react-icons/fa6";



const Talents = () => {
    const [userData, setUserData] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [refresh, setRefresh]=useState(false)
    useEffect(() => {
        axios.get(`${base}/api/v1/allcourse`).then((res) => {
            //   console.log("users in politic", res);
            if (res?.data?.status === "success") {
              const allData=res?.data?.data
            //   const filtered=allData?.filter(a=>a?.status==2)
              setUserData(allData)
                // setUserData(res?.data?.data);
            }
        });
    }, [refresh]);

    console.log("courses", userData);

    const handleApproved = async (id: any) => {
        const body = {
            // accounttype: "teacher"
            status:2
        }
        const res = await updateOthers(id,"mentor", body);
        if (res?.status == "success"){
            ToastSuccess("Successfully approved");
            setIsSubmitting(false);
            setRefresh(!refresh)
        } else {
            ToastError(res?.message || "Something error");
            setIsSubmitting(false);
            setRefresh(!refresh)
        }
    }
    const handleDecline = async (id: any) => {
        
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Published</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData?.map(user => {
                                return (
                                    <tr key={user?._id}>
                                        {/* <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th> */}
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-10">
                                                        <img src={user?.imageUrl} alt="Img" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user?.title}</div>
                                                    {/* <div className="text-sm opacity-50">{user?.email}</div> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user?.price}
                                        </td>
                                        <td>{user?.description}</td>
                                        <td>{user?.isPublished == 1 ? "Yes" : "No"}</td>
                                        {/* <td>{user?.additional}</td> */}
                                        <th>
                                            <p className="flex items-center gap-4">
                                                {/* <button onClick={() => handleApproved(user._id)} className={`text-blue-500 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "" } p-2`}>

                                                    Approve
                                                </button> */}
                                                <button onClick={() => handleDecline(user.id)} className={`text-red-500 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "" } p-2`}>

                                                    Delete
                                                </button>

                                            </p>
                                        </th>
                                    </tr>
                                )
                            })
                        }




                    </tbody>
                    {/* foot */}
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>



        </div>
    );
};

export default Talents;

