import type { Metadata, Viewport } from "next";
import "./globals.css";
import "../tokens.css";
import "./portfolio.css";
import ThemeToggle from "@/components/ThemeToggle";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#f4efea",
};

const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="dark"?"dark":"light"}catch(e){}`;

const description = "Software engineer in Toronto. I build mobile products, document tools, and the services behind them.";

export const metadata: Metadata = {
  // Absolute base for the share image; set NEXT_PUBLIC_SITE_URL if the site lives elsewhere.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://aradhya.dev"),
  title: "Aradhya Singh — Software Engineer",
  description,
  openGraph: {
    title: "Aradhya Singh — Software Engineer",
    description,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 627, alt: "Aradhya Singh, software engineer in Toronto, with the Hushfield app" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Set theme before paint: stored choice, else light. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
