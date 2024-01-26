"use client"
import { CourseMgmt } from "../../store/Store";
// import { Input } from "../ui/input";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "../../public/assets/logo.jpg";
import styles from "../../styles/home.module.css";
import { base, getSiteInfo } from "./apis/api";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Contact, Grip, LayoutDashboard, MenuIcon, PenSquare, School, User, LucideLayoutDashboard, X } from "lucide-react";
import Topbar from "../home/Topbar";
import { MdArrowForward } from "react-icons/md";
import SectionTittle from "../sectionTittle";




interface DOMRectReadOnly {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}
interface Route {
  label: string;
  // icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  href: string;
  color: string;
  activeColor: string;
}
const routes: Route[] = [
  {
    label: 'Home',
    href: '/',
    color: 'text-sky-500',
    activeColor: 'text-sky-700'
  },
  {
    label: 'Courses',

    href: '/courses',
    color: 'text-orange-700',
    activeColor: 'text-orange-900'
  }, {
    label: 'About Us',

    href: '/about',
    color: 'text-green-500',
    activeColor: 'text-green-700'
  }, {
    label: 'Political Talent',

    href: '/politicalTalent',
    color: 'text-red-500',
    activeColor: 'text-red-700'
  }

]

const routes2: Route[] = [
  {
    label: 'Contact Us',

    href: '/contactus',
    color: 'text-yellow-500',
    activeColor: 'text-yellow-700'
  }, {
    label: 'My Profile',

    href: '/myprofile',
    color: 'text-blue-500',
    activeColor: 'text-blue-700'
  }, {
    label: 'PolitIQ Test',
    href: '/iqpage',
    color: 'text-purple-500',
    activeColor: 'text-purple-700'
  },
  {
    label: 'FaQ',
    href: '/faqpage',
    color: 'text-purple-500',
    activeColor: 'text-purple-700'
  }
]

const Footer: React.FC = () => {
  const { isSticky, setIsSticky, isFooterVisible, setIsFooterVisible } = CourseMgmt((state) => state)

  // const footerRef = useRef(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  // const [isFooterVisible, setIsFooterVisible] = useState(false);

  const Active = usePathname();
  const [width, setWidth] = useState(0);
  // Function to update the width
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };
  useEffect(() => {
    // Attach the width listener when the component mounts
    window.addEventListener('resize', updateWidth);
    // Remove the width listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [width]);
  const checkFooterVisibility = () => {
    if (!footerRef.current) return;

    const footerRect = footerRef.current.getBoundingClientRect() as DOMRectReadOnly;
    const windowHeight = window.innerHeight;

    // Check if the top edge of the footer is within the viewport's height
    const isVisible = footerRect.top <= windowHeight;

    // setIsFooterVisible(isVisible);
    setIsFooterVisible(isVisible)
    if (isVisible) {
      setIsSticky(3)
    }
    else {
      // setIsSticky(2)
    }

  };

  useEffect(() => {
    checkFooterVisibility(); // Check footer visibility initially

    const handleScroll = () => {
      checkFooterVisibility(); // Check footer visibility on scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  const [info, setInfo] = useState()
  useEffect(() => {
    const getUser = async () => {
      const res = await getSiteInfo()
      const length = res?.data?.length - 1
      if (length) {

        setInfo(res?.data[length])
      }
    }

    getUser()
  }, [])
  // console.log("info", info )





  const constituency = [
    {
      id: 1,
      text: "Create profile as constituency or Organization",
      link: "/myprofile"
    },
    {
      id: 2,
      text: "Search for political talent",
      link: "/politicalTalent"
    },
    {
      id: 3,
      text: "Managed Matchmaking",
      link: "/myprofile"
    },
    {
      id: 4,
      text: "Need to arrange Training or Workshop or Seminar",
      link: "/myprofile"
    },
    {
      id: 5,
      text: "Arrange Consultancy",
      link: "/myprofile"
    },
    {
      id: 6,
      text: "Take on Political Apprentices",
      link: "/myprofile"
    },
    {
      id: 7,
      text: "Partner with PolitIQ",
      link: "/myprofile"
    }
  ];

  const politician = [

    {
      id: 1,
      text: "Create profile",
      link: "/myprofile"
    },
    {
      id: 2,
      text: "Take PolitIQ Test free",
      link: "/iqpage"
    },
    {
      id: 3,
      text: "Apply for political internship",
      link: "/myprofile"
    },
    {
      id: 4,
      text: "Councilor courses",
      link: "/courses"
    },
    {
      id: 5,
      text: "LG Chairmen courses",
      link: "/courses"
    },
    {
      id: 6,
      text: "House of Assembly member courses",
      link: "/courses"
    },
    {
      id: 7,
      text: "House of Representatives member courses",
      link: "/courses"
    },
    {
      id: 8,
      text: "Senator courses",
      link: "/courses"
    },
    {
      id: 9,
      text: "Courses for Governors, Presidents, others",
      link: "/courses"
    }
  ];

  const othersNav = [

    {
      id: 1,
      text: "Contribute with curated courses",
      link: "/myprofile"
    },
    {
      id: 2,
      text: "Be a Mentor",
      link: "/be-mentor"
    },
    {
      id: 3,
      text: "Take on Political Apprentices",
      link: "/myprofile"
    },
    {
      id: 4,
      text: "Collaborate or partner with PolitIQ",
      link: "/myprofile"    },
    {
      id: 5,
      text: "Political Apprenticeship",
      link: "/myprofile"    },
    {
      id: 6,
      text: "Partner with PolitIQ",
      link: "/myprofile"    },
    {
      id: 7,
      text: "Build a Political Team/Staff",
      link: "/myprofile"    },

  ];
  const navLinks=[
    {
      id: 9,
      text: "Home",
      link: "/"
    },
    {
      id: 10,
      text: "Contact Us",
      link: "/contactus"
    },
    {
      id: 11,
      text: "About Us",
      link: "/about"
    },
    {
      id: 11,
      text: "FAQ",
      link: "/faqpage"
    },
  ]

  return (
    <>
      <div className=" p-6    bg-[#151515] text-white ">
        <div>
        <SectionTittle title="  SERVICES" description="See Our All Services" span="" />
          <div

            // onMouseEnter={showDiv}
            // onMouseLeave={hideDiv}
            className="w-full  top-[85px] z-10 px-3  pb-6  left-0  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-6  " id="">
            <div>
              <p className="text-lg font-semibold mt-0 lg:mt-0 text-[#FFC400]"   >Constituency/Organization</p>

              {
                constituency?.map((singleC, index) => {
                  return (
                    <a key={index} href={singleC?.link} className={`ml-2 mt-2 flex items-start gap-2 hover:text-[#FFC400] transition ease-in-out duration-300  ${!(singleC?.link) ? "opacity-50 cursor-not-allowed" : ""}`}>
                      <MdArrowForward class="block mt-[5px] " style={{}} />
                      <span className="">{singleC?.text}</span>
                    </a>
                  )
                })
              }
            </div>
            <div>
              <p className="text-lg font-semibold  mt-8 lg:mt-0  text-[#FFC400]"  >Politician (new or experienced)</p>

              {
                politician?.map((singleC, index) => {
                  return (
                    <a key={index} href={singleC?.link} className={`ml-2 mt-2 flex items-start gap-2 hover:text-[#FFC400] transition ease-in-out duration-300  ${!(singleC?.link) ? "opacity-50 cursor-not-allowed" : ""}`}>
                      <MdArrowForward class="block mt-[5px] " style={{}} />
                      <span className="">{singleC?.text}</span>
                    </a>
                  )
                })
              }

            </div>
            <div>
              <p className="text-lg font-semibold  mt-8 lg:mt-0 text-[#FFC400]"  >Others</p>

              {
                othersNav?.map((singleC, index) => {
                  return (
                    <a key={index} href={singleC?.link} className={`ml-2 mt-2 flex items-start gap-2 hover:text-[#FFC400] transition ease-in-out duration-300  ${!(singleC?.link) ? "opacity-50 cursor-not-allowed" : ""}`}>
                      <MdArrowForward class="block mt-[5px] " style={{}} />
                      <span className=" ">{singleC?.text}</span>
                    </a>
                  )
                })
              }

            </div>



          </div>

        </div>
        <div style={{borderBottom:"1px solid"}} className=" border-gray-400 w-full "></div>
      </div>
      {
        Active === "/about" || Active === "/" || Active === "/politicalTalent" || Active === "/contactus" || Active === "/myprofile" || Active === "/iqpage" || Active === "/faqpage" || Active !=='/dashboard' ? <footer
          ref={footerRef}
          className="bg-[#151515] text-white pb-16 footer ">

          <div className="container">


            {/* links  */}
            <div className=" pt-8  grid grid-cols-12 lg:gap-8 gap-6 text-gray-400 place-items-start">
              <div className=" lg:col-span-4 col-span-5">
                <div className="flex h-[60px] lg:w-[100%] w-[100%]">
                  <div className={`bg-[#FFC400] lg:pr-12 pr-4 h-full flex items-center lg:pl-4 pl-2 ${styles.logoDiv}`}>

                    {
                      info?.logoImage &&
                      <Image alt="Logo" height={50} width={width >= 600 ? 70 : 40} src={`${base}${info?.logoImage}`} />

                    }
                    <h3 className="lg:text-3xl text-xl ml-2 text-[#0D01E5]">{info?.websiteName}</h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-400  ">{info?.description}</p>
                <div className="flex items-center gap-4 mt-6 ">
                    <a href="https://facebook.com" target="_blank" className="bg-[#4D4E51] p-3  w-fit rounded-[50%]">
                      <Facebook strokeWidth={0.5} size={16} style={{ fill: "white" }} className="text-white " />

                    </a>
                    <a href="https://twitter.com" target="_blank" className="bg-[#4D4E51] p-3  w-fit rounded-[50%]">

                      <Twitter strokeWidth={0.5} size={16} style={{ fill: "white" }} className="text-white " />

                    </a>
                    <a href="https://instagram.com" target="_blank" className="bg-[#4D4E51] p-3  w-fit rounded-[50%]">
                      <Instagram strokeWidth={3} size={16} style={{ fill: "black" }} className="text-white " />
                    </a>
                  </div>

              </div>
              <div className="ml-6 lg:ml-0 lg:col-span-4 w-full col-span-7">
              <div className="">
              <h2 className="text-2xl font-bold text-white">Links</h2>
                  <div className="mt-4 ">
                  {
                navLinks?.map((singleC, index) => {
                  return (
                    <a key={index} href={singleC?.link} className={`ml-2 mt-2 flex items-start gap-2 hover:text-[#FFC400] transition ease-in-out duration-300  ${!(singleC?.link) ? "opacity-50 cursor-not-allowed" : ""}`}>
                      <MdArrowForward class="block mt-[5px] " style={{}} />
                      <span className="">{singleC?.text}</span>
                    </a>
                  )
                })
              }

                  </div>
                </div>

              </div>

              <div className=" lg:col-span-4 col-span-12">

                <h2 className="text-2xl font-bold text-white">Contact</h2>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur</p>
                <div className="mt-6 text-white ">
                  <div className="flex items-center gap-2 mb-3 ">
                    <MapPin strokeWidth={2} size={20} style={{ fill: "black" }} className="text-[#FFC400]  " />
                    <p className="mb-0 pb-0">{info?.address}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-3 ">
                    <Mail strokeWidth={2} size={20} style={{ fill: "black" }} className="text-[#FFC400]  " />
                    <p className="mb-0 pb-0">{info?.email}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-3 ">
                    <Phone strokeWidth={2} size={20} style={{ fill: "black" }} className="text-[#FFC400]  " />
                    <p className="mb-0 pb-0">{info?.phone}</p>
                  </div>
                </div>
              </div>
            </div>



            <div>

            </div>
          </div>

        </footer > : null
      }
    </>
  );
};

export default Footer;
