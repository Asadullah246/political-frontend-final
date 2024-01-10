import { PoliticalDataItem } from "@/store/types";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { ToastSuccess, ToastError } from "../shared/Others";
import { activeAccount, base, updateProfileInfo } from "../shared/apis/api";
import axios from "axios";
import { baseUrl } from "@/store/Store";

interface HeroProps {
    userImg: string | undefined;
    fullName: string | undefined;
    userdata?: PoliticalDataItem;
    exits?: boolean;
    id?: string;
}
interface InfoType {
    name?: string;
    email?: string;
    image_url?: string;
    signingId?: string;
    address?: string;
    phone?: any;
    description?: string;
    city?: string;
    country?: string;
    skills?: string;
    experiences?: string;
    _id?: string;
    talent?: any;
    // Add other properties if needed
}
const Hero2 = ({
    userImg, fullName,
    userdata,
    exits,
    id
}: HeroProps) => {

    const [info, setInfo] = useState<InfoType>()
    const [refresh, setRefresh] = useState(false)
    useEffect(() => {
        axios.get(`${base}/api/v1/user/${id}`)
            .then(data => {
                console.log("data", data?.data?.data)
                setInfo(data?.data?.data)
            })
            .catch(error => {
                console.log("err", error)
            })
    }, [id, refresh])


    const [formValues, setFormValues] = useState<InfoType>({
        name: userdata?.fullName,
        email: userdata?.primaryEmailAddress?.emailAdress,
        image_url: userdata?.image_Url,
        signingId: id,
        address: info?.address || "",
        phone: info?.phone || "",
        description: info?.description || "",
        city: info?.city || "",
        country: info?.country || "",
        skills: info?.skills || "",
        experiences: info?.experiences || "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
            name: userdata?.fullName,
            email: userdata?.primaryEmailAddress?.emailAddress,
            image_url: userdata?.imageUrl,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("data", formValues);
        setIsSubmitting(true);


        const res = await activeAccount(formValues);

        if (res?.status === "success") {
            ToastSuccess("Successfully Activated");
            setIsSubmitting(false);
            window.location.reload()
        } else {
            ToastError(res?.message || "Something error");
            setIsSubmitting(false);
            window.location.reload()
        }
        // setRefresh(!refresh)
    };

    const handleSubmit2 = async (e: any) => {
        e.preventDefault();
        console.log("update data", formValues);
        setIsSubmitting(true);

        if ((!info?._id)) {
            ToastError("User data not found")
            return;
        }

        const res = await updateProfileInfo(info?._id, formValues);
        console.log("res", res)
        if (res?.status == "success") {


            ToastSuccess("Successfully Activated");
            setIsSubmitting(false);
            window.location.reload()


        } else {

            window.location.reload()

            // ToastError(res?.message || "Something error");
            setIsSubmitting(false);
        }
    };

    const handleTalent = async () => {
        setIsSubmitting(true);

        if ((!info?._id)) {
            ToastError("User data not found")
            return;
        }
        const body = {
            talent: "pending"
        }

        const res = await updateProfileInfo(info?._id, body);

        if (res) {
            // const doc=document.getElementById('my_modal_4')
            // if(doc){
            //     doc.style.display="none"
            // }
            ToastSuccess("Successfully Applied");
            setIsSubmitting(false);
            setRefresh(!refresh)
            // window.location.reload()


        } else {
            // const doc=document.getElementById('my_modal_4')
            // if(doc){
            //     doc.style.display="none"
            // }
            // window.location.reload()
            setRefresh(!refresh)

            ToastError(res?.message || "Something error");
            setIsSubmitting(false);
        }

    }
    const handleTeacher = async () => {
        setIsSubmitting(true);

        if ((!info?._id)) {
            ToastError("User data not found")
            return;
        }
        const body = {
            accounttype: "teacher-pending"
        }

        const res = await updateProfileInfo(info?._id, body);

        if (res) {

            ToastSuccess("Successfully Applied");
            setRefresh(!refresh)
            setIsSubmitting(false);
            // window.location.reload()


        } else {
            // const doc=document.getElementById('my_modal_4')
            // if(doc){
            //     doc.style.display="none"
            // }
            // window.location.reload()
            setRefresh(!refresh)

            ToastError(res?.message || "Something error");
            setIsSubmitting(false);
        }

    }


    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    {/* new code  */}
                    <div>
                        <div className="bg-white min-h-screen flex items-center justify-start ">
                            <div className="md:ml-8 bg-gray-100 p-8 shadow-md rounded-md">
                                <h1 className="text-3xl font-bold mb-4  ">
                                    Activate Your Profile
                                </h1>

                                <form onSubmit={handleSubmit} className="max-w-md mt-8">
                                    {/* <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formValues.name}
                                            onChange={handleChange}
                                            className="border p-2 w-full"
                                            required
                                        />
                                    </div> */}

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
                                            required
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
                                            required
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
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="city"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formValues.city}
                                            onChange={handleChange}
                                            className="border p-2 w-full"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="country"
                                        >
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            id="country"
                                            name="country"
                                            value={formValues.country}
                                            onChange={handleChange}
                                            className="border p-2 w-full"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="skills"
                                        >
                                            Skills
                                        </label>
                                        <input
                                            type="text"
                                            id="skills"
                                            name="skills"
                                            value={formValues.skills}
                                            onChange={handleChange}
                                            className="border p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="skills"
                                        >
                                            Experiences
                                        </label>
                                        <input
                                            type="text"
                                            id="experiences"
                                            name="experiences"
                                            value={formValues.experiences}
                                            onChange={handleChange}
                                            className="border p-2 w-full"
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
                    {/* new code  */}
                    {/* <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                </div>
            </dialog>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    {/* new code  */}
                    {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕gsdfdsfsdf</button> */}

                    <div>
                        <div className="bg-white min-h-screen flex items-center justify-start ">
                            <div className="md:ml-8 bg-gray-100 p-8 shadow-md rounded-md">
                                <h1 className="text-3xl font-bold mb-4  ">
                                    Update Your Profile
                                </h1>

                                <form onSubmit={handleSubmit2} className="max-w-md mt-8">


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
                                            required
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
                                            required
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
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="city"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formValues.city}
                                            onChange={handleChange}
                                            className="border p-2 w-full"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="country"
                                        >
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            id="country"
                                            name="country"
                                            value={formValues.country}
                                            onChange={handleChange}
                                            className="border p-2 w-full"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="skills"
                                        >
                                            Skills
                                        </label>
                                        <input
                                            type="text"
                                            id="skills"
                                            name="skills"
                                            value={formValues.skills}
                                            onChange={handleChange}
                                            className="border p-2 w-full"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="skills"
                                        >
                                            Experiences
                                        </label>
                                        <input
                                            type="text"
                                            id="experiences"
                                            name="experiences"
                                            value={formValues.experiences}
                                            onChange={handleChange}
                                            className="border p-2 w-full"
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
                    {/* new code  */}
                    {/* <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                </div>

            </dialog>



            <div className="max-w-[1320px] pb-[50px]">
                <div className=" w-full  lg:h-[240px] grid grid-cols-12 lg:gap-12 gap-4">
                    {/* ------user img----- */}
                    <div className=" h-[100%] lg:col-span-3 col-span-5">
                        <img src={userImg}
                            alt={fullName ? fullName : 'user'}
                            className=' rounded-sm w-[100%] h-[100%]' />
                    </div>
                    {/* ------user img----- */}
                    {/* ------user info----- */}
                    <div className=" lg:col-span-9 col-span-7 h-full border-b">
                        <div className=" mb-[15px]">
                            <h2 className=" text-gray-600 text-[24px] uppercase">
                                {
                                    fullName ? fullName : 'user'
                                }
                            </h2>
                            <p className=" font-[500] text-[#0D01E5]">
                                {
                                    exits ? "" : userdata?.tittle
                                }
                            </p>
                        </div>
                        <div className=" mb-[15px]">
                            <p className=" text-gray-500 uppercase font-[600]">
                                iq level
                            </p>
                            <div className=" flex gap-4 items-center">
                                <span className=" text-[20px] font-[600] text-gray-600">
                                    {
                                        exits ? `0` : userdata?.skill_rating
                                    }
                                </span>
                                <div className=" w-[60%] h-[7px] bg-gray-600 rounded-sm">
                                    <div className={` ${exits ? "w-[0%]" : `w-[${userdata?.skill_rating || 0 * 10}%]`} h-full bg-[#0D01E5] rounded-sm`}></div>
                                </div>
                            </div>
                        </div>
                       

                    </div>
                    {/* ------user info----- */}
                </div>
            </div>
        </>

    );
}

export default Hero2;
