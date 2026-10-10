import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog pessoal de desenvolvimento web, com artigos sobre React, Next.js, TypeScript e outras tecnologias.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
        lang="pt-BR"
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 antialiased dark:bg-black dark:text-zinc-100">

        {children}

        </body>
    </html>
  );
}
