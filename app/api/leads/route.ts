export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const status = searchParams.get("status");
  const search = searchParams.get("search") ?? "";
  const page = Math.max(1, Number(searchParams.get("page") ?? 1));
  const limit = 20;
  const skip = (page - 1) * limit;

  const where = {
    ...(status && status !== "ALL" ? { status } : {}),
    ...(search
      ? {
          OR: [
            { fullName: { contains: search } },
            { company: { contains: search } },
            { jobTitle: { contains: search } },
            { industry: { contains: search } },
            { location: { contains: search } },
          ],
        }
      : {}),
  };

  const [leads, total] = await Promise.all([
    db.lead.findMany({ where, orderBy: { createdAt: "desc" }, skip, take: limit }),
    db.lead.count({ where }),
  ]);

  return NextResponse.json({ leads, total, page, pages: Math.ceil(total / limit) });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await db.lead.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
