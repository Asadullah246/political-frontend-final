import { FaUserCheck } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdOndemandVideo } from "react-icons/md";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const datas = [
    { name: 'Jan', uv: 10 },
    { name: 'Feb', uv: 5 },
    { name: 'Mar', uv: 8 },
    { name: 'Apr', uv: 15 },
    { name: 'May', uv: 12 },
    { name: 'Jun', uv: 7 },
    { name: 'Jul', uv: 9 },
    { name: 'Aug', uv: 11 },
    { name: 'Sep', uv: 6 },
    { name: 'Oct', uv: 14 },
    { name: 'Nov', uv: 8 },
    { name: 'Dec', uv: 10 },
  ];
const Dashboard = () => {
    const data =[
        {
            id:1,
            name:"Total User",
            icon:<FaUserCheck size={30}/>,
            value:100,
            background:"bg-blue-700"
        },
        {
            id:2,
            name:"Total Course",
            icon:<MdOndemandVideo size={30}/>,
            value:10,
            background:"bg-[#FE6F00]"
        },
        {id:3,
         name:"Total Mentor",
            icon:<GiTeacher size={30}/>,
            value:20,
            background:"bg-[#2F7D33]"

        },
        {
            id:4,
            name:"Politial talent",
            value:40,
            background:"bg-[#A52714]",
            icon:<FaUserCheck size={30}/>
        }
    ]
    return (
        // make dashboard
        <div>
            <h1 className="text-3xl font-bold mb-2 p-3">Dashboard</h1>
        <div className=" grid grid-cols-12 gap-4">
            {
                data.map((data,i)=>(<div key={i} className={`lg:col-span-3 col-span-6 ${data.background}  px-3 py-4 text-white rounded-md w-full`}>
                <div className=" flex justify-between">
                  <h1>{data.name}</h1>
                  {data.icon}
                </div>
                  <h1 className="text-3xl font-bold">{data.value}</h1>
               </div>))
            }
         
        </div>
           <div className=" mt-4">
            <h2 className=" text-2xl py-4 pl-4">Total Course Sell </h2>
           <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                width={500} // Fixed width if not using ResponsiveContainer
                height={300} // Fixed height if not using ResponsiveContainer
                data={datas}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
            </ResponsiveContainer>
           </div>
        </div>
            // make dashboard
    );
};

export default Dashboard;