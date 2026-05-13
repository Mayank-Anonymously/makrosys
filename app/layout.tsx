import type { Metadata } from "next";
import Script from "next/script";
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
        <Script id="apollo-tracking">
          {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
  o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
  o.onload=function(){window.trackingFunctions.onLoad({appId:"6a04544a705ea80021325cd4"})},
  document.head.appendChild(o)}initApollo();`}
        </Script>
      </body>
    </html>
  );
}
