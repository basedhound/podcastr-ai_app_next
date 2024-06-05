import type { Metadata } from "next";
import { Manrope } from "next/font/google";
//
import ConvexClientProvider from "./providers/ConvexProvider";
import "./globals.css";

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
    <html lang="en">
      <body className={`${manrope.className}`}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
