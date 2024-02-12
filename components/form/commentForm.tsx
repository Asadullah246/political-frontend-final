"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import { updateBlog } from "../shared/apis/api";
import { ToastSuccess, ToastError } from "../shared/Others";

const CommentForm = ({info, refresh, setRefresh}) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });


  const handleChange = ( e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    const res = await updateBlog(info?._id, formData)
    console.log("res", res )
    if (res?.status == "success"){
        ToastSuccess("Successfully commented");
        setIsSubmitting(false);
        setRefresh(!refresh) 
    } else {
        ToastError(res?.message || "Something error");
        setIsSubmitting(false);
    }


  };

  return (
    <div>
      <div className="mt-16">
        <h3 className="text-xl font-semibold">Leave a Comment</h3>
        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto mt-4 p-4 bg-gray-100 rounded-md"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md

              `}
            />
            {/* {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )} */}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border rounded-md `}
            />
            {/* {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )} */}
          </div>
          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700"
            >
              Write a Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows={4}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
          disabled={isSubmitting}
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
