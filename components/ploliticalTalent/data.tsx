
interface PoliticalDataItem {
    id: number;
    name: string;
    cover: string;
    description: string;
    profile: string;
    country: string;
    mail: string;
  }

const PoliTicalData: PoliticalDataItem[] = [
    {
        id: 1,
        name:"John Doe",
        cover:'/assets/politicalcover.jpg',
        description:"Political Speeker, Political writer, Motivational Speeker, Motivational writer",
        profile:"/assets/profilephoto.jpg",
        country:"Uganada",
        mail:"mail@gmail.com"
    },{
        id: 2,
        name:"Alex Supper",
        cover:'https://images.unsplash.com/photo-1528465424850-54d22f092f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description:"Political Speeker, Political writer, Motivational Speeker, Motivational writer",
        profile:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        country:"Uganada",
        mail:"keeprolling9987@gmail.com",
    },{
        id: 3,
        name:"Alex Supper",
        cover:'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description:"Political Speeker, Political writer, Motivational Speeker, Motivational writer",
        profile:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        country:"Uganada",
        mail:"keeprolling9987@gmail.com",
    }
]

export default PoliTicalData;
