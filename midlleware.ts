import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextResponse, type NextRequest } from "next/server";

export default NextAuth(authConfig).auth;

export async function middleware(request: NextRequest) {
    return NextResponse.next();
  }

  export const config = {
    matcher: [
      "/((?!_next/static|_next/image|favicon.ico|images|icons|scripts).*)",
    ],
  };