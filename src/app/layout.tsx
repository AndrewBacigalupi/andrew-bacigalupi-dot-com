import './globals.css';
import { ReactNode } from 'react';

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
