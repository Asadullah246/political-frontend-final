const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
<<<<<<< HEAD
        { name: "Public Speaking" },
        { name: "Leadership" },
        { name: "Diplomacy" },
        { name: "Policy Expertise" }
=======
        { name: "Councilor" },
        { name: "LG Chairmen" },
        { name: "Assembly member" },
        { name: "Senator" },
        { name: "Representatives memberss" },
        { name: "Governors, Presidents, others" }
>>>>>>> origin/sayman-3
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