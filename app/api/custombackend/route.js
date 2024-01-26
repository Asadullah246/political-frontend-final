import { NextResponse } from "next/server";
require('dotenv').config();
const mysql = require('mysql2/promise'); // Using promise-based version

const pool = mysql.createPool(process.env.DATABASE_SERVER);
console.log('Connected to PlanetScale!');

export async function GET(request) {
  console.log("calling this get method");

  const data = [ 
    {
      name: "dkjfd",
      use: "djfd",
    },
    {
      name: "dkjfdfd",
      use: "ddffjfd",
    },
  ];

  try {
    const connection = await pool.getConnection();
    const res = await connection.query('SELECT * FROM Category');
    connection.release();
    console.log("re", res)
    // return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function GET(request) {
//   console.log("calling this get method");

//   try {
//     const categories = await prisma.course.findMany();
//     return NextResponse.json(categories);
//   } catch (error) {
//     console.error('Error fetching data from Prisma:', error);
//     return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
//   }
// }


export function POST(request) {
  // Your POST logic here
}

export function PUT(request) {
  // Your PUT logic here
}

export function DELETE(request) {
  // Your DELETE logic here
}
