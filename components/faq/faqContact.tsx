import { useState } from "react";
import Input from "../shared/Input";
import { Button } from "../ui/button";
import { askQuestions } from "../shared/apis/api";
import { ToastSuccess , ToastError } from "../shared/Others";

const FaqContact: React.FC = () => {

    const [data, setData]=useState()
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit=async(e:any)=>{
        e.preventDefault();
        setIsSubmitting(true)
        const t = e.target;
        const body = {
            name: t?.name?.value,
            email: t?.email?.value,
            phone: t?.phone?.value,
            subject: t?.subject?.value,
            description: t.description?.value,
            archived:false
        }
        console.log("body", body )

        const res = await askQuestions(body);
        console.log(res)
        if (res?.status == "success") {
            ToastSuccess("Successfully sent");
            setIsSubmitting(false);
        } else {
            ToastError(res?.message || "Something error");
            setIsSubmitting(false);
        }

    }


    return (
    <div className=" lg:col-span-4 col-span-12 pt-[30px]">
        <h2 className=" text-[24px] font-[800] ml-3">
            Asked Your Valuable Question
        </h2>
        <div className=" shadow-md rounded-[15px]  pt-[20px] pb-[50px] px-3">
            <form onSubmit={handleSubmit}>
                {/* -------input ----- */}
                <div className=" grid grid-cols-12">
                    <div className=" col-span-12">
                        <div className=" mb-[20px]">
                            <Input type="text" placeholder="Your Name" name="name" required  />
                        </div>
                    </div>
                    <div className=" col-span-12">
                        <div className=" mb-[20px]">
                            <Input type="email" placeholder="Your Email" name="email" required  />
                        </div>
                    </div>
                </div>
                <div className=" grid grid-cols-12">
                    <div className=" col-span-12">
                        <div className=" mb-[20px]">
                            <Input type="number" placeholder="Phone" name="phone"   />
                        </div>
                    </div>
                    <div className=" col-span-12">
                        <div className=" mb-[20px]">
                            <Input type="text" placeholder="Subject" name="subject" required  />
                        </div>
                    </div>
                </div>
                <div className=" pb-[20px]">
                    <textarea required name="description" className="relative block bg-white border border-[#E5E5E5] w-[100%]  text-[#676767] font-[500] text-[16px]  px-[35px] rounded-[25px] focus:outline-none h-[180px] pt-[12px] pb-[12px]" cols={30} rows={10}></textarea>
                </div>
                {/* -------input ----- */}
                {/* -----button----- */}
                <Button type="submit" className={`relative z-[5] bg-[#FFC400] text-white rounded-[30px] px-[45px] leading-[60px] text-[20px] py-[26px] ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""} `} >
                    Send Messages
                </Button>
                {/* -----button----- */}
            </form>
        </div>
    </div>)
}

export default FaqContact;
