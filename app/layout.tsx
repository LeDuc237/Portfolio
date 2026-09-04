import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageProvider";

export const metadata: Metadata = {
  title: "Duchel Decarte — Junior Software Engineer",
  description:
    "Portfolio of Duchel Decarte, Junior Software Engineer building useful, reliable digital products with modern web technologies.",
  authors: [{ name: "Ateuf Ngeufo Duchel Decarte" }],
  openGraph: {
    title: "Duchel Decarte — Junior Software Engineer",
    description:
      "Building purposeful digital products with modern web technologies.",
    type: "website",
  },
  icons: {
    icon: "/images/WhatsApp_Image_2026-09-04_at_17.15.38.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
