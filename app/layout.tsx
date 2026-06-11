import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "COMAFE — Sistema de Gestão",
    template: "%s | COMAFE Autopeças",
  },
  description:
    "Sistema de gerenciamento da loja COMAFE Autopeças — CRM, vendas, leads, orçamentos, pedidos, metas e relatórios. Londrina, Paraná.",
  keywords: [
    "COMAFE",
    "autopeças",
    "Londrina",
    "Paraná",
    "sistema de gestão",
    "CRM",
    "vendas",
    "orçamentos",
    "pedidos",
  ],
  authors: [{ name: "COMAFE Autopeças" }],
  creator: "COMAFE Autopeças",
  publisher: "COMAFE Autopeças",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [
      { url: "/logo-comafe.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo-comafe.svg",
    apple: "/logo-comafe.svg",
  },
  openGraph: {
    title: "COMAFE — Sistema de Gestão",
    description:
      "Sistema de gerenciamento da loja COMAFE Autopeças. Londrina, Paraná.",
    siteName: "COMAFE Autopeças",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
