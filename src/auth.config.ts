import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
// import Credentials from "next-auth/providers/credentials";
// import { loginSchema } from "./lib/schema/loginSchema";
// import { compare } from "bcryptjs";
// import { getUserByEmail } from "./app/actions/authActions";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    // Credentials({
    //   name: "credentials",
    //   async authorize(creds) {
    //     const validated = loginSchema.safeParse(creds);

    //     if (validated.success) {
    //       const { email, password } = validated.data;

    //       const user = await getUserByEmail(email);

    //       // check if user exists and if password matches
    //       if (!user || !(await compare(password, user.passwordHash)))
    //         return null;

    //       return user;
    //     }

    //     return null;
    //   },
    // }),
    GitHub,
  ],
} satisfies NextAuthConfig;
