"use client";

import { useState, useEffect, useCallback } from "react";
import { ExternalLink, MessageSquare, Trash2, Download } from "lucide-react";
import { OutreachModal } from "./OutreachModal";

interface Lead {
  id: string; fullName: string; linkedinUrl: string; jobTitle: string; company: string;
  location: string; industry: string; interestScore: number; status: string;
  createdAt: string; outreachMsg?: string | null;
}

const STATUSES = ["ALL", "NEW", "CONTACTED", "CONVERTED"];

export function LeadTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [status, setStatus] = useState("ALL");
  const [search, setSearch] = useState("");
  const [outreachLead, setOutreachLead] = useState<Lead | null>(null);

  const fetchLeads = useCallback(async () => {
    const params = new URLSearchParams({ page: String(page), status, search });
    const res = await fetch(`/api/leads?${params}`);
    const data = await res.json();
    setLeads(data.leads);
    setTotal(data.total);
    setPages(data.pages);
  }, [page, status, search]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  async function handleDelete(id: string) {
    await fetch("/api/leads", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    fetchLeads();
  }

  async function handleStatus(id: string, newStatus: string) {
    await fetch(`/api/leads/${id}/status`, {
      method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status: newStatus }),
    });
    fetchLeads();
  }

  function exportFile(format: string) {
    window.location.href = `/api/leads/export?format=${format}`;
  }

  const statusColor: Record<string, string> = {
    NEW: "#4B72F7", CONTACTED: "#F59E0B", CONVERTED: "#10B981", DISMISSED: "#64748B",
  };

  return (
    <div>
      {/* Controls */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20, alignItems: "center" }}>
        <div style={{ display: "flex", gap: 4 }}>
          {STATUSES.map((s) => (
            <button key={s} onClick={() => { setStatus(s); setPage(1); }} style={{
              padding: "6px 14px", borderRadius: 8, border: "1px solid #1A2548", cursor: "pointer", fontSize: 13,
              background: status === s ? "#1E3FD8" : "transparent", color: status === s ? "#fff" : "#94A3B8",
            }}>{s}</button>
          ))}
        </div>
        <input
          placeholder="Search leads…"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          style={{
            flex: 1, minWidth: 180, padding: "7px 12px", borderRadius: 8, border: "1px solid #1A2548",
            background: "#06091C", color: "#F8FAFC", fontSize: 13,
          }}
        />
        <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
          <button onClick={() => exportFile("sheets")} style={{
            display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 8,
            border: "1px solid #243268", background: "rgba(30,63,216,0.08)", color: "#4B72F7", cursor: "pointer", fontSize: 13, fontWeight: 600,
          }}>
            <Download size={13} /> Google Sheets
          </button>
          <button onClick={() => exportFile("excel")} style={{
            display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 8,
            border: "1px solid #1A2548", background: "transparent", color: "#94A3B8", cursor: "pointer", fontSize: 13,
          }}>
            <Download size={13} /> Excel
          </button>
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto", borderRadius: 10, border: "1px solid #1A2548" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#101840" }}>
              {["Name", "Title / Company", "Location", "Score", "Status", "Actions"].map((h) => (
                <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#64748B", fontWeight: 600, whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 && (
              <tr><td colSpan={6} style={{ padding: "32px", textAlign: "center", color: "#64748B" }}>No leads found</td></tr>
            )}
            {leads.map((lead) => (
              <tr key={lead.id} style={{ borderTop: "1px solid #1A2548" }}>
                <td style={{ padding: "10px 14px" }}>
                  <p style={{ margin: 0, fontWeight: 600, color: "#F8FAFC" }}>{lead.fullName}</p>
                  <p style={{ margin: "2px 0 0", color: "#64748B", fontSize: 12 }}>{lead.industry}</p>
                </td>
                <td style={{ padding: "10px 14px" }}>
                  <p style={{ margin: 0, color: "#94A3B8" }}>{lead.jobTitle}</p>
                  <p style={{ margin: "2px 0 0", color: "#64748B", fontSize: 12 }}>{lead.company}</p>
                </td>
                <td style={{ padding: "10px 14px", color: "#94A3B8" }}>{lead.location}</td>
                <td style={{ padding: "10px 14px" }}>
                  <span style={{
                    padding: "2px 9px", borderRadius: 20, fontWeight: 700, fontSize: 13,
                    background: lead.interestScore >= 85 ? "rgba(16,185,129,0.15)" : "rgba(245,158,11,0.15)",
                    color: lead.interestScore >= 85 ? "#10B981" : "#F59E0B",
                  }}>{lead.interestScore}</span>
                </td>
                <td style={{ padding: "10px 14px" }}>
                  <select
                    value={lead.status}
                    onChange={(e) => handleStatus(lead.id, e.target.value)}
                    style={{
                      background: "#06091C", border: "1px solid #1A2548", borderRadius: 6,
                      color: statusColor[lead.status] ?? "#94A3B8", padding: "3px 6px", fontSize: 12, cursor: "pointer",
                    }}
                  >
                    {["NEW", "CONTACTED", "CONVERTED", "DISMISSED"].map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: "10px 14px" }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <a href={lead.linkedinUrl} target="_blank" rel="noopener noreferrer"
                      style={{ padding: "5px", borderRadius: 6, border: "1px solid #1A2548", color: "#94A3B8", display: "flex" }}>
                      <ExternalLink size={13} />
                    </a>
                    <button onClick={() => setOutreachLead(lead)}
                      style={{ padding: "5px", borderRadius: 6, border: "none", background: "#1E3FD8", color: "#fff", cursor: "pointer", display: "flex" }}>
                      <MessageSquare size={13} />
                    </button>
                    <button onClick={() => handleDelete(lead.id)}
                      style={{ padding: "5px", borderRadius: 6, border: "none", background: "rgba(239,68,68,0.15)", color: "#EF4444", cursor: "pointer", display: "flex" }}>
                      <Trash2 size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
          {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
            <button key={p} onClick={() => setPage(p)} style={{
              width: 32, height: 32, borderRadius: 8, border: "1px solid #1A2548", cursor: "pointer",
              background: page === p ? "#1E3FD8" : "transparent", color: page === p ? "#fff" : "#94A3B8", fontSize: 13,
            }}>{p}</button>
          ))}
        </div>
      )}

      <p style={{ marginTop: 10, fontSize: 12, color: "#64748B", textAlign: "right" }}>{total} total leads</p>

      {outreachLead && <OutreachModal lead={outreachLead} onClose={() => { setOutreachLead(null); fetchLeads(); }} />}
    </div>
  );
}
