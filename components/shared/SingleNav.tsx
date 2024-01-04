import Link from 'next/link';
import React from 'react';

interface TitleProps {
    courseName: string;
    className?: string;
    children?: React.ReactNode;
}

const SingleNav: React.FC<TitleProps> = ({courseName}) => {
    return (
        <div className='flex items-center gap-1 font-semibold '>
            <Link className='text-primary' href="/">Courses</Link>
            <p>{">"}</p>
            <Link className='text-primary' href="/">{courseName}</Link>

        </div>
    );
};

export default SingleNav;
