import { MoveRight, Users } from 'lucide-react';
import React from 'react';
import { LargeTitle } from '../shared/SmallComponents';
import SingelCourse from '../shared/singelCourse';
import { db } from '@/lib/db';



interface Course {
    id: string,
    title: string,
    imageUrl: string,
    rating?: [],
    review?: number,
    description?: string,
    categoryId?: any,
    category?: any,
    attachments?: any,
    purchases?: any,
    createdAt?: any,
    chapters?: any,
    price: number | string,
    time?: [],
    student?: number,
}
interface Single {
    id: string,
    userId:string,
    title: string,
    imageUrl: string | null,
    rating?: [],
    review?: number,
    description?: string | null,
    categoryId?: any,
    category?: any,
    attachments?: any,
    purchases?: any,
    createdAt?: any,
    chapters?: any,
    price: number | string | null,
    time?: [],
    student?: number,

}
const AllCourses: React.FC = async () => {

    const totalCourse: Single[] = await db.course.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    // console.log("all courses", totalCourse);
    const categories = await db.category.findMany({
        orderBy: {
            name: "asc"
        }
    });


    // const getCategory=async(catId:any)=>{
    //     const categories = await db.category.findMany({
    //         orderBy: {
    //             name: "asc"
    //         }
    //     });
    //     // console.log("all cat", categories)
    //     const findExact= await categories?.find(c=>c.id==catId)
    //     console.log("dat is",catId, findExact )
    //       return findExact ;
    // }


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
                    <p className='flex items-center mt-2'><Users size={16} /> <span>42,048,955 learners</span> </p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  md:gap-8">
                    {
                        totalCourse?.map((course, index) => (
                            <SingelCourse
                             img={course?.imageUrl}
                             price={course.price}
                             title={course.title}
                             description={course.description}
                             categoryIs={categories?.find(c=>c.id==course.categoryId)}
                            //  review={course.review}
                            key={course.id}
                            id={course.id}
                            categoryId={course.categoryId}
                            category={course.category}
                            chapters={course.chapters}
                            attachments={course.attachments}
                            purchases={course.purchases}
                            createdAt={course.createdAt}
                                // student={course.student}

                                />
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
