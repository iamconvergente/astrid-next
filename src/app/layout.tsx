import "./globals.css";

import type { Metadata } from "next";

export const meta: Metadata = {
  title: "Astrid Torrente Official Website | ASTAAMVI",
  description: "Astrid Talent Amb Violin, artist, model and influencer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-slate-400"}>{children}</body>
    </html>
  );
}
