import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sreekanth P G | UI/UX Designer & Full-Stack Developer',
  description: 'Premium portfolio of Sreekanth P G, a UI/UX Designer, Full-Stack Developer, and AIFF D-licensed football coach.',
  keywords: ['Sreekanth P G', 'UI/UX Designer', 'Full-Stack Developer', 'Frontend', 'Next.js', 'Portfolio'],
  openGraph: {
    title: 'Sreekanth P G | UI/UX & Engineering',
    description: 'Designing Experiences. Engineering Systems. Playing to Win.',
    url: 'https://sreekanth-portfolio.vercel.app',
    siteName: 'Sreekanth P G Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
