import { ToastSuccess, ToastError } from "@/components/shared/Others";
import {
  base,
  deleteTest,
  updateContactInfo,
  updateProfileInfo,
} from "@/components/shared/apis/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaDeleteLeft } from "react-icons/fa6";

const Talents = () => {
  const [userData, setUserData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  console.log("Test", userData);

  const handleDelete = async (id: any) => {
    const res = await deleteTest(id);
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

              <th>Rating</th>
              <th>Description</th>
              <th>Designation</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user) => {
              return (
                <tr key={user?._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{user?.name}</div>
                        {/* <div className="text-sm opacity-50">{user?.rating}</div> */}
                      </div>
                    </div>
                  </td>
                  <td>{user?.rating}</td>
                  <td>{user?.description}</td>
                  <td>{user?.designation}</td>
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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Talents;
