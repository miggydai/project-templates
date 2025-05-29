import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";
import authConfig from "./auth.config";
import { prisma } from "./lib/prisma";

// const prisma = new PrismaClient();

export const { auth, handlers, signIn, signOut } = NextAuth({
  //callbacks for adding aditional data in the token
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        //get id of user to display
        session.user.id = token.sub;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
