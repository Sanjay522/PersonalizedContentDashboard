// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personalized Content Dashboard',
  description: 'Track and interact with personalized content.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <div className="min-h-screen flex">
          <aside className="w-64 bg-white shadow-md p-4">
            <nav className="flex flex-col gap-4">
              <a href="/dashboard" className="hover:text-blue-600">Dashboard</a>
              <a href="/settings" className="hover:text-blue-600">Settings</a>
            </nav>
          </aside>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
