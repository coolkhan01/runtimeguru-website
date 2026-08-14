export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const valid = await verifySession(req);
  return NextResponse.json({ authenticated: valid }, { status: valid ? 200 : 401 });
}
