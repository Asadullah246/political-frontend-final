
import React from "react"

interface TitleProps {
    text?: string;
    className?: string;
    children?: React.ReactNode; 
}

const SmallTitle: React.FC<TitleProps> = ({ className, children }) => {
    return (
        <h5 className={`text-base  text-primary1 uppercase tracking-wider ${className}`}>{children}</h5>
    );
};
export const LargeTitle: React.FC<TitleProps> = ({ className, children }) => {
    return (
        <h2 className={`text-3xl mt-2 ${className}`}>{children}</h2>
    );
}

export default SmallTitle;
