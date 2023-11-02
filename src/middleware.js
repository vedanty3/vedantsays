import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/write")) {
        return token?.role === "admin";
      }
    },
  },
});

export const config = { matcher: ["/write"] };
