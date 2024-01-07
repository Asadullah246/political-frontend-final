import React from 'react';

// components/Tabs.js
import { useState } from 'react';
import NewQuiz from './NewQuiz';



const PolitTestPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ["newQuiz"];

    const handleTabClick = (index:any) => {
        setActiveTab(index);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return <div className="p-4"><NewQuiz /></div>;
            case 1:
                return <div className="p-4">Content for Tab 2</div>; 
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

export default PolitTestPage;


