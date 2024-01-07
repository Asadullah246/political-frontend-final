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
    getUser()
  }, [])
  console.log("info", info )
  console.log("info imaged", base+info?.logoImage )


  const getUser = async () => {
    const res = await getSiteInfo()
    const length=res?.data?.length -1
    if(length){

      setInfo(res?.data[length])
    }
  }

  return (
    <>
      {
        Active === "/about" || Active === "/" || Active === "/politicalTalent" || Active === "/contactus" || Active === "/myprofile" || Active === "/iqpage" || Active === "/faqpage" ? <footer
          ref={footerRef}
          className="bg-[#151515] text-white pb-16 footer ">

          <div className="container">


            {/* links  */}
            <div className=" pt-8  grid grid-cols-12 lg:gap-8 gap-6 text-gray-400 place-items-center">
              <div className=" lg:col-span-4 col-span-5">
                <div className="flex h-[60px] lg:w-[100%] w-[100%]">
                  <div className={`bg-[#FFC400] lg:pr-12 pr-4 h-full flex items-center lg:pl-4 pl-2 ${styles.logoDiv}`}>
                    <Image alt="Logo" height={50} width={width >= 600 ? 70 : 40} src={logo} />
                    <h3 className="lg:text-3xl text-xl ml-2 text-[#0D01E5]">{info?.websiteName}</h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-400  ">{info?.description}</p>
                <div className="mt-6">
                  <div className="flex items-center gap-4">
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
              </div>
              <div className=" lg:col-span-4 w-full col-span-7">
                <h2 className="text-2xl font-bold mb-4 text-white ">Useful Links</h2>
                <div className=" flex lg:gap-x-12 w-full">
                  <div>
                    {
                      routes.map((route, i) => (<Link key={i} href={route.href} className={`block  mt-3
                            ${Active === route.href ? `${route.activeColor} font-bold` : 'text-gray-400 hover:text-white'}
                           `} >

                        {
                          route.label
                        }
                      </Link>))
                    }
                  </div>
                  <div>
                    {
                      routes2.map((route, i) => (<Link key={i} href={route.href} className={`block  mt-3
                            ${Active === route.href ? `${route.activeColor} font-bold` : 'text-gray-400 hover:text-white'}
                           `}  >

                        {
                          route.label
                        }
                      </Link>))
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
