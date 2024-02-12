const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Councilor" },
        { name: "LG Chairmen" },
        { name: "Assembly member" },
        { name: "Senator" },
        { name: "Representatives memberss" },
        { name: "Governors, Presidents, others" }
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();