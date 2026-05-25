import type {
  NextAuthOptions,
} from "next-auth"

import CredentialsProvider
from "next-auth/providers/credentials"

import bcrypt from "bcrypt"

export const authOptions:
  NextAuthOptions = {

  secret:
    process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  providers: [

    CredentialsProvider({

      name: "Credentials",

      credentials: {

        email: {
          label: "Email",
          type: "email",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {

        if (!credentials) {
          return null
        }

        const email =
          credentials.email

        const password =
          credentials.password

        if (
          email !==
          process.env.ADMIN_EMAIL
        ) {
          return null
        }

        const validPassword =
          await bcrypt.compare(
            password,
            process.env.ADMIN_PASSWORD_HASH!
          )

        if (!validPassword) {
          return null
        }

        return {
          id: "admin",
          name: "Admin",
          email:
            process.env.ADMIN_EMAIL,
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
}