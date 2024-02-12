"use client"

import { ToastSuccess, ToastError} from '@/components/shared/Others';
import { checkLogin } from '@/components/shared/apis/api';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname, useRouter } from "next/navigation";

const AdminLogin = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const body={
            email:e.target.email.value,
            password:e.target.password.value
        }
        console.log("data", body);
        setIsSubmitting(true);


        try {


            // Make a POST request to your server endpoint
            const res = await checkLogin(body)
            console.log("res", res)

            if (res?.status === 'success') {
              ToastSuccess('Successfully Logged In');
              const jsonString = JSON.stringify(res?.data);
              localStorage.setItem("admin",jsonString)
              router.push("/admin") 

            } else {
              ToastError(res?.message || 'Something error');
            }
          } catch (error) {
            console.error('Error:', error);
            ToastError('An error occurred');
          } finally {
            setIsSubmitting(false);
          }


    };

  return (
    <div>
         <ToastContainer />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300  ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isSubmitting}
            type="submit"
          >
              {isSubmitting ? "Submitting..." : "Login"}
          </button>


        </form>
      </div>
    </div>
    </div>
  );
};

export default AdminLogin;

