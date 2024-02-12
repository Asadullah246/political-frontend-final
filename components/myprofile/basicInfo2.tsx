import { useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import axios from "axios";
import { base } from "../shared/apis/api";

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


const BasicInfo2: React.FC<Props> = ({
  exits,
  userdata,
  id
}) => {
  const { isLoaded, isSignedIn, user } = useUser();

  const [tal, setTal] = useState([])
  const [exp, setexp] = useState([])
  const [mentor, setmentor] = useState([])
  const [org, setorg] = useState([])
  const [cons, setcons] = useState([])

  useEffect(() => {
    axios.get(`${base}/api/v1/talentperson/${userdata?.signingId}`)
      .then(data => {
        setTal(data?.data?.data)
      })
      .catch(error => {
        console.log("err", error)
      })
  }, [userdata?.signingId])
  useEffect(() => {
    axios.get(`${base}/api/v1/experience/${userdata?.signingId}`)
      .then(data => {

        setexp(data?.data?.data)
      })
      .catch(error => {
        console.log("err", error)
      })
  }, [userdata?.signingId])

  useEffect(() => {
    axios.get(`${base}/api/v1/mentor/${userdata?.signingId}`)
      .then(data => {

        setmentor(data?.data?.data)
      })
      .catch(error => {
        console.log("err", error)
      })
  }, [userdata?.signingId])


  useEffect(() => {
    axios.get(`${base}/api/v1/organization/${userdata?.signingId}`)
      .then(data => {

        setorg(data?.data?.data)
      })
      .catch(error => {
        console.log("err", error)
      })
  }, [userdata?.signingId])

  useEffect(() => {
    axios.get(`${base}/api/v1/constituenly/${userdata?.signingId}`)
      .then(data => {
        setcons(data?.data?.data)
      })
      .catch(error => {
        console.log("err", error)
      })
  }, [userdata?.signingId])

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
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
            {userdata?.description}

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
            {userdata?.skills}
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
                userdata?.phone
              }
            </span>
          </div>
          <div className=" flex mb-[15px] gap-8">
            <span className=" font-[600] text-[16px] text-gray-500">Email:</span>
            <span className={` text-black `}>
              {
                userdata?.email
                // userdata?.primaryEmailAddress?.emailAddress
              }
            </span>
          </div>
          <div className=" flex mb-[15px] gap-8">
            <span className=" font-[600] text-[16px] text-gray-500">Address:</span>
            <span className={` text-black `}>
              {
               userdata?.address
              }
            </span>
          </div>



        </div>

 
      </div>

    </div>
  )
}

export default BasicInfo2
