import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blogr",
  description: "A fullstack blog starter built with Next.js and Prisma.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  //console.log("Current user:", user);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body>
        <header className="header">
          <nav className="nav" aria-label="Main navigation">
            <Link href="/">Feed</Link>
            {user ? <Link href="/drafts">My drafts</Link> : null}
          </nav>
          <div className="header-actions">
            {user ? (
              <>
                <span className="user">{user.name ?? user.email}</span>
                <Link className="button secondary" href="/create">
                  New post
                </Link>
                <form action="/api/auth/signout" method="post">
                  <button type="submit">Log out</button>
                </form>
              </>
            ) : (
              <a className="button" href="/api/auth/authorize">
                Sign in with Vercel
              </a>
            )}
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
