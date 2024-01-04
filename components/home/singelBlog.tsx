import { Calendar, MessageSquare, User } from "lucide-react"
import { Button } from "../ui/button"

interface SingelBlogProps {
    img : string,
    date : string,
    title : string,
    description : string,
    author : string,
    id: string
} 

const SingelBlog = ({
    img,
    date,
    title,
    description,
    author,
    id
}:SingelBlogProps) => {
    return (<div className=" relative mb-[30px] w-[100%] group">
        <div className=" relative rounded-[20px] overflow-hidden z-[1]">
             <img src={img} className="w-[100%] h-[320px] img_hover_effect" alt="" />
        </div>
        <div className=" relative block bg-white shadow-lg pt-[44px] lg:px-[30px] px-[10px] pb-[30px]
         rounded-[15px] mt-[-70px] ml-[30px] mr-[30px] z-[2]
        ">
            {/* ----date box------ */}
             <div className=" absolute top-[-20px] left-[30px] flex items-center gap-1 bg-white shadow-lg rounded-[7px] pt-[7px] px-[15px] pb-[5px]">
                <Calendar className=" text-[#FFC400] h-5 w-5"/>
                <p className=" font-[500]">{date}</p>
             </div>
            {/* ----date box------ */}
            <h2 data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover" className=" font-[600] lg:text-[24px] text-[18px] leading-[30px] relative group">{title.slice(0,30)}...</h2>
            {/* -----tooltip--- */}
            <div id="tooltip-hover" role="tooltip" className="absolute z-10 invisible inline-block px-3 top-0 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 group-hover:opacity-70 group-hover:visible">
                {
                    title
                }
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
                {/* -----tooltip--- */}
            <div className=" flex gap-6 items-center mt-3">
                <div className=" flex gap-2 items-center ">
                   <User className="text-[#FFC400] h-5 w-5"/>
                   <p className=" text-gray-400">{author}</p>
                </div>
                <div className=" flex gap-2 items-center">
                   <MessageSquare className="text-[#FFC400] h-5 w-5"/>
                   <p className=" text-gray-400">0 Comment</p>
                </div>
            </div>
            <p className=" mt-4 font-normal text-gray-400">
                {description.slice(0,70)}...
            </p>
            <div className="relative overflow-hidden mt-3">
            <Button variant="outline">
                Read More
            </Button>
            </div>
        </div>
    </div>)
}

export default SingelBlog
