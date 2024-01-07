import { ToastError, ToastSuccess } from "@/components/shared/Others";
import { base, deleteBlog } from "@/components/shared/apis/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const AllBlogs = () => {
  const [currentData, setCurrentData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios.get(`${base}/api/v1/blogs`).then((res) => {
      //   console.log("users in politic", res);
      if (res?.data?.status === "success") {
        const allData = res?.data?.data;
        //   const filtered=allData?.filter(a=>!(a?.archived)==true)
        setUserData(allData);
        // setUserData(res?.data?.data);
      }
    });
  }, [refresh]);

  const [userData, setUserData] = useState();
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

  // console.log("Test", userData);

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

      {/* head */}
      {/* <thead>
        <tr className="flex justify-space-around">
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </thead> */}


      {userData?.map((user) => (
        <div key={user?._id}>
          {/* table  */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.author}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h3 className="font-bold">Title</h3>
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {user?.title}
                    </span>
                  </td>
                  <th>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn"
                      onClick={() => {
                        document.getElementById("my_modal_1").showModal();
                        setCurrentData(user);
                      }}
                    >
                      Details
                    </button>
                  </th>
                  <th>
                    <p className="flex items-center gap-4">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="p-2"
                      >
                        <FaTrash
                          class={`text-blue-500 ${
                            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        />
                      </button>
                    </p>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;
