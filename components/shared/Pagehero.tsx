import Navigation from "./PageNavigation";
interface Props {
    title: string;
    subtext?: string;
}

const Hero = ({
    title,
    subtext
}:Props) => {
    return (
        <div className=" relative block pt-[174px] z-[1]">
            <div className=" absolute bg-[url('/assets/contact-hero.jpg')] top-0 left-0 bottom-[54px] right-0 bg-cover bg-no-repeat z-[-1] bg-scroll bg-center bg-black/50 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black/60 before:content-[''] before:z-[-2]">
            </div>
            <div className=" static max-w-[1320px] px-[15px] mx-auto">
                 <div className=" grid">
                      <div className=" grid-cols-12 w-[100%]">
                             <div className=" relative block pb-[172px] text-center">
                                   <h2 className=" font-[700] md:text-[50px] leading-[50px] text-white text-[40px]">
                                     {
                                            title
                                     }
                                   </h2>
                             </div>
                      </div>
                 </div>
            </div>
             <Navigation goto="Home" title={subtext} />
        </div>
    );
};

export default Hero;