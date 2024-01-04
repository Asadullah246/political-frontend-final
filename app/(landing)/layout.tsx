import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const LandingLayout = ({ children }:{
    children: React.ReactNode
}) => {
    return(
        <div className=""> 
        
           <div>
       
           {
                children
            }
           
           </div>
           
        </div>
    )
}

export default LandingLayout;
