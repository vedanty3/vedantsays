import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

const POST_PER_PAGE = 2;

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const post = await prisma.post.findUnique({
      where: { slug: slug },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
