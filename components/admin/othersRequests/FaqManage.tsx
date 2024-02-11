import React from 'react';

// components/Tabs.js
import { useState } from 'react';

// import TalentPlitic from './AskedQuestions';
import Training from './Talents';
import TrainingSeminar from './Training';
import Consultancy from './Consultancy';
import Partnership from './Partnership';
import Internship from './Internship';
import Contribute from './Contribute';
import TeamStaff from './TeamStaff';
// import Declined from './Declined';




const OtherRequests = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ["Matchmaking", "Training_workshop_seminar ", "Consultancy","Partnership", "Internship","Contribute on courses","Team Staffs"];

    const handleTabClick = (index:any) => {
        setActiveTab(index);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return <div className="p-4"><Training/></div>;
            case 1:
                return <div className="p-4"><TrainingSeminar/></div>;
            case 2:
                return <div className="p-4"><Consultancy/></div>;
            case 3 :
                return <div className="p-4"><Partnership/></div>;
            case 4:
                return <div className="p-4"><Internship/></div>;
            case 5:
                return <div className="p-4"><Contribute/></div>;
            case 6:
                return <div className="p-4"><TeamStaff/></div>;

            default:
                return <Training/>; 
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

export default OtherRequests;


