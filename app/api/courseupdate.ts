// pages/api/courses.js
// import prisma from '../../lib/prisma';

// import { Prisma } from "@prisma/client";
// import { db } from "@/lib/db";

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const totalCourses = await db.course.findMany({
//         orderBy: {
//           createdAt: 'desc',
//         },
//       });
//       console.log("ser", totalCourses);

//       res.status(200).json({ courses: totalCourses });
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }
// pages/api/courses.js
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const totalCourses = await prisma.course.findMany({
//         orderBy: {
//           createdAt: 'desc',
//         },
//       });
//       console.log("ser", totalCourses);
//       res.json({ courses: totalCourses });
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }
alert("this is working")
console.log("this is working") 


