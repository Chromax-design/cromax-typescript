import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (req: Request, context: any) => {
  try {
    const { id } = await context.params;
    const project = await prisma.project.findUnique({
      where: {
        id,
      },
      include: {
        Image: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!project)
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
