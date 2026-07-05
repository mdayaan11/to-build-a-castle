import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'To Build A Castle',
  description: 'Built with Heaven AI Engine',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
