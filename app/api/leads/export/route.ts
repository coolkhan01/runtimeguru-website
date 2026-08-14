export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import * as XLSX from "xlsx";

const HEADERS = [
  "Full Name",
  "LinkedIn Profile URL",
  "Email",
  "Job Title",
  "Company",
  "Location",
  "Industry",
  "Company Size",
  "Interest Score",
  "Why They Match",
  "Recent Post / Activity",
  "Outreach Message",
  "Status",
  "Date Added",
];

function row(l: Record<string, unknown>) {
  return [
    l.fullName,
    l.linkedinUrl,
    l.email ?? "",
    l.jobTitle,
    l.company,
    l.location,
    l.industry,
    l.companySize ?? "",
    l.interestScore,
    l.whyMatch,
    l.recentPost ?? "",
    l.outreachMsg ?? "",
    l.status,
    new Date(l.createdAt as string).toLocaleDateString("en-US"),
  ];
}

export async function GET(req: NextRequest) {
  const format = req.nextUrl.searchParams.get("format") ?? "sheets";
  const leads = await db.lead.findMany({ orderBy: { createdAt: "desc" } });
  const rows = leads.map((l) => row(l as unknown as Record<string, unknown>));

  if (format === "excel") {
    const ws = XLSX.utils.aoa_to_sheet([HEADERS, ...rows]);

    // Column widths
    ws["!cols"] = [
      { wch: 22 }, { wch: 40 }, { wch: 30 }, { wch: 25 }, { wch: 25 },
      { wch: 20 }, { wch: 18 }, { wch: 12 }, { wch: 13 }, { wch: 50 },
      { wch: 40 }, { wch: 50 }, { wch: 12 }, { wch: 14 },
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Runtime Gurus Leads");
    const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
    return new NextResponse(buf, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename=runtime-gurus-leads-${Date.now()}.xlsx`,
      },
    });
  }

  // CSV â€” opens directly in Google Sheets via File > Import
  const escape = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const csv = [
    HEADERS.map(escape).join(","),
    ...rows.map((r) => r.map(escape).join(",")),
  ].join("\n");

  return new NextResponse("ï»¿" + csv, { // BOM for proper UTF-8 in Sheets
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename=runtime-gurus-leads-${Date.now()}.csv`,
    },
  });
}
