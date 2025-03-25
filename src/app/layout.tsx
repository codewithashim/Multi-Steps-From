import type { Metadata } from "next";
import "../styles/globals.scss";


export const metadata: Metadata = {
  title: "Multi Step Form",
  description: "A multi step form built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" cz-shortcut-listen="true">
      <body>
        {children}
      </body>
    </html>
  );
}
