import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { db } from "@/src/lib/db";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  // Configure one or more authentication providers
  adapter: UpstashRedisAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = (await db.get(`user:${token.id}`)) as User | null;
      if (!dbUser) {
        token.id = user!.id;
        return token;
      }
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.name,
        picture: dbUser.name,
      };
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
    redirect() {
      return "/";
    },
  },
});

export { handler as GET, handler as POST };
