import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';


const Topbar: React.FC = () => {
    return (
        <div className='bg-[#151515] flex justify-between items-center h-14 text-slate-300 pr-20'>
            <div className=' flex gap-4  pl-8 '>
                <a href="#" className='inline-flex gap-1 items-center '>
                    <IoIosMail style={{color:"#FFC400",height:"20px", width:"auto"}}/>
                    {/* <AiOutlineMail style={{color:"#FFC400",height:"20px", width:"auto"}}/> */}
                    <span>sample@gmail.com</span>
                </a>

                <a className='inline-flex  items-center ' href="facebook.com"><FaFacebookF style={{height:"13px", }}/></a>
                <a className='inline-flex  items-center ' href="facebook.com"><FaTwitter style={{height:"16px", }}/></a>
                <a className='inline-flex  items-center ' href="facebook.com"><BsInstagram style={{height:"13px", }}/></a>

            </div>
            {/* <div className='flex items-center gap-4'>
            <Button className="bg-[#FFC400] text-black text-lg hover:text-white transition-all whitespace-nowrap">Contact Us</Button>
            </div> */}


        </div>
    );
};

export default Topbar;
