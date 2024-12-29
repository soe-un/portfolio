import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";
import PageTransition from "./PageTransition";
import Sidebar from "./sidebar";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Soeun Portfolio",
  description: "Hello :)",
  icons: { icon: "favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSansKR.className} antialiased`}>
        <PageTransition>
          <div className="h-full w-full">{children}</div>
        </PageTransition>
        <Sidebar />
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </body>
    </html>
  );
}
