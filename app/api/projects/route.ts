import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async () => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        Image: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
};
