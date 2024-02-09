import { useUser } from "@clerk/nextjs";
// import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import axios from "axios";
import { base } from "../shared/apis/api";

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

  const [modalName, setModalName]=useState()
  useEffect(() => {
    axios.get(`${base}/api/v1/user/${id}`)
      .then(data => {
        // console.log("data", data?.data?.data)
        setInfo(data?.data?.data)
      })
      .catch(error => {
        console.log("err", error)
      })
  }, [id])
  console.log("info", info)
  const Apprentice = [
    { defaultValue: 'ParticipantName', readOnly: true },
    // Add more custom input configurations as needed
  ];
  const PoliticalTalent = [
    { defaultValue: 'PoliticalTalentName', readOnly: true,value:info?.name },
    { defaultValue: 'skills', readOnly: false, value:info?.skills },
    { defaultValue: 'Experiences', readOnly: false ,value:info?.experiences},
    { defaultValue: 'Location', readOnly: false,value:info?.address},
    { defaultValue: 'CurrentDesignation', readOnly: false, value:""}
    // Add more custom input configurations as needed
  ]
  const ExperiencePolitical =[
    { defaultValue: 'Name', readOnly: true,
    value:info?.name},
    { defaultValue: 'skills', readOnly: false, value:info?.skills },
    { defaultValue: 'Experiences', readOnly: false ,value:info?.experiences},
    { defaultValue: 'Location', readOnly: false,value:info?.address},
    { defaultValue: 'CurrentDesignation', readOnly: false, value:""}

  ]

  const ORGANISATION = [
    { defaultValue: 'OrganisationName', readOnly: false, value:"" },
    {defaultValue: 'OrganisationDetiles', readOnly: false, value:""},
    {defaultValue: 'OrganisationAddress', readOnly: false, value:""}
    // Add more custom input configurations as needed
  ];
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div>

      {/* buttons  */}
      <div>



        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Share</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
              </div>
              <Button type="submit" size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>




        <h4 className="text-xl text-black ">You may want : </h4>
        <div className="mt-4 flex flex-wrap gap-4 mb-8  ">

          <div className="overflow-hidden w-fit ">
          <div>
          <Modal
        triggerButtonText="Plolitical Talent/Apprentice"
        title="Plolitical Talent/Apprentice"
        description="Elevating leaders, forging political excellence in dynamic dialogues"
        customInputs={PoliticalTalent}
        info={info}
      />
          </div>
          </div>
          <div className="overflow-hidden w-fit ">
          <div>
          <Modal
        triggerButtonText=" EXPERIENCED POLITICIAN"
        title="Update your profile"
        description="Add your political talent or apprentice details"
        customInputs={ExperiencePolitical}
        info={info}
           />
          </div>
          </div>
          <div className="overflow-hidden w-fit ">
          <div>
          <Modal
        triggerButtonText="MENTOR"
        title="Update your profile"
        description="Add your political talent or apprentice details"
        customInputs={ExperiencePolitical}
        info={info}
           />
          </div>

          </div>
          <div className="overflow-hidden w-fit ">
          <div>
          <Modal
        triggerButtonText=" ORGANISATION"
        title="ORGANISATION"
        description="Add your ORGANISATION details"
        customInputs={ORGANISATION}
        info={info}
           />
          </div>
          </div>
          <div className="overflow-hidden w-fit ">
          <div>
          <Modal
        triggerButtonText="CONSTITUENCY"
        title="Update your profile"
        description="Add your political talent or apprentice details"
        customInputs={ORGANISATION}
        info={info}
           />
          </div>
          </div>
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
              {info?.accounttype == "teacher" && "Teacher"}, {" "}
              {info?.talent == "approved" && "Talent"},

            </span>
          </div>

          <div className=" mb-[30px]">
            <div className=" flex gap-5 items-center mb-1">
              <span className=" text-gray-500 font-[500]">
                Description
              </span>

            </div>
            <span className=" text-gray-500 text-[14px]">
              {info?.description?.slice(0, 120)}
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
