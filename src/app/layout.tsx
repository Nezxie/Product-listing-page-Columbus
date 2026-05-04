import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header"
import {CartWrapper} from "@/lib/CartStateWrapper"

const spaceGrotesk = Space_Grotesk({
  variable: "--spaceGrotesk",
  subsets: ["latin"],
});

const dmSans = DM_Sans ({
  variable: "--dm-Sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template:"Columbus Graduate Program Recruitment Task | %s",
    default:"Columbus Graduate Program Recruitment Task"
  },
  description: "Luxury sportswear brand for all your daily needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body>
        <CartWrapper>
          <Header/>
          {children}
        </CartWrapper>
        </body>
    </html>
  );
}
