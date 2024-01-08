import { base } from "@/components/shared/apis/api";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogDetails = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const res = axios.get(`${base}/api/v1/blogs`).then((res) => {
      console.log("response", res.data.data);
      if (res.data.status === "success") {
        setUserData(res?.data?.data);
      }
    });
  }, []);
  return (
    <div>
      {userData?.map((user) => (
        <div key={user.id}>
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
                    {user.details}
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-xs">Go to all Blogs</button>
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

export default BlogDetails;
