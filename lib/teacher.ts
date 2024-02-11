import { base } from "@/components/shared/apis/api";
import axios from "axios";




export const isTeacher = async (userId?: string | null): Promise<boolean> => {
  try {
    if (!userId) {
      return false;
    }

    const res = await axios.get(`${base}/api/v1/mentor`);

    if (res?.data?.status === "success") {
      const allData = res?.data?.data;
      const filtered = allData?.filter((a) => a?.status==2);
      const userIds = filtered.map((item) => item?.signingId);

      console.log("teach", userIds);
      console.log("userid", userId);
      console.log("stat", userIds.includes(userId));  

      return userIds.includes(userId);
    }

    return false;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};
