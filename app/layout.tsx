import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { BaseLayout } from "@/src/shared/ui/base-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: "Millionaire" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
