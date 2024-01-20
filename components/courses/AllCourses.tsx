
import { MoveRight, Users } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { LargeTitle } from '../shared/SmallComponents';
import SingelCourse from '../shared/singelCourse';
import { db } from '@/lib/db';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';



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
    userId: string,
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





    return (
        <div>
            <Navbar />
            <div className="">
                <div>
                    <LargeTitle className='text-4xl mb-3 '>All Courses on Politics</LargeTitle>
                    {/* <p className='flex items-center mt-2'><Users size={16} /> <span>42,048,955 learners</span> </p> */}
                </div>

                <div>
                    <div className="bg-gray-100 p-8 rounded-md shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Search Courses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                            <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Enter course title"
                                />
                            </div>


                            <div className="mb-4">
                                <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">Select category</option>
                                    <option value="web">Web Development</option>
                                    <option value="design">Design</option>
                                    <option value="data">Data Science</option>
                                </select>
                            </div>


                            <div className="mb-4">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                                    Price Range
                                </label>
                                <input
                                    type="range"
                                    id="price"
                                    min="0"
                                    max="100"
                                    step="1"
                                    className="mt-1 w-full"
                                />
                                <div className="flex justify-between">
                                    <span>0</span>
                                    <span>100</span>
                                </div>
                            </div>
                        </div>


                        <button  className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
                            Search
                        </button>
                    </div>
                </div>
                <div className="mt-6 mb-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-4  md:gap-8">
                    {
                        totalCourse && totalCourse?.length > 0 ?
                        totalCourse?.map((course, index) => (
                            <SingelCourse
                                img={course?.imageUrl}
                                price={course.price}
                                title={course.title}
                                description={course.description}
                                categoryIs={categories?.find(c => c.id == course.categoryId)}
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
                        :
                        <h4 className='my-8 mx-auto text-center   font-semibold text-lg '>No course available at this moment</h4>
                    }
                </div>


                {/* <div className="w-fit text-right  ml-auto ">
                    <button className="relative z-[5] flex items-center gap-2 font-semibold hover:text-primary text-lg  "><span >see more</span>  <MoveRight size={24} color="#FFC400" strokeWidth={2.25} /></button>
                </div> */}
            </div>
            {/* <Footer/>  */}
        </div>
    );
};

export default AllCourses;
