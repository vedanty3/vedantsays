import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const query = {
    where: {
      isFeatured: true,
    },
  };
  try {
    const featuredPosts = await prisma.post.findMany(query);
    return new NextResponse(JSON.stringify(featuredPosts, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
