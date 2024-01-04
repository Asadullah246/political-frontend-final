"use client"
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Contact, Grip, LayoutDashboard, MenuIcon, PenSquare, School, User, LucideLayoutDashboard, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "../../public/assets/logo.jpg";
import styles from "../../styles/home.module.css";
import Topbar from "../home/Topbar";
import { MdArrowForward } from "react-icons/md";

interface Route {
  label: string;
  // icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  icon: any;
  href: string;
  color: string;
  activeColor: string;
}

const routes: Route[] = [
  //  {
  //   label:'Home',
  //   icon:LayoutDashboard,
  //   href:'/',
  //   color:'text-sky-500',
  //   activeColor:'text-sky-700'
  //  },
  {
    label: 'About Us',
    icon: Grip,
    href: '/about',
    color: 'text-green-500',
    activeColor: 'text-green-700'
  },
  //  {
  //   label:'Political Talent',
  //   icon:PenSquare,
  //   href:'/politicalTalent',
  //   color:'text-red-500',
  //   activeColor:'text-red-700'
  //  },
  //  {
  //   label:'Contact Us',
  //   icon:Contact,
  //   href:'/contactus',
  //   color:'text-yellow-500',
  //   activeColor:'text-yellow-700'
  //  },
  //  {
  //   label:'My Profile',
  //   icon:User,
  //   href:'/myprofile',
  //   color:'text-blue-500',
  //   activeColor:'text-blue-700'
  //  },
  {
    label: 'What you want',
    icon: User,
    href: '/',
    color: 'text-blue-500',
    activeColor: 'text-blue-700'
  },
  {
    label: 'PolitIQ Test',
    icon: School,
    href: '/iqpage',
    color: 'text-purple-500',
    activeColor: 'text-purple-700'
  },
  {
    label: 'Dashboard',
    icon: LucideLayoutDashboard,
    href: '/dashboard',
    color: 'text-orange-700',
    activeColor: 'text-orange-900'
  },
]
const Navbar: React.FC = () => {
  const pathName = usePathname()
  const [open, setOpen] = useState(false);
  const [hight, setHight] = useState(
    typeof window !== 'undefined' && localStorage.getItem('scrollHeight') ? parseInt(localStorage.getItem('scrollHeight') as string, 10) : 0
  )
  const [width, setWidth] = useState(
    typeof window !== 'undefined' && localStorage.getItem('width') ? parseInt(localStorage.getItem('width') as string, 10) : 0
  );

  const [isVisible, setIsVisible] = useState(false);
  const visibleDivRef = useRef(null);
  const visibleDivRef2 = useRef(null);

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const handleClickOutside = (event: any) => {
    if (visibleDivRef.current && !visibleDivRef.current.contains(event.target)) {
      if (visibleDivRef2.current && !visibleDivRef2.current.contains(event.target)) {

        setIsVisible(false);
      }
      // setIsVisible(false);
    }
  };




  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', updateScrollHeight);
    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', updateScrollHeight);
    };
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathName]);
  useEffect(() => {
    // Attach the width listener when the component mounts
    window.addEventListener('resize', updateWidth);
    // Remove the width listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [width]);



  // Function to toggle the menu
  const Toggle = () => {
    setOpen(!open);
  }
  // Function to update the width
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
    // Store the new width in localStorage
    localStorage.setItem('width', newWidth.toString());
  };

  // Function to update the scroll height
  const updateScrollHeight = () => {
    const newScrollHeight = window.scrollY;
    setHight(newScrollHeight);
    // Store the new scrollHeight in localStorage
    localStorage.setItem('scrollHeight', newScrollHeight.toString());
  };

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    console.log("visi", isVisible);
  };


  const constituency = [
    "Create my profile as constituency or Organization",
    "Search for political talent",
    "Managed Matchmaking",
    "Need to arrange Training or Workshop or Seminar",
    "Arrange Consultancy",
    "Take on Political Apprentices",
    "Partner with PolitIQ",
  ]
  const politician = [
    "Create my profile",
    "Take PolitIQ Test free",
    "Apply for political internship",
    "Councilor courses",
    "LG Chairmen courses",
    "House of Assembly member   courses",
    "House of Representatives member courses",
    "Senator courses",
    "Courses for Governors, Presidents, others",
  ]
  const othersNav = [
    "I want to contribute with curated courses",
    "I want to be a Mentor",
    "I want to take on Political Apprentices",
    "I want to collaborate or partner with PolitIQ",
    "I want to go on Political Apprenticeship",
    "I want to Partner with PolitIQ",
    "I need PollitIQ to build me a Plitical Team/Staff",
    "I need to contact PolitIQ",
  ]


  return (
    <>

      {
        pathName === "/about" || pathName === "/" || pathName === "/politicalTalent" || pathName === "/contactus" || pathName === "/myprofile" || pathName === "/iqpage" || pathName === "/faqpage" ? <div className={`w-full ${hight >= 210 && hight < 3000 ? 'navBar_scroll_active z-[999]' : hight >= 140 || hight > 3000 ? 'navBar_scroll z-[9999]' : ''}`}>
          <div>
            <Topbar />
          </div>
          <div className={`flex h-[85px] relative overflow-visible  w-full   items-center justify-between pr-8 shadow-lg bg-white`} >
            <div className="flex h-full lg:w-[30%] w-[40%]">
              <div className={`bg-[#FFC400] pr-12 h-full flex items-center lg:pl-4 pl-2 ${styles.logoDiv}`}>
                <Image alt="Logo" height={50} src={logo} />
                <h3 className="lg:text-3xl text-xl ml-2 text-[#0D01E5]">PolitIQ</h3>
              </div>
            </div>

            <div className="  w-[100%] justify-center lg:flex hidden   ">
              {routes.map((route, i) => (

                <>
                  {
                    route?.label == "What you want" ?
                      <Link
                      onClick={toggleVisibility}
                      
                        ref={visibleDivRef2}
                        href={route.href} key={i}
                        id="specificChild"
                        className={cn("text-sm group flex p-2 justify-end font-medium cursor-pointer rounded-lg transition group-hover:text-black   ", pathName === route.href ? `${route.activeColor} text-[15px]` : '')}

                      >
                        <div className=" flex items-center flex-1 gap-3">
                          {
                            route.label
                          }

                          {/* -------route icon------- */}
                          <route.icon className={cn("h-[16px] w-[16px] mr-3", pathName === route.href ? `${route.activeColor} h-[18px] w-[18px]` : route.color)} />
                          {/* -------route icon------- */}
                        </div>

                      </Link>
                      :
                      <Link
                        href={route.href} key={i}
                        id="specificChild"
                        className={cn("text-sm group flex p-2 justify-end font-medium cursor-pointer rounded-lg transition group-hover:text-black   ", pathName === route.href ? `${route.activeColor} text-[15px]` : '')}

                      >
                        <div className=" flex items-center flex-1 gap-3">
                          {
                            route.label
                          }
                          {/* -------route icon------- */}
                          <route.icon className={cn("h-[16px] w-[16px] mr-3", pathName === route.href ? `${route.activeColor} h-[18px] w-[18px]` : route.color)} />
                          {/* -------route icon------- */}
                        </div>

                      </Link>
                  }
                </>

              ))}
              <div>
              </div>
            </div>
            {/* ------small screen menu--- */}

            <div className={`z-[200] ${open ? "w-[80%] min-h-[300px] bg-white  absolute top-[100%]  py-8  rounded-b-md px-2 lg:hidden block active shadow-md" : "menu_open_smooth  w-[400px] min-h-[300px] bg-white absolute top-[100%] z-[200] py-8  rounded-b-md px-2 lg:hidden block "}}`}

            >
              {routes.map((route, i) => (
                <div className={` w-full h-full py-3 rounded-md  ${pathName === route.href ? ' bg-[#E7E7FF]' : ''}`}
                  key={i}
                >
                  {
                    route?.label == "What you want" ?
                      <Link
                        href={route.href}
                        className={cn("text-sm group flex pl-4 justify-center font-medium cursor-pointer rounded-lg transition text-gray-700  group-hover:text-black", pathName === route.href ? `${route.activeColor}font-bold` : '')}
                      >
                        <div className=" flex items-center flex-1 gap-3 text-[18px]">
                          {/* -------route icon------- */}
                          <route.icon className={cn("h-[20px] w-[20px] mr-1", pathName === route.href ? route.activeColor : route.color)} />
                          {/* -------route icon------- */}
                          {
                            route.label
                          }
                          text

                        </div>
                      </Link> :
                      <Link
                        href={route.href}
                        className={cn("text-sm group flex pl-4 justify-center font-medium cursor-pointer rounded-lg transition text-gray-700  group-hover:text-black", pathName === route.href ? `${route.activeColor}font-bold` : '')}
                      >
                        <div className=" flex items-center flex-1 gap-3 text-[18px]">
                          {/* -------route icon------- */}
                          <route.icon className={cn("h-[20px] w-[20px] mr-1", pathName === route.href ? route.activeColor : route.color)} />
                          {/* -------route icon------- */}
                          {
                            route.label
                          }

                        </div>
                      </Link>
                  }
                </div>
              ))}
            </div>

            {/* ------small screen menu--- */}
            <div className=" lg:hidden flex justify-end w-[40%] cursor-pointer"
              onClick={Toggle}
            >
              {
                open ? <X className="h-10 w-14" /> : <MenuIcon className="h-10 w-14" />

              }
            </div>
            <div className=" flex items-center justify-end">
              <UserButton afterSignOutUrl="/sign-in" />
              {/**/}
            </div>

            {isVisible &&
              <div
              ref={visibleDivRef}
                // onMouseEnter={showDiv}
                // onMouseLeave={hideDiv}
                className="w-full absolute top-[85px] z-10 px-3 pt-3 pb-6  left-0 bg-white grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-6  " id="">
                <div>
                  <p className="text-lg font-semibold  "  >I am a Constituency/Organization</p>

                  {
                    constituency?.map((singleC, index) => {
                      return (
                        <a key={index} href="" className="ml-2 mt-2 flex items-start gap-2 hover:text-[#FFC400] transition ease-in-out duration-300 ">
                          <MdArrowForward class="block mt-[5px] " style={{}} />
                          <span className="">{singleC}</span>
                        </a>
                      )
                    })
                  }
                </div>
                <div>
                  <p className="text-lg font-semibold  "  >I am a Constituency/Organization</p>

                  {
                    politician?.map((singleC, index) => {
                      return (
                        <a key={index} href="" className="ml-2 mt-2 flex items-start gap-2 hover:text-[#FFC400] transition ease-in-out duration-300 ">
                          <MdArrowForward class="block mt-[5px] " style={{}} />
                          <span className="">{singleC}</span>
                        </a>
                      )
                    })
                  }

                </div>
                <div>
                  {/* <p className="text-lg font-semibold  "  >I am a Constituency/Organization</p> */}

                  {
                    othersNav?.map((singleC, index) => {
                      return (
                        <a key={index} href="" className="ml-2 mt-2 flex items-start gap-2 hover:text-[#FFC400] transition ease-in-out duration-300 ">
                          <MdArrowForward class="block mt-[5px] " style={{}} />
                          <span className=" ">{singleC}</span>
                        </a>
                      )
                    })
                  }

                </div>



              </div>}
          </div>
        </div> : <></>
      }
    </>
  );
};

export default Navbar;
