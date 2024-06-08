import type { Metadata } from "next";
import { Manrope } from "next/font/google";
//
import "./globals.css";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import AudioProvider from "@/providers/AudioProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcasts using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

//!
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><AudioProvider>
      <body className={`${manrope.className}`}>
        <ConvexClerkProvider>{children}</ConvexClerkProvider>
      </body></AudioProvider>
    </html>
  );
}
