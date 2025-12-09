import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Sales Analytics Dashboard",
  description: "Multi-year sales analytics dashboard with Recharts and Next.js 15",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <div className="min-h-screen bg-brand-sand">
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white font-semibold">
                SA
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">Sales Analytics</p>
                <p className="text-sm text-gray-500">Multi-Year Visualization</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">Next.js 15 · Recharts · Tailwind</span>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
      </div>
    </body>
  </html>
);

export default RootLayout;

