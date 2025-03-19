import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getUser } from "@/server/db/queries";
import { UserProvider } from "@/server/auth";
import Footer from "@/components/footer";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AB Roastery",
  description: " At AB Roastery (ABR), we are committed to delivering high-quality coffee experiences through our carefully crafted products and services",
  icons: [{ rel: "icon", url: "/icobulet.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //eslint-disable-next-line
  let userPromise = getUser().then((user) => user ?? null);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider userPromise={userPromise}>
          <Header />
          {children}
        </UserProvider>
        <Footer />
      </body>
    </html>
  );
}
