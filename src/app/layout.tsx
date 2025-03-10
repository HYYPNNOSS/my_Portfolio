import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import localFont from 'next/font/local';

import "./globals.css";



// const birds = localFont({
//   src: [
//     { path: '../../public/fonts/hero/Birds.ttf', weight: '500', style: 'normal' },

//   ],
//   variable: '--font-birds',
// });

// const sfProDisplay = localFont({
//   src: [
//     { path: '../../public/fonts/text/SFPRODISPLAYBLACKITALIC.ttf', weight: '900', style: 'italic' },
//     { path: '../../public/fonts/text/SFPRODISPLAYBOLD.ttf', weight: '700', style: 'normal' },
//     { path: '../../public/fonts/text/SFPRODISPLAYHEAVYITALIC.ttf', weight: '800', style: 'italic' },
//     { path: '../../public/fonts/text/SFPRODISPLAYLIGHTITALIC.ttf', weight: '300', style: 'italic' },
//     { path: '../../public/fonts/text/SFPRODISPLAYMEDIUM.ttf', weight: '500', style: 'normal' },
//     { path: '../../public/fonts/text/SFPRODISPLAYREGULAR.ttf', weight: '400', style: 'normal' },
//     { path: '../../public/fonts/text/SFPRODISPLAYSEMIBOLDITALIC.ttf', weight: '600', style: 'italic' },
//     { path: '../../public/fonts/text/SFPRODISPLAYTHINITALIC.ttf', weight: '100', style: 'italic' },
//     { path: '../../public/fonts/text/SFPRODISPLAYULTRALIGHTITALIC.ttf', weight: '200', style: 'italic' },
//   ],
//   variable: '--font-sfProDisplay',
// });



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "High-Converting Websites | Dominate Your Market",
  description: "I craft high-converting, profit-driven websites that turn visitors into paying customers. Let's build your project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} SF-pro antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
