"use client"
import { Clock4, Mail, MapPin, Phone } from "lucide-react";
import Input from "../shared/Input";
import { Button } from "../ui/button";
import { useState ,useEffect} from "react";
import { createContact, getSiteInfo } from "../shared/apis/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastSuccess ,ToastError } from "../shared/Others";

interface ContactItem {
    icon: React.ReactNode;
    tittle: string;
    text: string;
}

const data: ContactItem[]  = [
     {
        icon: <MapPin />,
        tittle: "Political Office",
        text:'1234 Street Name, City Name, United States'
     },{
        icon:<Phone />,
        tittle: "Phone No",
        text:'(123) 456-7890'
     },{
        icon:<Mail />,
        tittle: "Email",
        text:"example@gmail.com"
     },{
        icon:<Clock4 />,
        tittle: "Office Hours",
        text:"Mon - Fri: 9:00 AM - 5:00 PM"
     }
]



const Contact: React.FC = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [info, setInfo] = useState()

    useEffect(() => {
      getUser()
    }, [])


    const getUser = async () => {
      const res = await getSiteInfo()
      const length=res?.data?.length -1
      if(length){

        setInfo(res?.data[length])
      }
    }

    const handleSubmit=async(e:any)=>{
        e.preventDefault();
        setIsSubmitting(true)
        const t=e.target ;
 const body={
    name:t.name.value,
    email:t.email.value,
    subject:t.subject.value,
    description:t.description.value,
 }

        const res = await createContact(body);
        console.log(res)
        if (res?.status == "success"){
            ToastSuccess("Successfully sent");
            setIsSubmitting(false);
        } else {
            ToastError(res?.message || "Something error");
            setIsSubmitting(false);
        }

    }
    return (
        <>
         <ToastContainer />
        <div className=" block  pt-[120px] pb-[120px]">
            <div className=" container static max-w-[1320px] px-[15px] mx-auto">
                   <div className=" grid grid-cols-12">
                      <div className=" lg:col-span-4 md:col-span-6 col-span-12">
                        {/* ----tittle box---- */}
                        <div className=" pb-[27px]">
                              <h2 className=" font-[600] text-[30px] leading-[30px] mb-[22px]">Political Office</h2>
                              <p className=" text-gray-700">
                                1234 Street Name, City Name, United States <br />
                                (123) 456-7890
                              </p>

                        </div>
                        {/* ----tittle box---- */}
                        <div>
                            {
                                data.map((item,index)=>(
                                    <div key={index} className=" relative block pl-[30px] mb-[20px]">
                                       {/* ----icon box----- */}
                                       <div className=" absolute top-[5px] left-0 text-red-500">
                                           {
                                                  item.icon
                                           }
                                       </div>
                                       {/* ----icon box----- */}
                                       <div className=" relative left-2">
                                             <h4 className=" font-[500] text-[18px] leading-[28px] mb-[4px]">
                                                    {item.tittle}:
                                             </h4>
                                             <p className=" font-[500] text-[18px] leading-[28px] text-gray-700">
                                                 {
                                                        item.text
                                                 }
                                             </p>
                                       </div>
                                    </div>
                                ))
                            }
                        </div>
                      </div>
                      <div className=" lg:col-span-8 md:col-span-6 col-span-12">
                        <div className=" shadow-md rounded-[15px] px-4 lg:px-[50px] pt-[42px] pb-[50px]">
                              <form onSubmit={handleSubmit}>
                                {/* -------input ----- */}
                                <div className=" grid grid-cols-12 gap-8">
                                     <div className=" lg:col-span-6 col-span-12">
                                         <div className="lg:mb-[30px] mb-[10px]">
                                             <Input type="text" placeholder="Your Name" name="name" />
                                         </div>
                                     </div>
                                     <div className=" lg:col-span-6 col-span-12">
                                         <div className="lg:mb-[30px] mb-[10px]">
                                             <Input type="email" placeholder="Your Email" name="email" />
                                         </div>
                                     </div>
                                </div>
                                <div className=" grid grid-cols-12 gap-8">
                                     <div className=" lg:col-span-6 col-span-12">
                                         <div className="lg:mb-[30px] mb-[10px]">
                                             <Input type="number" placeholder="Phone" name="phone" />
                                         </div>
                                     </div>
                                     <div className=" lg:col-span-6 col-span-12">
                                         <div className="lg:mb-[30px] mb-[10px]">
                                             <Input type="text" placeholder="Subject" name="subject" />
                                         </div>
                                     </div>
                                </div>
                                <div className=" pb-[50px]">
                                    <textarea name="description" className="relative block bg-white border border-[#E5E5E5] w-[100%]  text-[#676767] font-[500] text-[16px]  px-[35px] rounded-[25px] focus:outline-none h-[180px] pt-[12px] pb-[12px]"  cols={30} rows={10}></textarea>
                                </div>
                                {/* -------input ----- */}
                                {/* -----button----- */}
                                <Button type="submit" className={`relative z-[5] bg-[#FFC400] text-white rounded-[30px] px-[45px] leading-[60px] text-[20px] py-[26px] ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`} >
                                    Send Messages
                                </Button>
                                {/* -----button----- */}
                              </form>
                        </div>
                      </div>
                   </div>
            </div>
        </div>
        </>
    )
}

export default Contact
