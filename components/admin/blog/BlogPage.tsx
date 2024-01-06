import React from 'react';

// components/Tabs.js
import { useState } from 'react';
import Blog from '@/components/home/blog';
import NewBlog from './blog';



const BlogPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ["Blogs", "New Blog"];

    const handleTabClick = (index:any) => {
        setActiveTab(index); 
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return <div className="p-4">There will be uploaded quiz</div>;
            case 1:
                return <div className="p-4"><NewBlog /></div>;
            case 2:
                return <div className="p-4">Content for Tab 3</div>;
            default:
                return null;
        }
    };

    return (
        <div className="  mt-4">
            <div className="flex border-b">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`py-2 px-4 focus:outline-none ${index === activeTab
                                ? 'border-b-2 border-blue-500 to-#0D01E5 text-blue-500'
                                : 'text-gray-500'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="mt-4">{renderTabContent()}</div>
        </div>
    );
};

export default BlogPage;


