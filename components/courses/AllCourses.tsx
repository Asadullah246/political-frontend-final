import { MoveRight, Users } from 'lucide-react';
import React from 'react';
import { LargeTitle } from '../shared/SmallComponents';
import SingelCourse from '../shared/singelCourse';
import { db } from '@/lib/db';



interface Course {
    id: string;
    img: string;
    title: string;
    rating: number;
    review: number;
    price: string | number;
    time: string;
    student: number;
}
const AllCourses: React.FC = async() => {

    const totalCourse = await db.course.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });


      console.log("all courses", totalCourse );

    const Courses: Course[] = [{
        id: "1",
        img: '/assets/globals.jpg',
        title: 'Global Diplomacy Diplomacy in the Modern World',
        rating: 5,
        review: 10,
        price: "Free",
        time: "2:30",
        student: 100
    }, {
        id: "2",
        img: '/assets/global.jpg',
        title: 'Global Diplomacy: the United Nations in the World',
        rating: 4,
        review: 2,
        price: 12.00,
        time: "5:15",
        student: 2
    }, {
        id: "3",
        img: '/assets/health.avif',
        title: 'International Womens Health and Human Rights',
        rating: 5,
        review: 10,
        price: 19.00,
        time: "5:15",
        student: 2
    }, {
        id: "4",
        img: '/assets/japan.jpeg',
        title: 'Public Leadership Credential Developed by Harvard',
        rating: 5,
        review: 7,
        price: 17.00,
        time: "15:20",
        student: 3
    }, {
        id: "5",
        img: '/assets/5.jpg',
        title: 'New Ideas for Nonprofit Leaders Webinar',
        rating: 5,
        review: 6,
        price: 20,
        time: "5:14",
        student: 3
    }, {
        id: "6",
        img: '/assets/6.jpg',
        title: 'Political Science Degree Online Programs',
        rating: 5,
        review: 10,
        price: 30,
        time: "2:30",
        student: 100
    }]
    return (
        <div>
            <div className="mt-[80px]">
                <div>
                    <LargeTitle className='text-4xl '>Popular courses on Politics</LargeTitle>
                    <p className='flex items-center mt-2'><Users size={16}  /> <span>42,048,955 learners</span> </p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  md:gap-8">
                    {
                        Courses?.map((course, index) => (
                            <SingelCourse img={course.img} price={course.price} title={course.title} review={course.review}   key={index}  id={course.id} student={course.student} />
                        ))
                    }
                </div>


                <div className="w-fit text-right  ml-auto ">
                    <button className="relative z-[5] flex items-center gap-2 font-semibold hover:text-primary text-lg  "><span >see more</span>  <MoveRight size={24} color="#FFC400" strokeWidth={2.25} /></button>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;
