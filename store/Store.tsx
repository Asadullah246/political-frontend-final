import axios from "axios";
import { create } from "zustand";
interface ICourseDetails {
    isSticky:number;
    setIsSticky:Function;
    isFooterVisible:boolean;
    setIsFooterVisible:Function;
    isOpen:boolean
    onOpen: () => void
    onClose: () => void
    allCourse:any
    setAllCourse:Function
    fetchAllCourse:Function,
    courses:[],
    seCourses:Function,
}

export const baseUrl="http://backend.politiq-global.com"
export const CourseMgmt = create<ICourseDetails>((set)=>({
    isSticky:0,
    setIsSticky:(data:number)=>set({isSticky:data}),
    isFooterVisible:false,
    setIsFooterVisible:(data:boolean)=>set({isFooterVisible:data}),
    isOpen: true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
    allCourse:[],
    courses:[],
    seCourses:(data:any)=>set({courses:data}),
    setAllCourse:(data:any)=>set({allCourse:data}),
    fetchAllCourse:async()=>{
        try {

            const res = await axios.get(`${baseUrl}/api/v1/course/allcourses`);

            if(res.data.status === 'success'){
                set({allCourse:res?.data?.data})
            }
        } catch (error) {

        }
    }

}))

interface UserStore {
    user:{},
    setUser:Function,
    allUser:[],
    setAllUser:Function,
    fetchUsers:Function
}

export const UserStore = create<UserStore>((set)=>({
    user: {},
    setUser:(data:any)=>set({user:data}),
    allUser:[],
    setAllUser:(data:any)=>set({allUser:data}),
    fetchUsers:async()=>{
        try {


            const res = await axios.get(`${baseUrl}/api/v1/user/alluser`);
            if(res.data.status === 'success'){
                set({allUser:res?.data?.data})
            }
        } catch (error) {

        }
    }
}))
