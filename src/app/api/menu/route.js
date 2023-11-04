import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  const query = {
    orderBy: {
      views: "desc",
    },
    include: { user: true },
    take: 4,
  };
  try {
    const mostPopularPosts = await prisma.post.findMany(query);
    return new NextResponse(JSON.stringify(mostPopularPosts, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
