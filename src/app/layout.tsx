import type { Metadata } from "next";
import { DM_Sans, Audiowide } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header"
import {CartWrapper} from "@/lib/CartStateWrapper"

const audiowide = Audiowide ({
  weight:["400"],
  variable: "--audiowide",
  subsets: ["latin"],
});

const dmSans = DM_Sans ({
  variable: "--dm-Sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template:"Northbound | %s",
    default:"Northbound"
  },
  description: "Luxury sportswear brand for all your daily needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${audiowide.variable} ${dmSans.variable}`}>
      <body>
        <CartWrapper>
          <Header/>
          {children}
        </CartWrapper>
        </body>
    </html>
  );
}
