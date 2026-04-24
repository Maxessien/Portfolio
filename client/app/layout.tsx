import type { Metadata } from "next";
import { WindowSizeListener } from "../src/components/WindowSizeListener";
import { QueryProvider } from "../src/providers/QueryProvider";
import { ReduxProvider } from "../src/providers/ReduxProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Max Essien",
  description: "Max Essien dev portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <ReduxProvider>
            <WindowSizeListener />
            {children}
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
