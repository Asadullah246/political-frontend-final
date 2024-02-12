import React from 'react';
import SingelCourse from '../shared/singelCourse';


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

const MoreCourses: React.FC = () => {
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
            <h3 className='text-3xl font-bold tracking-wide'>More courses by <span className='text-secondary1'>Asad</span></h3>
            <div className='mt-6 grid lg:grid-cols-2 gap-4 grid-cols-1 sm:grid-cols-2'>
            {
                        Courses?.map((course, index) => (
                            <SingelCourse img={course.img} price={course.price} title={course.title} review={course.review}
                            //  rating={course.rating}
                              key={index}
                            //    time={course.time}
                                id={course.id} student={course.student} />
                        ))
                    }
            </div>

        </div>
    );
};

export default MoreCourses;
