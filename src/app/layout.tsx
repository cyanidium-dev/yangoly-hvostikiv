import "./globals.css";
import { Raleway } from "next/font/google";

const releway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${releway.className}`}>{children}</body>
    </html>
  );
}
