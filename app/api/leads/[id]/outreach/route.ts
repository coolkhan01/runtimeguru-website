import { NextRequest, NextResponse } from "next/server";
import { generateOutreachMessage } from "@/lib/claude";
import { db } from "@/lib/db";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lead = await db.lead.findUnique({ where: { id } });
  if (!lead) return NextResponse.json({ error: "Lead not found" }, { status: 404 });

  const outreachMsg = await generateOutreachMessage(lead);
  await db.lead.update({ where: { id }, data: { outreachMsg } });
  return NextResponse.json({ outreachMsg });
}
