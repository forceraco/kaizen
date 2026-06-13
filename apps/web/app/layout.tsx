import type { Metadata } from "next";
import "./globals.css";
import { TabBar } from "@/components/ui/TabBar";
import { AICoach } from "@/components/AICoach";
import { MiniPlayer } from "@/components/MiniPlayer";

export const metadata: Metadata = {
  title: "APEX - Стань найкращою версією себе",
  description: "Преміальний холістичний застосунок чоловічого розвитку",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className="antialiased min-h-screen">
        <main className="pb-32 px-4 pt-8 max-w-lg mx-auto">
          {children}
        </main>
        <MiniPlayer />
        <TabBar />
        <AICoach />
      </body>
    </html>
  );
}
