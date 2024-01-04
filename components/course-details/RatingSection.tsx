import { Star } from 'lucide-react';
import React from 'react';
import reviewImg3 from "../../public/assets/testimonial-v1-1 (1).jpg";
import reviewImg1 from "../../public/assets/testimonial-v1-1.jpg";
import reviewImg2 from "../../public/assets/testimonial-v1-2.jpg";
import styles from "../../styles/home.module.css";
// import NextImageType from 'next/image';
import Image from 'next/image';

interface Review {
    _id: number;
    name: string;
    rating: number; 
    image: any ;
    designation: string;
    comment: string;
}

const RatingSection: React.FC = () => {
    const reviews: Review[]  = [
        {
            _id: 1,
            name: "Robert",
            rating: 5,
            image: reviewImg1,
            designation: "politician",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias odio deleniti corrupti fugiat perferendis accusantium, officiis temporibus consequuntur reiciendis culpa."

        },
        {
            _id: 2,
            name: "James",
            rating: 4,
            image: reviewImg2,
            designation: "politician",
            comment: " adipisicing elit. Alias odio deleniti corrupti fugiat perferendis accusantium, officiis temporibus consequuntur reiciendis culpa."

        },
        {
            _id: 3,
            name: "James",
            rating: 3,
            image: reviewImg3,
            designation: "politician",
            comment: "  perferendis accusantium, officiis temporibus consequuntur reiciendis culpa adipisicing elit. Alias odio deleniti corrupti fugiat."

        },
        {
            _id: 4,
            name: "David",
            rating: 3,
            image: reviewImg2,
            designation: "politician",
            comment: "  perferendis accusantium, officiis temporibus consequuntur reiciendis culpa adipisicing elit. Alias odio deleniti corrupti fugiat."

        },
    ]
    return (
        <div>
            <div className='flex items-center gap-1'>
                <Star size={28} strokeWidth={1.5} color={"#FFC400"} className={`fill-[#FFC400]`} />
                <h3 className='text-3xl font-bold'>4.8 course rating <span className='text-base '>(20k ratings)</span></h3>
            </div>

            {/* Ratings  */}
            <div className='grid md:grid-cols-2 gap-8 gap-y-12'>
                {
                    reviews?.map((r, index) => {
                        return (
                            <div key={r._id} className=' relative border-b-2 pb-3  '
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className={`bg-white min-h-[200px] shadow-lg   p-8 ${styles.carouselDiv}`}>
                                    <div className="flex items-center">
                                        {
                                            [...Array(5)].map((a, index) => {
                                                return (
                                                    <Star key={index} size={16} strokeWidth={1.5} className={`text-[#FFC400]  ${(r.rating >= (index + 1) ? "fill-[#FFC400]" : "fill-transparent")}`} />
                                                )
                                            })
                                        }
                                    </div>
                                    <p className='mt-4 '>{r?.comment}</p>
                                </div>
                                <div className='ml-8 flex items-center mt-6 gap-4'>
                                    <Image src={r?.image} alt={r?.name} width={70} height={70} className='rounded-[50%]' />
                                    <div>
                                        <h4 className='text-xl'>{r?.name}</h4>
                                        <p>{r?.designation}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    );
};

export default RatingSection;
