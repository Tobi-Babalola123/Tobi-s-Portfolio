import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { site } from "@/lib/data";
// import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const f = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Tobi Babalola | Frontend Developer & UI Engineer",
  description:
    "I'm Tobi Babalola, a Frontend Developer and UI Engineer crafting modern, responsive, and high-converting websites that help businesses grow. Specializing in React, Next.js, Tailwind CSS, and UI Engineering.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={f.variable}>
      <body className="font-sans bg-white">
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
