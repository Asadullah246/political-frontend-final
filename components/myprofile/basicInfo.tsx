import { useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";

interface Experience {
  id: number;
  title: string;
}
interface Props {
  exits?: boolean
  userdata?: any
}
interface ContactInfo {
  id: number;
  title: string;
  value: string;
  color?: string;
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
  userdata
}) => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  const ContactInfo: ContactInfo[] = [{
    id: 1,
    title: "Phone",
    value: exits  ? "Add Your Phone Number"  : userdata?.phone_number
  }, {
    id: 2,
    title: "Email",
    value: exits ?user.emailAddresses[0].emailAddress :userdata?.email,
    color: '#2578F0'
  }, {
    id: 3,
    title: "Address",
    value: exits ? "Add Your Address" : userdata?.address
  }]
  return (
    <div className=" grid grid-cols-12  lg:gap-12 mt-[10px]">
      {/* -----work----- */}
      <div className=" lg:col-span-3 col-span-12 w-[100%]">
        <div className="border-b w-full mb-[20px]">
          <span className=" uppercase text-gray-500 font-[600] block mb-1">work</span>
        </div>
        <div className=" mb-[30px]">
          <div className=" flex gap-5 items-center mb-1">
            <span className=" text-gray-500 font-[500]">
              Description
            </span>

          </div>
          <span className=" text-gray-500 text-[14px]">
            {
              exits ?'Add Your Bio':`${userdata?.description.slice(0, 120)}...`
            }
          </span>
        </div>
        <div className=" mb-[30px]">
          <div className=" flex gap-5 items-center mb-1">
            <span className=" text-gray-500 font-[500]">
              { userdata?.tittle}
            </span>

          </div>
          <span className=" text-gray-500 text-[14px]">
            {
              exits ?'':`${userdata?.description.slice(0, 120)}...`
            }

          </span>
        </div>
        <div className="border-b w-full mb-[10px]">
          <span className=" uppercase text-gray-500 font-[600] block mb-1">{ userdata?.skill.length} Skills </span>
        </div>
        <div>
          {
             exits ?'Add Your Skill' : userdata?.skill.map((exp:any) => (
              <h2 key={exp.id} className=" text-gray-500 text-[14px]">
                {exp.title}
              </h2>
            ))
          }
        </div>
      </div>
      {/* -----work----- */}
      {/* ------contact info---- */}
      <div className=" lg:col-span-9 col-span-12 w-[100%]">
        <div className="w-full mb-[30px]">
          <span className=" uppercase text-gray-500 font-[600] block mb-1 lg:mt-0 mt-4">contact information</span>
        </div>
        <div className=" w-full mb-[30px]">
          {
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
          }

        </div>
        {
          exits ?<div className="overflow-hidden w-[40%]"> 
          <Button
          onClick={() => document.getElementById('my_modal_4').showModal()}
           className="relative z-[5] bg-blue-100 h-[40px] text-blue-700 w-full  hover:text-white" variant={'hover'}>
            Edit Profile
          </Button>
        </div>:null
        }
        {/* ------contact info---- */}
      </div>

    </div>
  )
}

export default BasicInfo
