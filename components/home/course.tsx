import { MoveRight } from "lucide-react";
import SectionTittle from "../sectionTittle";
import SingelCourse from "../shared/singelCourse";
// import { auth } from "@clerk/nextjs";

interface CourseItem {
    _id: string;
    name: string;
    description: string;
    imageThumb: string;
    learning: [];
    ownerName: string;
    premium: boolean;
    price: number;
    purchaseStudent: [];
    ratings: [];
    totalStudent: number;
    videosUrl: [];
}
interface Props {
    allCourse?: CourseItem[]
}
const Course: React.FC<Props> = ({
    allCourse
}) =>

{
    // const {userId} = auth()
    // console.log(userId)
    return (<div className=" px-8 mt-[120px]">
        <SectionTittle title="COURSES" description="Explore Popular Courses" span="" />
        <div className=" grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  md:gap-8  px-2">
            {
                allCourse?.slice(0, 4).map((course, index) => (
                    <SingelCourse img={course.imageThumb} price={course.price} title={course.name} review={course.ratings.length} rating={course.ratings} key={index} time={course.videosUrl} id={course._id} student={course.totalStudent} />
                ))
            }
        </div>


        <div className="w-fit text-right  ml-auto ">
           <button className="relative z-[5] flex items-center gap-2 font-semibold hover:text-primary text-lg  "><span >see more</span>  <MoveRight size={24} color="#FFC400" strokeWidth={2.25} /></button>
        </div>
    </div>)
}

export default Course;
