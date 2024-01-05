import { ToastError, ToastSuccess } from "@/components/shared/Others";
import { newWebsiteInfo } from "@/components/shared/apis/api";
import React, { useState } from "react";

const WebsiteInfoPage = () => {
    const [formValues, setFormValues] = useState({
        websiteName: "",
        logoImage: null,
        phone: "",
        email: "",
        address: "",
        description: "",
        facebook: "",
        twitter: "",
        instagram: "",
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

        const res = await newWebsiteInfo(formValues)

        if (res?.status === "success") {
            ToastSuccess("Successfully updated")
             setIsSubmitting(false);

        } else {
            ToastError(res?.message || "Something error")
             setIsSubmitting(false);
        }

    };

    return (
        <div>
            <div className="bg-white min-h-screen flex items-center justify-start ">
                <div className="md:ml-8 bg-gray-100 p-8 shadow-md rounded-md">
                    <h1 className="text-3xl font-bold mb-4  ">
                        Website Information Form
                    </h1>

                    <form onSubmit={handleSubmit} className="max-w-md mt-8">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="websiteName"
                            >
                                Website Name
                            </label>
                            <input
                                type="text"
                                id="websiteName"
                                name="websiteName"
                                value={formValues.websiteName}
                                onChange={handleChange}
                                className="border p-2 w-full"
                                required={false}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="logoImage"
                            >
                                Logo Image
                            </label>
                            <input
                                type="file"
                                id="logoImage"
                                name="logoImage"
                                accept="image/*"
                                onChange={handleChange}
                                className="border p-2 w-full"
                                required={false}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="phone"
                            >
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formValues.phone}
                                onChange={handleChange}
                                className="border p-2 w-full"
                                required={false}
                            />
                        </div>

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
                                className="border p-2 w-full"
                                required={false}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="address"
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formValues.address}
                                onChange={handleChange}
                                className="border p-2 w-full"
                                required={false}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="facebook"
                            >
                                Facebook URL
                            </label>
                            <input
                                type="url"
                                id="facebook"
                                name="facebook"
                                value={formValues.facebook}
                                onChange={handleChange}
                                className="border p-2 w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="twitter"
                            >
                                Twitter URL
                            </label>
                            <input
                                type="url"
                                id="twitter"
                                name="twitter"
                                value={formValues.twitter}
                                onChange={handleChange}
                                className="border p-2 w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="instagram"
                            >
                                Instagram URL
                            </label>
                            <input
                                type="url"
                                id="instagram"
                                name="instagram"
                                value={formValues.instagram}
                                onChange={handleChange}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formValues.description}
                                onChange={handleChange}
                                className="border p-2 w-full h-32"
                                required={false}
                            />
                        </div>

                        <div className="mb-4">
                            <button
                                type="submit"
                                className={`bg-gradient-to-r from-${"#FFC400"} to-${"#0D01E5"} bg-blue-500 text-white p-3 rounded-md w-full ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
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

export default WebsiteInfoPage;
