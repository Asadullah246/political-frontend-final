import AllCourses from "@/components/courses/AllCourses";
import Hero from "@/components/shared/Pagehero";


const Courses: React.FC = () => {
    return (
        <div >
            <Hero
            title="Courses" subtext='Courses' />
            <div className="container">
            <AllCourses></AllCourses>
            </div>



        </div>
    );
};

export default Courses;
