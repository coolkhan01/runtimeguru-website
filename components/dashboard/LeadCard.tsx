"use client";

import { useState } from "react";
import { ExternalLink, MessageSquare, Mail, Copy, Check } from "lucide-react";
import { OutreachModal } from "./OutreachModal";

interface Lead {
  id: string; fullName: string; linkedinUrl: string; jobTitle: string; company: string;
  location: string; industry: string; companySize?: string | null; followers?: number | null;
  whyMatch: string; interestScore: number; recentPost?: string | null; outreachMsg?: string | null;
  email?: string | null;
}

function scoreColor(score: number) {
  if (score >= 85) return { bg: "rgba(16,185,129,0.15)", text: "#10B981" };
  if (score >= 70) return { bg: "rgba(245,158,11,0.15)", text: "#F59E0B" };
  return { bg: "rgba(239,68,68,0.15)", text: "#EF4444" };
}

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export function LeadCard({ lead }: { lead: Lead }) {
  const [showOutreach, setShowOutreach] = useState(false);
  const [currentLead, setCurrentLead] = useState(lead);
  const [emailCopied, setEmailCopied] = useState(false);

  async function copyEmail() {
    if (!lead.email) return;
    await navigator.clipboard.writeText(lead.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  }
  const sc = scoreColor(lead.interestScore);

  return (
    <>
      <div style={{
        background: "#0B1230", border: "1px solid #1A2548", borderRadius: 12,
        padding: 20, display: "flex", flexDirection: "column", gap: 12,
      }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 10, flexShrink: 0,
            background: "linear-gradient(135deg, #1E3FD8, #1530B0)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, fontWeight: 700, color: "#fff",
          }}>
            {initials(lead.fullName)}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontWeight: 700, fontSize: 15, color: "#F8FAFC", margin: 0 }}>{lead.fullName}</p>
            <p style={{ fontSize: 13, color: "#94A3B8", margin: "2px 0 0" }}>{lead.jobTitle}</p>
            <p style={{ fontSize: 12, color: "#64748B", margin: "1px 0 0" }}>{lead.company}</p>
          </div>
          <div style={{
            padding: "3px 10px", borderRadius: 20, fontSize: 13, fontWeight: 700,
            background: sc.bg, color: sc.text, flexShrink: 0,
          }}>
            {lead.interestScore}
          </div>
        </div>

        {/* Pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {[lead.location, lead.industry, lead.companySize].filter(Boolean).map((tag) => (
            <span key={tag} style={{
              fontSize: 11, padding: "2px 8px", borderRadius: 20,
              background: "#101840", border: "1px solid #243268", color: "#94A3B8",
            }}>
              {tag}
            </span>
          ))}
          {lead.followers && (
            <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "#101840", border: "1px solid #243268", color: "#4B72F7" }}>
              {lead.followers.toLocaleString()} followers
            </span>
          )}
        </div>

        {/* Why Match */}
        <p style={{ fontSize: 13, color: "#94A3B8", margin: 0, lineHeight: 1.5 }}>
          <span style={{ color: "#4B72F7", fontWeight: 600 }}>Why match: </span>
          {lead.whyMatch}
        </p>

        {/* Recent post */}
        {lead.recentPost && (
          <p style={{
            fontSize: 12, color: "#64748B", margin: 0, padding: "8px 10px",
            background: "#06091C", borderRadius: 6, borderLeft: "2px solid #1A2548", lineHeight: 1.5,
          }}>
            "{lead.recentPost}"
          </p>
        )}

        {/* Email */}
        {lead.email && (
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 10px", background: "#06091C", borderRadius: 6, border: "1px solid #1A2548" }}>
            <Mail size={12} style={{ color: "#4B72F7", flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: "#94A3B8", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lead.email}</span>
            <button onClick={copyEmail} style={{ background: "none", border: "none", cursor: "pointer", color: emailCopied ? "#10B981" : "#64748B", padding: 0, display: "flex" }}>
              {emailCopied ? <Check size={12} /> : <Copy size={12} />}
            </button>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
          <a
            href={lead.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
              padding: "8px 0", borderRadius: 8, border: "1px solid #1A2548",
              background: "transparent", color: "#94A3B8", fontSize: 13, textDecoration: "none",
            }}
          >
            <ExternalLink size={13} /> LinkedIn
          </a>
          <button
            onClick={() => setShowOutreach(true)}
            style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
              padding: "8px 0", borderRadius: 8, border: "none", cursor: "pointer",
              background: "linear-gradient(135deg, #1E3FD8, #1530B0)", color: "#fff", fontSize: 13, fontWeight: 600,
            }}
          >
            <MessageSquare size={13} /> Outreach
          </button>
        </div>
      </div>

      {showOutreach && (
        <OutreachModal
          lead={currentLead}
          onClose={() => setShowOutreach(false)}
        />
      )}
    </>
  );
}
