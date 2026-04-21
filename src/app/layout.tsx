import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fiviva.com"),
  title: {
    default: "FIVIVA",
    template: "%s | FIVIVA",
  },
  description:
    "FIVIVA public landing site for app downloads, guest reviews, and help content.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
