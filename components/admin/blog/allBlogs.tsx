import { ToastError, ToastSuccess } from "@/components/shared/Others";
import { base, deleteBlog } from "@/components/shared/apis/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";


const AllBlogs = () => {
  const [currentData, setCurrentData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userData, setUserData] = useState();
  useEffect(() => {
    axios.get(`${base}/api/v1/blogs`)
      .then((res) => {
        console.log("blogs", res?.data?.data);
        if (res?.data?.status === "success") {
          const allData = res?.data?.data?.reverse(); 
          //   const filtered=allData?.filter(a=>!(a?.archived)==true)
          setUserData(allData);
          // setUserData(res?.data?.data);
        }
      });
  }, [refresh]);


  // function for delete
  const handleDelete = async (id: any) => {
    const res = await deleteBlog(id);
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
      {/*  modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{currentData?.title}</h3>
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

              <th>Author</th>
              <th>Title</th>
              {/* <th>Subject</th> */}
              <th>Description</th>
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
                            <img src={`${base}${user?.logoImage}`} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user?.author}</div>
                          {/* <div className="text-sm opacity-50">{user?.title}</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      {user?.title}
                    </td>
                    {/* <td>{user?.subject}</td> */}
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

export default AllBlogs;
