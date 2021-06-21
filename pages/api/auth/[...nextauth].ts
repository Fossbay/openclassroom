import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import UserType from "../../../types/UserTypes";

export default NextAuth({
  session: {
    jwt: true,
  },
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // nextauthjs/next-auth#2080
      // @ts-ignore
      async authorize(credentials: any, req) {
        if (credentials.username == "teacher") {
          return {
            email: "exampleteacher@openclassroom.dev",
            name: "John Doe",
            type: UserType.TEACHER,
          };
        }
        if (credentials.username == "student") {
          return {
            email: "examplestudent@openclassroom.dev",
            name: "Jane Doe",
            type: UserType.STUDENT,
          };
        }
        if (credentials.username == "administrator") {
          return {
            email: "exampleadmin@openclassroom.dev",
            name: "Doe John",
            type: UserType.ADMINISTRATOR,
          };
        }
      },
    }),
  ],

  database: process.env.DATABASE_URL,
});
