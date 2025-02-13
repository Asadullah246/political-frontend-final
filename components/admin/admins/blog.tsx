import { ToastError, ToastSuccess } from "@/components/shared/Others";
import { CreatingNewAdmin, CreatingNewBlog } from "@/components/shared/apis/api";
import React, { useState } from "react";

const NewBlog = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    role:"admin"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("data", formValues);
    setIsSubmitting(true);

    const res = await CreatingNewAdmin(formValues);

    if (res?.status === "success") {
      ToastSuccess("New Admin Added");
      setIsSubmitting(false);
    } else {
      ToastError(res?.message || "Something error");
      setIsSubmitting(false);
    }

  };

  return (
    <div>
      <div className="bg-white  flex items-center justify-start ">
        <div className="md:ml-8 bg-gray-100 p-8 shadow-md rounded-md">
          <h1 className="text-3xl font-bold mb-4  ">
            Blog Information form
          </h1>

          <form onSubmit={handleSubmit} className="max-w-md mt-8">


            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="input_primary"
                required={false}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                className="input_primary"
              />
            </div>



            <div className="mb-4">
              <button
                type="submit"
                className={`bg-gradient-to-r from-${"#FFC400"} to-${"#0D01E5"} bg-blue-500 text-white p-3 rounded-md w-full ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
