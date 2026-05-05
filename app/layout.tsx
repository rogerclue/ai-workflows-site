import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Workflows",
  description: "A curated library of AI workflow breakdowns from the best creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0f0f0f] text-[#f0f0f0] antialiased">
        <header className="border-b border-[#1e1e1e] px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-lg font-semibold tracking-tight hover:text-white transition-colors">
            AI Workflows
          </a>
          <nav className="flex gap-6 text-sm text-[#888]">
            <a href="/" className="hover:text-white transition-colors">Reports</a>
            <a href="/tools" className="hover:text-white transition-colors">Tools</a>
            <a href="/workflows" className="hover:text-white transition-colors">Patterns</a>
          </nav>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-[#1e1e1e] px-6 py-4 text-xs text-[#555] text-center">
          AI Workflows — personal knowledge base
        </footer>
      </body>
    </html>
  );
}
