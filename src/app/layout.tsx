import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const PoppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.woff",
  variable: "--font-poppins-regular",
  weight: "400"
})
const PoppinsSemibold = localFont({
  src: "./fonts/Poppins-SemiBold.woff",
  variable: "--font-poppins-semibold",
  weight: "600"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PoppinsRegular.variable} ${PoppinsSemibold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
