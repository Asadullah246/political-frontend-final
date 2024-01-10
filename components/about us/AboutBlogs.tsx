import Link from "next/link";
import SmallTitle, { LargeTitle } from "../shared/SmallComponents";
import { Button } from "../ui/button";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const AboutBlogs: React.FC = () => {
  return (
    <div className="">
        <Navbar/>
      <div className="relative w-full h-[600px]">
        {/* <div className="absolute inset-0 bg-green-950 opacity-50 z-[1] "></div> */}
        <div
          className="absolute inset-0 filter brightness-[50%] w-full h-full "
          style={{
            backgroundImage: `url(/assets/blog-v1-3.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-full h-full absolute  flex justify-center items-center z-[3] text-white text-center  ">
          <div>
            <SmallTitle className=" ">Our Blogs</SmallTitle>
            <LargeTitle className="mt-4 font-bold leading-10  tracking-wider">
              Our Blogs to <br />
              inprove your Knowledge
            </LargeTitle>
            <div className="mt-12"> 
              <a href="/blog">
                {" "}
                <Button className="relative z-[5] bg-[#FFC400] text-white rounded-[25px] p-[25px] text-[20px]">
                  See Blogs
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutBlogs;
