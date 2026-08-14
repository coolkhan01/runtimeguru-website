export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from "next/server";
import { generateLeads } from "@/lib/claude";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const filters = await req.json();
    const leads = await generateLeads(filters);
    const searchQuery = JSON.stringify(filters);

    const saved = await db.$transaction(
      leads.map((lead) =>
        db.lead.create({
          data: {
            fullName: lead.fullName,
            linkedinUrl: lead.linkedinUrl,
            jobTitle: lead.jobTitle,
            company: lead.company,
            location: lead.location,
            industry: lead.industry,
            companySize: lead.companySize || null,
            followers: lead.followers || null,
            whyMatch: lead.whyMatch,
            interestScore: lead.interestScore,
            recentPost: lead.recentPost || null,
            email: lead.email || null,
            searchQuery,
          },
        })
      )
    );

    return NextResponse.json(saved);
  } catch (error) {
    console.error("Lead generation error:", error);
    return NextResponse.json({ error: "Failed to generate leads" }, { status: 500 });
  }
}
