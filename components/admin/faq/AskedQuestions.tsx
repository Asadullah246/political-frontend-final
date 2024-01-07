import { ToastSuccess, ToastError } from "@/components/shared/Others";
import { base, updateProfileInfo, updateakedquestions } from "@/components/shared/apis/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";




const AskedQuestions = () => {
    const [userData, setUserData] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentData, setCurrentData] = useState();
    const [refresh, setRefresh] = useState(false)
    useEffect(() => {
        axios.get(`${base}/api/v1/askQuestions`).then((res) => {
            //   console.log("users in politic", res);
            if (res?.data?.status === "success") {
                // const allData=res?.data?.data 
                // const filtered=allData?.filter(a=>!(a?.archived)==true)
                // setUserData(filtered)
                setUserData(res?.data?.data?.reverse());
            }
        });
    }, [refresh]);

    console.log("asked", userData);

    const handleApproved = async (id: any) => {
        const body = {
            archived:true
        }
        const res = await updateakedquestions(id, body);
        if (res?.status == "success") {
            ToastSuccess("Successfully approved");
            setIsSubmitting(false);
            setRefresh(!refresh)
        } else {
            setRefresh(!refresh)
            ToastError(res?.message || "Something error");
            setIsSubmitting(false);
        }
    }
    const handleDecline = async (id: any) => {
        const body = {
            talent: ""
        }
        const res = await updateProfileInfo(id, body);
        setRefresh(!refresh)
        if (res?.status == "success") {
            ToastSuccess("Successfully declined");
            setIsSubmitting(false);
        } else {
            ToastError(res?.message || "Something error");
            setIsSubmitting(false);
        }
    }

    return (
        <div>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{currentData?.subject}</h3>
                    <p className="py-4">{currentData?.description}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Phone</th>
                            <th>Subject</th>
                            <th>Description</th>
                            {/* <th>Archived</th> */}
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
                                                {/* <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={user?.image_url} />
                                                    </div>
                                                </div> */}
                                                <div>
                                                    <div className="font-bold">{user?.name}</div>
                                                    <div className="text-sm opacity-50">{user?.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user?.phone}
                                        </td>
                                        <td>{user?.subject}</td>
                                        <td>
                                            <div className="flex justify-between items-start ">
                                                <div>
                                                    {user?.description?.slice(0, 50)}...
                                                </div>
                                                <button className="font-bold " onClick={() => {
                                                    document.getElementById("my_modal_1").showModal();
                                                    setCurrentData(user);
                                                }} >Details
                                                </button>
                                            </div>
                                        </td>
                                        <th>
                                            <p className="flex items-center gap-4">
                                                {/* <button onClick={() => handleApproved(user._id)} className="p-2"><FaRegCircleCheck class={`text-blue-500 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`} />
                                                </button> */}
                                                {/* <button onClick={() => handleDecline(user._id)} className="p-2"><FaDeleteLeft class={`text-red-500 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`} />
                                                </button> */}
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

export default AskedQuestions;

