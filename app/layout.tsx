import type { Metadata } from "next";
import "./globals.css";

import Navbar from './Layout/Navbar';
import AnnouncementBar from './Layout/AnnouncementBar';
import PageHeader from "./Layout/PageHeader";
import Footer from "./Layout/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AnnouncementBar />
        <div className="container-fluid shadow-sm">
          <PageHeader />
          <Navbar />
        </div>
        <div className="container-fluid min-h-154">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
