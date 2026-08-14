import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Finder | Runtime Gurus",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div style={{ minHeight: "100vh", background: "#06091C", color: "#F8FAFC" }}>{children}</div>;
}
