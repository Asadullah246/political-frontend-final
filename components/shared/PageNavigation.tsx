import { ChevronRight } from "lucide-react";
import Link from "next/link";
interface NavigationProps {
    goto?: string;
    title?: string;
}
const Navigation = ({
   goto,
    title
}:NavigationProps) => {
    return (
       <>
        {/* ----navigation------ */}
        <div className=" flex gap-2 px-8 pt-[12px] pb-[11px] items-center relative">
                 <Link href="/" className=" text-[20px] leading-[30px] font-[500]">
                  {
                        goto ? goto : "Home"
                  }
                 </Link>
                 <div>
                     <ChevronRight size={20} className=" font-[900]"/>
                 </div>
                    <span className=" text-[20px] leading-[30px] font-[500]">
                      {
                            title
                      }
                    </span>
          </div>
         {/* ----navigation------ */}
       </>
    );
};

export default Navigation;