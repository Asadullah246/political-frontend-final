import { base } from "@/components/shared/apis/api";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AllBlogs = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const res = axios.get(`${base}/api/v1/blogs`).then((res) => {
      console.log("response", res.data.data);
      if (res.data.status === "success") {
        setUserData(res?.data?.data);
      }
    });
  }, []);

  const [currentData, setCurrentData] = useState();
  console.log("currentData", currentData);

  return (
    <div>
      {/*  modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      {userData?.map((user) => (
        <div key={user.id}>
          {/* <td className="border p-2">Author: {user.author}</td>
          <td className="border p-2">
            <img
              src={user.authorImage}
              alt={`Image of ${user.author}`}
              className="w-12 h-12 object-cover rounded-full"
            />
          </td>
          <td className="border p-2">Title: {user.title}</td>
          <td className="border p-2">Description: {user.description}</td> */}

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
                        <div className="font-bold">{user.author}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h3 className="font-bold">Title</h3>
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {user.title}
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
                    <button className="btn btn-ghost btn-xs">Edit</button>
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
