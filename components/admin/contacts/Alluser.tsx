import { ToastSuccess, ToastError } from "@/components/shared/Others";
import { base, deleteUser, updateProfileInfo } from "@/components/shared/apis/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaDeleteLeft } from "react-icons/fa6";



const AllUser = () => {
    const [userData, setUserData] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [refresh, setRefresh]=useState(false)
    useEffect(() => {
        axios.get(`${base}/api/v1/user`).then((res) => {
            //   console.log("users in politic", res);
            if (res?.data?.status === "success") {
                setUserData(res?.data?.data);
            }
        });
    }, [refresh]);

    console.log("from database", userData);

    const handleApproved = async (id: any) => {
        const body = {
            talent: "approved"
        }
        const res = await updateProfileInfo(id, body);
        if (res?.status == "success"){
            ToastSuccess("Successfully approved");
            setIsSubmitting(false);
        } else {
            ToastError(res?.message || "Something error");
            setIsSubmitting(false);
        }
    }
    const handleDecline = async (id: any) => {

        const res = await deleteUser(id);
        setRefresh(!refresh)
        if (res?.data?.data?.status == "success"){
            ToastSuccess("Successfully Deleted");
            setIsSubmitting(false);

        } else {
            ToastError(res?.message || "Something error");
            setIsSubmitting(false);
        }
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
                            <th>Name</th>

                            <th>Skills</th>
                            <th>Address</th>
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
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={user?.image_url} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user?.name}</div>
                                                    <div className="text-sm opacity-50">{user?.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user?.skills}
                                        </td>
                                        <td>{user?.address}</td>
                                        <th>
                                            <p className="flex items-center gap-4">
                                                {/* <button onClick={() => handleApproved(user._id)} className="p-2"><FaRegCircleCheck class={`text-blue-500 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "" }`} />
                                                </button> */}
                                                <button onClick={() => handleDecline(user._id)} className="p-2"><FaDeleteLeft class={`text-red-500 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "" }`} />
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

export default AllUser;

