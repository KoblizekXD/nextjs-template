import { getSessionCookie } from "better-auth/cookies";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const cookies = getSessionCookie(request);
  
	if (!cookies) {
		return NextResponse.redirect(new URL("/auth", request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ["/"],
};