import Input from "../shared/Input";
import { Button } from "../ui/button";

const FaqContact: React.FC  = () => {
    return(<div className=" lg:col-span-4 col-span-12 pt-[30px]">
        <h2 className=" text-[24px] font-[800] ml-3">
        Asked Your Valuable Question
        </h2>
    <div className=" shadow-md rounded-[15px]  pt-[20px] pb-[50px] px-3">
          <form>
            {/* -------input ----- */}
            <div className=" grid grid-cols-12">
                 <div className=" col-span-12">
                     <div className=" mb-[20px]">
                         <Input type="text" placeholder="Your Name" />
                     </div>
                 </div>
                 <div className=" col-span-12">
                     <div className=" mb-[20px]">
                         <Input type="email" placeholder="Your Email" />
                     </div>
                 </div>
            </div>
            <div className=" grid grid-cols-12">
                 <div className=" col-span-12">
                     <div className=" mb-[20px]">
                         <Input type="number" placeholder="Phone" />
                     </div>
                 </div>
                 <div className=" col-span-12">
                     <div className=" mb-[20px]">
                         <Input type="text" placeholder="Subject" />
                     </div>
                 </div>
            </div>
            <div className=" pb-[20px]">
                <textarea className="relative block bg-white border border-[#E5E5E5] w-[100%]  text-[#676767] font-[500] text-[16px]  px-[35px] rounded-[25px] focus:outline-none h-[180px] pt-[12px] pb-[12px]"  cols={30} rows={10}></textarea>
            </div>
            {/* -------input ----- */}
            {/* -----button----- */}
            <Button className='relative z-[5] bg-[#FFC400] text-white rounded-[30px] px-[45px] leading-[60px] text-[20px] py-[26px] ' >
                Send Messages
            </Button>
            {/* -----button----- */}
          </form>
    </div>
  </div>)
}

export default FaqContact;
