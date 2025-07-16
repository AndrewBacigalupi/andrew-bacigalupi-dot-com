import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#resume', label: 'Resume' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-10">
        <header className="header">
          <nav className="nav">
            
          </nav>
        </header>
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
