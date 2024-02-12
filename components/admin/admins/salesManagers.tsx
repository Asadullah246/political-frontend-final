import { ToastError, ToastSuccess } from "@/components/shared/Others";
import { base, deleteAdmin, deleteBlog, deleteSaleManager } from "@/components/shared/apis/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";


const SalesManagers = () => {
  const [currentData, setCurrentData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userData, setUserData] = useState();
  useEffect(() => {
    axios.get(`${base}/api/v1/admin`)
      .then((res) => {
        console.log("blogs", res?.data?.data);
        if (res?.data?.status === "success") {
          const allData = res?.data?.data?.reverse();
            const filtered=allData?.filter(a=>a?.role=="sales_manager")
          setUserData(filtered);
          // setUserData(res?.data?.data);
        }
      });
  }, [refresh]);


  // function for delete
  const handleDelete = async (id: any) => {
    const res = await deleteAdmin(id);
    console.log("res", res);
    setRefresh(!refresh);
    if (res?.data?.status == "success") {
      ToastSuccess("Successfully Deleted");
      setIsSubmitting(false);
    } else {
      ToastError(res?.message || "Something error");
      setIsSubmitting(false);
    }
  };

  // console.log("user data", userData);

  return (
    <div>


      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Email</th>
              {/* <th>Password</th> */}
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
                        {/* <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={`${base}${user?.logoImage}`} />
                          </div>
                        </div> */}
                        <div>
                          <div className="font-bold">{user?.email}</div>
                          {/* <div className="text-sm opacity-50">{user?.title}</div> */}
                        </div>
                      </div>
                    </td>
                    {/* <td>
                      {user?.password}
                    </td> */} 
                    {/* <td>{user?.subject}</td> */}

                    <th>
                      <p className="flex items-center gap-4">
                        {/* <button onClick={() => handleApproved(user._id)} className="p-2"><FaRegCircleCheck class={`text-blue-500 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`} />
                                                </button> */}
                        <button className={`text-red-500 p-2 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => handleDelete(user._id)} >
                                                Delete
                          {/* <CiCircleRemove
                          class={`text-red-500 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`} /> */}
                        </button>
                      </p>
                    </th>
                  </tr>
                )
              })
            }




          </tbody>
        </table>
      </div>

    </div>
  );
};

export default SalesManagers;
