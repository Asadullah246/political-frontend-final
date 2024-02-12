 courses [
  {
    id: 'd5978d35-8622-41b5-a605-d55feb699d32',
    userId: 'user_2UnjdB9NxMgN9YxI7aDtRQCyd64',
    title: 'hello',
    description: 'fafaf',
    imageUrl: 'https://utfs.io/f/025dde1c-c10e-494a-8d97-83ec2e7c5bf1-vd4gli.webp',
    price: 10,
    isPublished: false,
    categoryId: null,
    createdAt: 2023-11-17T09:07:45.488Z,
    updatedAt: 2023-11-17T09:11:41.665Z
  }
]



 const transformedData = originalData.map((item) => [item]);

 import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { base } from "../shared/apis/api";

  const [datais, setDatais] = useState([]);
  useEffect(() => {
    axios.get(`${base}/api/v1/quiz`).then((res) => {
      // console.log("quiz dta", res?.data?.data)
      if (res.data.status === "success") {
        const alldata = res?.data?.data;
        const length = alldata?.length - 1;
        if (length) {
          const lastData = alldata[length];
          setDatais(lastData?.singleQuiz);
        }
      }
    });
  }, []);

# local env files
# .env*.local
# .env
