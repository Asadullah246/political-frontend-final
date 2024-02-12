import React from 'react';

// components/Tabs.js
import { useState } from 'react';

import TalentPlitic from './AskedQuestions';
import Talents from './Talents';

import Declined from './Declined';




const Experienced = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ["All Persons", "Requests ", "Declined"];

    const handleTabClick = (index:any) => {
        setActiveTab(index);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return <div className="p-4"><Talents/></div>;
            case 1:
                return <div className="p-4"><TalentPlitic/></div>;
            case 2:
                return <div className="p-4"><Declined/></div>;

            default:
                return <Talents/>;
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

export default Experienced;


