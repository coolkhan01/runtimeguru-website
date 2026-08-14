"use client";

import { useState } from "react";

export function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      onLogin();
    } else {
      setError("Incorrect password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#06091C" }}>
      <div style={{ background: "#0B1230", border: "1px solid #1A2548", borderRadius: 16, padding: 40, width: 380 }}>
        <div className="flex items-center gap-3 mb-8">
          <img src="/logo.png" alt="Runtime Gurus" width={40} height={40} style={{ borderRadius: 8 }} />
          <div>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#F8FAFC" }}>Runtime Gurus</p>
            <p style={{ fontSize: 13, color: "#64748B" }}>Lead Finder Dashboard</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", fontSize: 13, color: "#94A3B8", marginBottom: 6 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter dashboard password"
            required
            style={{
              width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #1A2548",
              background: "#06091C", color: "#F8FAFC", fontSize: 14, marginBottom: 8, boxSizing: "border-box",
            }}
          />
          {error && <p style={{ color: "#F87171", fontSize: 13, marginBottom: 8 }}>{error}</p>}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%", padding: "11px 0", borderRadius: 8, border: "none", cursor: "pointer",
              background: "linear-gradient(135deg, #1E3FD8, #1530B0)", color: "#fff",
              fontWeight: 600, fontSize: 15, marginTop: 4,
            }}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
