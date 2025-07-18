import './globals.css';
import { ReactNode } from 'react';
import Head from "next/head";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-10">
        <header className="header">
          <Head>
          < link rel="icon" href="/ab.png" type="image/png" />
          </Head>
          <nav className="nav">
            
          </nav>
        </header>
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
