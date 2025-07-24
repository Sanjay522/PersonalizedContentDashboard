'use client';

import '../globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Heart, TrendingUp, Settings, User } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Personalized Feed', href: '/', icon: User },
    { label: 'Trending Section', href: '/trendings', icon: TrendingUp },
    { label: 'Favorite Section', href: '/favorite', icon: Heart },
    { label: 'Settings Preferences', href: '/settings', icon: Settings },

    
  ];

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <Provider store={store}>
          <div className="min-h-screen flex flex-col md:flex-row relative">

            {/* Mobile Header */}
            <header className="flex items-center justify-between md:hidden p-4 bg-white shadow-md z-10">
              <h1 className="text-xl font-semibold">Content Dashboard</h1>
              <button onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </header>

            {/* Sidebar */}
            <aside
              className={`
                fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                md:relative md:translate-x-0 md:block md:h-auto md:w-64
              `}
            >
              {/* Close button on mobile */}
              <div className="md:hidden flex justify-end">
                <button onClick={() => setSidebarOpen(false)} className="mb-4">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex flex-col gap-3 mt-4">
                {navItems.map(({ label, href, icon: Icon }) => {
                  const isActive = pathname === href;
                  return (
                    <a
                      key={label}
                      href={href}
                      className={`
                        flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                        ${isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'}
                      `}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{label}</span>
                    </a>
                  );
                })}
              </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6 mt-16 md:mt-0">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
