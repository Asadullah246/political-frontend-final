import AllCourses from "@/components/courses/AllCourses";
import Hero from "@/components/shared/Pagehero";
import Footer from "@/components/shared/Footer";

const Courses: React.FC = () => {
    return (
        <div >
            <Hero
            title="Courses" subtext='Courses' />
            <div className="container">
            <AllCourses></AllCourses>

            </div>


<Footer/>
        </div>
    );
};

export default Courses;
