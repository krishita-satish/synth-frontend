import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Synth - AI Business Automation Platform',
  description: 'Discover what your company can automate with AI. Get a professional audit showing where AI can save time and money.',
  keywords: 'AI automation, business automation, AI audit, workflow optimization, AI agents',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
