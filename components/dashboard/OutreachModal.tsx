"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Copy, Check, RefreshCw } from "lucide-react";

interface Lead { id: string; fullName: string; company: string; outreachMsg?: string | null }

export function OutreachModal({ lead, onClose }: { lead: Lead; onClose: () => void }) {
  const [message, setMessage] = useState(lead.outreachMsg ?? "");
  const [loading, setLoading] = useState(!lead.outreachMsg);
  const [copied, setCopied] = useState(false);

  async function generate() {
    setLoading(true);
    const res = await fetch(`/api/leads/${lead.id}/outreach`, { method: "POST" });
    const data = await res.json();
    setMessage(data.outreachMsg ?? "");
    setLoading(false);
  }

  if (!lead.outreachMsg && !message && !loading) generate();
  if (loading && !message) {
    void (async () => { await generate(); })();
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 50 }} />
        <Dialog.Content
          style={{
            position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            background: "#0B1230", border: "1px solid #1A2548", borderRadius: 16,
            padding: 28, width: "min(560px, 95vw)", zIndex: 51,
          }}
        >
          <div className="flex items-start justify-between mb-5">
            <div>
              <Dialog.Title style={{ fontSize: 16, fontWeight: 700, color: "#F8FAFC", margin: 0 }}>
                Outreach Message
              </Dialog.Title>
              <p style={{ fontSize: 13, color: "#64748B", marginTop: 2 }}>{lead.fullName} · {lead.company}</p>
            </div>
            <Dialog.Close asChild>
              <button style={{ background: "none", border: "none", cursor: "pointer", color: "#64748B", padding: 4 }}>
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          {loading ? (
            <div style={{ textAlign: "center", padding: "40px 0", color: "#4B72F7" }}>
              <RefreshCw size={24} style={{ animation: "spin 1s linear infinite", display: "inline-block" }} />
              <p style={{ marginTop: 10, fontSize: 14, color: "#64748B" }}>Claude is writing your message…</p>
            </div>
          ) : (
            <>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={10}
                style={{
                  width: "100%", background: "#06091C", border: "1px solid #1A2548",
                  borderRadius: 8, color: "#F8FAFC", fontSize: 14, padding: 12,
                  resize: "vertical", fontFamily: "inherit", boxSizing: "border-box",
                }}
              />
              <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                <button
                  onClick={handleCopy}
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                    padding: "9px 0", borderRadius: 8, border: "none", cursor: "pointer",
                    background: "linear-gradient(135deg, #1E3FD8, #1530B0)", color: "#fff", fontWeight: 600, fontSize: 14,
                  }}
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? "Copied!" : "Copy to Clipboard"}
                </button>
                <button
                  onClick={generate}
                  style={{
                    padding: "9px 16px", borderRadius: 8, border: "1px solid #1A2548",
                    background: "transparent", color: "#94A3B8", cursor: "pointer", fontSize: 14,
                    display: "flex", alignItems: "center", gap: 6,
                  }}
                >
                  <RefreshCw size={14} /> Regenerate
                </button>
              </div>
            </>
          )}
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
