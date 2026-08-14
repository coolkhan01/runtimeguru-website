import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/auth";

export async function proxy(req: NextRequest) {
  const isAuthenticated = await verifySession(req);
  if (!isAuthenticated) {
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard";
    url.searchParams.set("auth", "required");
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path+"],
};
