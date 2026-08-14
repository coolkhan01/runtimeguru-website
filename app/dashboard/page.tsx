"use client";

import { useState, useEffect } from "react";
import { LoginForm } from "@/components/dashboard/LoginForm";
import { LeadCard } from "@/components/dashboard/LeadCard";
import { LeadTable } from "@/components/dashboard/LeadTable";
import { Search, LogOut, Zap } from "lucide-react";

interface Lead {
  id: string; fullName: string; linkedinUrl: string; jobTitle: string; company: string;
  location: string; industry: string; companySize?: string | null; followers?: number | null;
  whyMatch: string; interestScore: number; recentPost?: string | null; outreachMsg?: string | null;
}

interface Filters {
  country: string; industry: string; companySize: string; jobTitle: string; keywords: string;
}

const INDUSTRIES = [
  "", "Ecommerce", "Real Estate", "SaaS / Software", "Coaching / Consulting",
  "Marketing Agency", "Finance / Investment", "Health & Wellness", "Education / Courses",
  "Personal Brand", "Content Creation", "Retail", "Other",
];

const COMPANY_SIZES = ["", "1-10", "11-50", "51-200", "201-500", "500+"];

export default function DashboardPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>({ country: "", industry: "", companySize: "", jobTitle: "", keywords: "" });
  const [activeTab, setActiveTab] = useState<"finder" | "saved">("finder");

  useEffect(() => {
    fetch("/api/auth/session")
      .then((r) => { setAuthenticated(r.ok); setChecking(false); })
      .catch(() => setChecking(false));
  }, []);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setAuthenticated(false);
  }

  async function handleGenerate() {
    setLoading(true);
    setLeads([]);
    try {
      const res = await fetch("/api/leads/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filters),
      });
      const data = await res.json();
      setLeads(Array.isArray(data) ? data : []);
    } catch {
      alert("Failed to generate leads. Check your ANTHROPIC_API_KEY.");
    }
    setLoading(false);
  }

  if (checking) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#06091C" }}>
        <div style={{ width: 32, height: 32, border: "3px solid #1A2548", borderTopColor: "#1E3FD8", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!authenticated) {
    return <LoginForm onLogin={() => setAuthenticated(true)} />;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#06091C" }}>
      {/* Top bar */}
      <div style={{ borderBottom: "1px solid #1A2548", padding: "14px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0B1230" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/logo.png" alt="Runtime Gurus" width={34} height={34} style={{ borderRadius: 8 }} />
          <div>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#F8FAFC" }}>Runtime Gurus</span>
            <span style={{ marginLeft: 8, fontSize: 13, color: "#4B72F7", background: "rgba(75,114,247,0.1)", padding: "2px 8px", borderRadius: 20 }}>Lead Finder</span>
          </div>
        </div>
        <button onClick={handleLogout} style={{
          display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 8,
          border: "1px solid #1A2548", background: "transparent", color: "#94A3B8", cursor: "pointer", fontSize: 13,
        }}>
          <LogOut size={14} /> Logout
        </button>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 24px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 28, borderBottom: "1px solid #1A2548", paddingBottom: 0 }}>
          {(["finder", "saved"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: "10px 20px", border: "none", background: "transparent", cursor: "pointer", fontSize: 14, fontWeight: 600,
              color: activeTab === tab ? "#F8FAFC" : "#64748B",
              borderBottom: activeTab === tab ? "2px solid #1E3FD8" : "2px solid transparent",
              marginBottom: -1,
            }}>
              {tab === "finder" ? "Lead Finder" : "Saved Leads"}
            </button>
          ))}
        </div>

        {activeTab === "finder" && (
          <>
            {/* Filters */}
            <div style={{ background: "#0B1230", border: "1px solid #1A2548", borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ fontSize: 13, color: "#94A3B8", fontWeight: 600, marginBottom: 14, marginTop: 0 }}>Filter Prospects</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
                {([
                  { key: "country", label: "Country", type: "text", placeholder: "e.g. United States" },
                  { key: "jobTitle", label: "Job Title", type: "text", placeholder: "e.g. Founder" },
                  { key: "keywords", label: "Keywords", type: "text", placeholder: "e.g. passive income" },
                ] as const).map(({ key, label, placeholder }) => (
                  <div key={key}>
                    <label style={{ display: "block", fontSize: 12, color: "#64748B", marginBottom: 5 }}>{label}</label>
                    <input
                      value={filters[key]}
                      onChange={(e) => setFilters((f) => ({ ...f, [key]: e.target.value }))}
                      placeholder={placeholder}
                      style={{ width: "100%", padding: "8px 10px", borderRadius: 7, border: "1px solid #1A2548", background: "#06091C", color: "#F8FAFC", fontSize: 13, boxSizing: "border-box" }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontSize: 12, color: "#64748B", marginBottom: 5 }}>Industry</label>
                  <select value={filters.industry} onChange={(e) => setFilters((f) => ({ ...f, industry: e.target.value }))}
                    style={{ width: "100%", padding: "8px 10px", borderRadius: 7, border: "1px solid #1A2548", background: "#06091C", color: "#F8FAFC", fontSize: 13 }}>
                    {INDUSTRIES.map((i) => <option key={i} value={i}>{i || "All Industries"}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, color: "#64748B", marginBottom: 5 }}>Company Size</label>
                  <select value={filters.companySize} onChange={(e) => setFilters((f) => ({ ...f, companySize: e.target.value }))}
                    style={{ width: "100%", padding: "8px 10px", borderRadius: 7, border: "1px solid #1A2548", background: "#06091C", color: "#F8FAFC", fontSize: 13 }}>
                    {COMPANY_SIZES.map((s) => <option key={s} value={s}>{s || "Any Size"}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Generate button */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              style={{
                width: "100%", padding: "15px", borderRadius: 12, border: "none", cursor: loading ? "not-allowed" : "pointer",
                background: loading ? "#1A2548" : "linear-gradient(135deg, #1E3FD8, #1530B0)",
                color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              }}
            >
              {loading ? (
                <>
                  <div style={{ width: 18, height: 18, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                  Claude is finding leads…
                </>
              ) : (
                <>
                  <Zap size={18} />
                  Find YouTube Automation Leads
                </>
              )}
            </button>

            {/* Results grid */}
            {leads.length > 0 && (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <Search size={15} style={{ color: "#4B72F7" }} />
                  <span style={{ fontSize: 14, color: "#94A3B8" }}>{leads.length} leads found</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
                  {leads.map((lead) => <LeadCard key={lead.id} lead={lead} />)}
                </div>
              </>
            )}
          </>
        )}

        {activeTab === "saved" && <LeadTable />}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
