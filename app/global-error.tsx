"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#06091C", color: "#F8FAFC", fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", textAlign: "center", padding: "0 16px" }}>
        <div>
          <p style={{ color: "#F59E0B", fontSize: 13, fontFamily: "monospace", letterSpacing: "0.1em", marginBottom: 16 }}>CRITICAL ERROR</p>
          <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>Application Error</h1>
          <p style={{ color: "#94A3B8", fontSize: 16, maxWidth: 400, marginBottom: 32 }}>
            A critical error occurred. Please refresh the page or contact us if this persists.
          </p>
          <button
            onClick={reset}
            style={{ padding: "12px 24px", borderRadius: 12, background: "linear-gradient(135deg, #1E3FD8, #1530B0)", color: "#fff", fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer" }}>
            Reload Page
          </button>
        </div>
      </body>
    </html>
  );
}
