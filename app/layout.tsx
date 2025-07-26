import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { getUser } from "@/server/db/queries";
import { UserProvider } from "@/server/auth";
import Footer from "@/components/footer";
import Header from "@/components/header";


export const metadata: Metadata = {
  title: "Kayana",
  description: " At Kayana, we are committed to delivering high-quality coffee experiences through our carefully crafted products and services",
  icons: [{ rel: "icon", url: "/icobulet.ico" }],
};


const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})


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
        className={`${manrope.className} antialiased`}
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
