import { QueryProvider } from '@/providers/QueryProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JSONPlaceholder App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <main className="max-w-6xl mx-auto p-4">
            {children}
          </main>
        </QueryProvider>
      </body>
    </html>
  );
} 