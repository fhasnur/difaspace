import prisma from "@/prisma";

export async function connectToDatabase() {
  try {
    await prisma.$connect();
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to database");
  }
}