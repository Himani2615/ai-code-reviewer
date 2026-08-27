import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(request: Request) {
  try {
    const {
      repositoryId,
      repositoryName,
      filePath,
      fileName,
      review,
    } = await request.json();

    if (
      !repositoryId ||
      !repositoryName ||
      !filePath ||
      !fileName ||
      !review
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const savedReview = await prisma.review.create({
      data: {
        repositoryId,
        repositoryName,
        filePath,
        fileName,
        review,
      },
    });

    return NextResponse.json(savedReview, { status: 201 });

  } catch (error) {
    console.error("SAVE REVIEW ERROR:", error);

    return NextResponse.json(
      { error: "Failed to save review" },
      { status: 500 }
    );
  }
}