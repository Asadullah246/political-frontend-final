import { useUser } from "@clerk/nextjs";
// import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import axios from "axios";
import { base, handleProfileCreation } from "../shared/apis/api";

import { CopyIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Modal from "./modal";
import { ToastError, ToastSuccess } from "../shared/Others";



interface Experience {
  id: number;
  title: string;
}
interface Props {
  exits?: boolean;
  id?: any;
  userdata?: any;
}
interface ContactInfo {
  id: number;
  title: string;
  value: string;
  color?: string;
}
interface InfoType {

  signingId?: string;
  address?: string;
  phone?: any;
  description?: string;
  city?: string;
  country?: string;
  skills?: string;
  experiences?: string;
  _id?: string;
  // Add other properties if needed
}


const experiences: Experience[] = [{
  id: 1,
  title: "Political Speeker",
}, {
  id: 2,
  title: "Political writer",
}, {
  id: 3,
  title: "Motivational Speeker",
}, {
  id: 4,
  title: "Motivational writer",
}]

const BasicInfo: React.FC<Props> = ({
  exits,
  userdata,
  id
}) => {
  const { isLoaded, isSignedIn, user } = useUser();

  const ContactInfo: ContactInfo[] = [{
    id: 1,
    title: "Phone",
    value: exits ? "Add Your Phone Number" : userdata?.phone_number
  }, {
    id: 2,
    title: "Email",
    value: exits ? user.emailAddresses[0].emailAddress : userdata?.email,
    color: '#2578F0'
  }, {
    id: 3,
    title: "Address",
    value: exits ? "Add Your Address" : userdata?.address
  }]

  const [info, setInfo] = useState<InfoType>()

  const [tal, setTal] = useState([])
  const [exp, setexp] = useState([])
  const [mentor, setmentor] = useState([])
  const [org, setorg] = useState([])
  const [cons, setcons] = useState([])
  const [refresh, setRefresh]=useState({
    talentR:false,
    expR:false,
    mentorR:false,
    orgR:false,
    consR:false
  })

  useEffect(() => {
    axios.get(`${base}/api/v1/user/${id}`)
      .then(data => {
        setInfo(data?.data?.data)
      })
      .catch(error => {
        console.log("err", error)
      })
  }, [id])
  // console.log("info", info)
  useEffect(() => {
    axios.get(`${base}/api/v1/talentperson/${info?.signingId}`)
      .then(data => {
        setTal(data?.data?.data)
      })
      .catch(error => {
        console.log("err", error)
      })
  }, [id, info?.signingId, refresh.talentR])
  useEffect(() => {
    axios.get(`${base}/api/v1/experience/${info?.signingId}`)
      .then(data => {

        setexp(data?.data?.data)
      })
      .catch(error => {
        console.log("err", error)
      })
  }, [id, info?.signingId, refresh.expR])

  useEffect(() => {
    axios.get(`${base}/api/v1/mentor/${info?.signingId}`)
      .then(data => {

        setmentor(data?.data?.data)
      })
      .catch(error => {
        console.log("err", error)
      })
  }, [id, info?.signingId,, refresh.mentorR])


  useEffect(() => {
    axios.get(`${base}/api/v1/organization/${info?.signingId}`)
      .then(data => {

        setorg(data?.data?.data)
      })
      .catch(error => {
        console.log("err", error)
      })
  }, [id, info?.signingId, refresh.orgR])

  useEffect(() => {
    axios.get(`${base}/api/v1/constituenly/${info?.signingId}`)
      .then(data => {
        setcons(data?.data?.data)
      })
      .catch(error => {
        console.log("err", error)
      })
  }, [id, info?.signingId,refresh.consR])


  const PoliticalTalent = [
    { defaultValue: 'name', readOnly: true, value: info?.name },
    { defaultValue: 'skills', readOnly: false, value: info?.skills },
    { defaultValue: 'experiences', readOnly: false, value: info?.experiences },
    { defaultValue: 'address', readOnly: false, value: info?.address },
    { defaultValue: 'current-Designation', readOnly: false, value: "" }
    // Add more custom input configurations as needed
  ]
  const ExperiencePolitical = [
    {
      defaultValue: 'name', readOnly: true,
      value: info?.name
    },
    { defaultValue: 'skills', readOnly: false, value: info?.skills },
    { defaultValue: 'experiences', readOnly: false, value: info?.experiences },
    { defaultValue: 'address', readOnly: false, value: info?.address },
    { defaultValue: 'current-Designation', readOnly: false, value: "" }

  ]

  const ORGANISATION = [
    { defaultValue: 'organization_Name', readOnly: false, value: "" },
    { defaultValue: 'organization_Details', readOnly: false, value: "" },
    { defaultValue: 'organization_Address', readOnly: false, value: "" }
    // Add more custom input configurations as needed
  ];
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  const talentHandle = async (data) => {
    const body = {
      ...data,
      signingId: info?.signingId,
      email: info?.email,
      status: 1
    }
    const res = await handleProfileCreation(body, "talentperson");

    if (res?.status === "success") {
      ToastSuccess("Successfully Request Sent");
      setRefresh(r=>({...r, talentR:!(r.talentR)}))

    } else {
      ToastError(res?.message || "Something error");

    }
  }

  const experienceHandle = async (data) => {
    const body = {
      ...data,
      signingId: info?.signingId,
      email: info?.email,
      status: 1
    }
    const res = await handleProfileCreation(body, "experience");

    if (res?.status === "success") {
      ToastSuccess("Successfully Request Sent");
      setRefresh(r=>({...r, expR:!(r.expR)}))

    } else {
      ToastError(res?.message || "Something error");

    }
  }
  const handleMentor = async (data) => {
    const body = {
      ...data,
      signingId: info?.signingId,
      email: info?.email,
      status: 1
    }
    const res = await handleProfileCreation(body, "mentor");

    if (res?.status === "success") {
      ToastSuccess("Successfully Request Sent");
      setRefresh(r=>({...r, mentorR:!(r.mentorR)}))

    } else {
      ToastError(res?.message || "Something error");

    }
  }
  const handleOrg = async (data) => {
    const body = {
      ...data,
      signingId: info?.signingId,
      email: info?.email,
      status: 1
    }
    const res = await handleProfileCreation(body, "organization");

    if (res?.status === "success") {
      ToastSuccess("Successfully Request Sent");
      setRefresh(r=>({...r, orgR:!(r.orgR)}))

    } else {
      ToastError(res?.message || "Something error");

    }
  }
  const handleCons = async (data) => {
    const body = {
      ...data,
      signingId: info?.signingId,
      email: info?.email,
      status: 1
    }
    const res = await handleProfileCreation(body, "constituenly");

    if (res?.status === "success") {
      ToastSuccess("Successfully Request Sent");
      setRefresh(r=>({...r, consR:!(r.consR)}))

    } else {
      ToastError(res?.message || "Something error");
    }
  }

  return (
    <div>
      <div>

        <h4 className="text-xl text-black mt-6 ">You May Need : </h4>
        <div className="mt-4 flex flex-wrap gap-4 mb-8 items-center  ">
        {tal?.status==1 ?
        <p className="mb-0 pb-0 font-semibold text-blue-400 ">Talent/Apprentice Request Pending</p> :
        tal?.status==2 ? "":
        tal?.status==3 ? "":
        <div className="overflow-hidden w-fit ">
        <div>

          <Modal
            triggerButtonText="Plolitical Talent/Apprentice"
            title="Plolitical Talent/Apprentice"
            description="Elevating leaders, forging political excellence in dynamic dialogues"
            customInputs={PoliticalTalent}
            info={info}
            handlingFunction={talentHandle}
          />
        </div>
      </div>
        }

{exp?.status==1 ?
        <p className="mb-0 pb-0 font-semibold text-blue-400">Experienced Politcal Request Pending</p> :
        exp?.status==2 ? "":
        exp?.status==3 ? "":
<div className="overflow-hidden w-fit ">
            <div>
              <Modal
                triggerButtonText=" EXPERIENCED POLITICIAN"
                title="Update your profile"
                description="Add your political talent or apprentice details"
                customInputs={ExperiencePolitical}
                info={info}
                handlingFunction={experienceHandle}
              />
            </div>
          </div>
        }

{mentor?.status==1 ?
        <p className="mb-0 pb-0 font-semibold text-blue-400">Mentor Request Pending</p> :
        mentor?.status==2 ? "":
        mentor?.status==3 ? "":
<div className="overflow-hidden w-fit ">
            <div>
              <Modal
                triggerButtonText="MENTOR"
                title="Update your profile"
                description="Add your political talent or apprentice details"
                customInputs={ExperiencePolitical}
                info={info}
                handlingFunction={handleMentor}
              />
            </div>

          </div>
        }

{org?.status==1 ?
        <p className="mb-0 pb-0 font-semibold text-blue-400">Organization Request Pending</p> :
        org?.status==2 ? "":
        org?.status==3 ? "":
        <div className="overflow-hidden w-fit ">
        <div>
          <Modal
            triggerButtonText=" ORGANISATION"
            title="ORGANISATION"
            description="Add your ORGANISATION details"
            customInputs={ORGANISATION}
            info={info}
            handlingFunction={handleOrg}
          />
        </div>
      </div>
        }
         {cons?.status==1 ?
        <p className="mb-0 pb-0 font-semibold text-blue-400">Constituenly Request Pending</p> :
        cons?.status==2 ? "":
        cons?.status==3 ? "":
        <div className="overflow-hidden w-fit ">
        <div>
          <Modal
            triggerButtonText="CONSTITUENCY"
            title="Update your profile"
            description="Add your political talent or apprentice details"
            customInputs={ORGANISATION}
            info={info}
            handlingFunction={handleCons}
          />
        </div>
      </div>
        }


        </div>
      </div>
      <div className=" grid grid-cols-12  lg:gap-12 mt-[10px]">
        {/* -----work----- */}
        <div className=" lg:col-span-3 col-span-12 w-[100%]">
          <div className="border-b w-full mb-[20px]">
            <span className=" uppercase text-gray-500 font-[600] block mb-1">About</span>
          </div>
          <div className="mb-7">
            <span className=" text-gray-500 font-[600]">
              Activity in PolitQ
            </span> <br />

            <span className=" text-gray-500 text-[14px]">
              {/* {info?.accounttype == "teacher" && "Teacher"} */}
              {mentor?.status == 2 && "Mentor"}
              {tal?.status == 2 && ", Political Talent/Apprentice"}
              {exp?.status == 2 && ", Experienced Politician"}

              {org?.status == 2 && ", Organization"}
              {cons?.status == 2 && ", Constituenly"}

            </span>
          </div>

          <div className=" mb-[30px]">
            <div className=" flex gap-5 items-center mb-1">
              <span className=" text-gray-500 font-[500]">
                Description
              </span>

            </div>
            <span className=" text-gray-500 text-[14px]">
              {info?.description}
              {/* {
              exits ?'Add Your Bio':`${userdata?.description.slice(0, 120)}...`
            } */}
            </span>
          </div>
          <div className=" mb-[30px]">
            <div className=" flex gap-5 items-center mb-1">
              <span className=" text-gray-500 font-[500]">
                {/* { info?.title} */}
              </span>

            </div>
            <span className=" text-gray-500 text-[14px]">
              {/* {info?.description?.slice(0, 120)} */}

            </span>
          </div>
          <div className="border-b w-full mb-[10px]">
            <span className=" uppercase text-gray-500 font-[600] block mb-1"> Skills </span>
          </div>
          <div>
            <h2 className=" text-gray-500 text-[14px]">
              {info?.skills}
            </h2>
            {/* {
             exits ?'Add Your Skill' : userdata?.skill.map((exp:any) => (
              <h2 key={exp.id} className=" text-gray-500 text-[14px]">
                {exp.title}
              </h2>
            ))
          } */}
          </div>
        </div>
        {/* -----work----- */}
        {/* ------contact info---- */}
        <div className=" lg:col-span-9 col-span-12 w-[100%]">
          <div className="w-full mb-[30px]">
            <span className=" uppercase text-gray-500 font-[600] block mb-1 lg:mt-0 mt-4">contact information</span>
          </div>
          <div className=" w-full mb-[30px]">

            <div className=" flex mb-[15px] gap-8">
              <span className=" font-[600] text-[16px] text-gray-500">Phone:</span>
              <span className={` text-black `}>
                {
                  info?.phone
                }
              </span>
            </div>
            <div className=" flex mb-[15px] gap-8">
              <span className=" font-[600] text-[16px] text-gray-500">Email:</span>
              <span className={` text-black `}>
                {
                  userdata?.primaryEmailAddress?.emailAddress
                }
              </span>
            </div>
            <div className=" flex mb-[15px] gap-8">
              <span className=" font-[600] text-[16px] text-gray-500">Address:</span>
              <span className={` text-black `}>
                {
                  info?.address
                }
              </span>
            </div>

            {/* {
            ContactInfo.map((info) => (
              <div key={info.id} className=" flex mb-[15px] gap-8">
                <span className=" font-[600] text-[16px] text-gray-500">{info.title}:</span>
                <span className={`${info.color ? `text-[${info.color}]` : "text-gray-500"}`}>
                  {
                    info.value
                  }
                </span>
              </div>
            ))
          } */}

          </div>
          {
            info?.signingId ? <div className="overflow-hidden w-[40%]">
              <Button
                onClick={() => document.getElementById('my_modal_4').showModal()}
                className="relative z-[5] bg-blue-100 h-[40px] text-blue-700 w-full  hover:text-white" variant={'hover'}>
                Edit Profile
              </Button>
            </div> : null
          }
          {/* ------contact info---- */}
        </div>

      </div>

    </div>
  )
}

export default BasicInfo
