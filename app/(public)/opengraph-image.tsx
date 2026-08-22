import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Runtime Gurus — YouTube Automation Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #07070E 0%, #0F0F2A 50%, #07070E 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Brand badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 20px",
            borderRadius: 999,
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(124,58,237,0.4)",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#A855F7",
            }}
          />
          <span style={{ color: "#A855F7", fontSize: 18, fontWeight: 600 }}>
            YouTube Automation Agency
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#F8FAFC",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Done For You
          <span style={{ color: "#A855F7" }}> YouTube</span>
          <br />
          Channel Growth
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: 26,
            color: "#94A3B8",
            textAlign: "center",
            maxWidth: 700,
            marginBottom: 48,
          }}
        >
          Scripts · Editing · Thumbnails · Full Management
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48 }}>
          {[
            { value: "200+", label: "Channels Grown" },
            { value: "90-Day", label: "Monetization Guarantee" },
            { value: "30+", label: "Countries Served" },
          ].map(({ value, label }) => (
            <div
              key={label}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
            >
              <span style={{ fontSize: 34, fontWeight: 800, color: "#F59E0B" }}>{value}</span>
              <span style={{ fontSize: 16, color: "#64748B" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 48,
            fontSize: 18,
            color: "#475569",
            fontWeight: 600,
          }}
        >
          runtimeguru.com
        </div>
      </div>
    ),
    { ...size }
  );
}
