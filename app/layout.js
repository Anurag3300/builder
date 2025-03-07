import { GoogleTagManager } from '@next/third-parties/google';
import { Geist, Geist_Mono, Nunito_Sans, Rubik } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rubik = Nunito_Sans({
  variable: "--font-rubik",
  subsets: ["latin"],
})
export const metadata = {
  title: "Alfafire",
  description: "A website to showcase products of Alfafire",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${rubik.className} antialiased`}>
      <div className="w-full"> {children} </div>
      <div>
        <Footer />
      </div>
    </body>
    <GoogleTagManager gtmId="GTM-PZWW62C4" />
  </html>
  );
}
