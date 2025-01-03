import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; // Import Link for navigation
import "./globals.css";

// Define Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Career Calendar",
  description: "A job calendar application",
};

// Define and export RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Header with Navigation */}
          <header className="bg-gray-800 text-white p-4">
            <nav className="flex gap-4">
              <Link href="/login" className="hover:underline">
                Login
              </Link>
              <Link href="/dashboard" className="hover:underline">
                Dashboard
              </Link>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer (Optional) */}
          <footer className="bg-gray-800 text-center text-white p-2">
            © 2024 Career Calendar
          </footer>
        </div>
      </body>
    </html>
  );
}
