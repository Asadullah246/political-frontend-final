import { cn } from "@/lib/utils";
import React from "react";
import { InputProps } from "../ui/input";

const Input = React.forwardRef<HTMLInputElement,InputProps>(({
    className,type,...props
},ref)=>{
    return (
        <input ref={ref} type={type} className={cn(" relative block bg-white border border-[#E5E5E5] focus:border-[#0c01e574] w-[100%] h-[50px] text-[#676767] font-[500] text-[16px]  px-[35px] rounded-[25px] focus:outline-none",className)} {...props} />
    )
})

Input.displayName = "Input";

export default Input;