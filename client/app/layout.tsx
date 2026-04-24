import AppHeader from "@/src/components/layout/AppHeader";
import type { Metadata } from "next";
import { WindowSizeListener } from "../src/components/WindowSizeListener";
import { QueryProvider } from "../src/providers/QueryProvider";
import { ReduxProvider } from "../src/providers/ReduxProvider";
import "./globals.css";
import AppFooter from "@/src/components/layout/AppFooter";

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
    <html lang="en">
      <body>
        <QueryProvider>
          <ReduxProvider>
            <WindowSizeListener />
            <div className="flex h-full w-full flex-col">
              <AppHeader />
              <main className="flex-1">{children}</main>
              <AppFooter />
            </div>
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
