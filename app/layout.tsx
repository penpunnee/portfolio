import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pawin — Personal AI Developer Portal",
  description: "Senior Developer | Hybrid AI Workspace | พมจ. | Full-stack & AI Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="dark">
      <body className="antialiased min-h-full flex flex-col">{children}</body>
    </html>
  );
}
