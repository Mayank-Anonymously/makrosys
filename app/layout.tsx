import type { Metadata } from "next";
import "./globals.css";
import ContactPopup from "./components/ContactPopup";

export const metadata: Metadata = {
  title: "Makrosys Solutions — Offshore Development & CRM Partner for US Agencies",
  description: "We help US agencies and startups scale delivery with dedicated offshore development teams. Web apps, mobile apps, CRM integrations, and white-label dev — without the overhead of US hiring.",
  keywords: "offshore development partner, white-label development, CRM integration, app development, web development agency partner, dedicated dev team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ContactPopup />
      </body>
    </html>
  );
}
