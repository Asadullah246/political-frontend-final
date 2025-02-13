import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {  createTestimonial, getSiteInfo } from "../shared/apis/api";
import { ToastError, ToastSuccess } from "../shared/Others";


// interface FormValues {
//   name?: string;
//   logoImage?: File | null | any;
//   designation?: any;
//   rating?: any;
//   description?: string;
// }

const AboutUSForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [info, setInfo] = useState()

    useEffect(() => {
        getUser()
    }, [])


    const getUser = async () => {
        const res = await getSiteInfo()
        const length = res?.data?.length - 1
        if (length) {

            setInfo(res?.data[length])
        }
    }


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true)
        const t = e.target;
        const formValues = {
            name: t.name.value,
            designation: t.designation.value,
            rating: t.rating.value,
            description: t.description.value,
            logoImage:t.logoImage.files[0]
        }

        // const res = await createTestimonial(body);
        // console.log(res)
        // if (res?.status == "success") {
        //     ToastSuccess("Successfully sent");
        //     setIsSubmitting(false);
        // } else {
        //     ToastError(res?.message || "Something error");
        //     setIsSubmitting(false);
        // }


         try {
            const formData = new FormData();

            // Append each form field to the FormData object
            for (const key in formValues) {
              formData.append(key, formValues[key]);
            }

            // Make a POST request to your server endpoint
            const res = await createTestimonial(formData)

            if (res?.status === 'success') {
              ToastSuccess('Successfully updated');
            } else {
              ToastError(res?.message || 'Something error');
            }
          } catch (error) {
            console.error('Error:', error);
            ToastError('An error occurred');
          } finally {
            setIsSubmitting(false);
          }

    }



  return (
    <div>
      <div className=" lg:col-span-8 md:col-span-6 col-span-12">
        <div className=" shadow-md rounded-[15px] px-4 lg:px-[50px] pt-[42px] pb-[50px]">

          <h2 className="text-center text-3xl mb-8 ">Give review about our services</h2>
          <form onSubmit={handleSubmit}>
            {/* -------input ----- */}
            <div className=" grid grid-cols-12 gap-8">
              <div className=" lg:col-span-6 col-span-12">
                <div className="lg:mb-[30px] mb-[10px]">
                  <Input type="text" placeholder="Your Name" name="name" required/>
                </div>
              </div>
              <div className=" lg:col-span-6 col-span-12">
                <div className="lg:mb-[30px] mb-[10px]">
                  <Input type="text" placeholder="Designation" name="designation"  required/>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-12 gap-8">
              <div className=" lg:col-span-6 col-span-12">
                <div className="lg:mb-[30px] mb-[10px]">
                  <Input type="number" placeholder="Rating" name="rating" required/>
                </div>
              </div>
              <div className=" lg:col-span-6 col-span-12">
                <div className="lg:mb-[30px] mb-[10px]">
                  <Input type="file"  name="logoImage"  />
                </div>
              </div>
            </div>
            <div className=" pb-[50px]">
              <textarea
                name="description"
                placeholder="Decription"
                required
                className="relative block bg-white border border-[#E5E5E5] w-[100%]  text-[#676767] font-[500] text-[16px]  px-[35px] rounded-[25px] focus:outline-none h-[180px] pt-[12px] pb-[12px]"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            {/* -------input ----- */}
            {/* -----button----- */}
            <Button
              type="submit"
              className={`relative z-[5] bg-[#FFC400] text-white rounded-[30px] px-[45px] leading-[60px] text-[20px] py-[26px] ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
             Submit
            </Button>
            {/* -----button----- */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUSForm;
