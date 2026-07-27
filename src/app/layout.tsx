import type { Metadata } from 'next';
import { Inter, Special_Elite } from 'next/font/google';
import { StoreProvider } from '@/components/StoreProvider';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const specialElite = Special_Elite({
  variable: '--font-special-elite',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ceramic Tile Order Form — The Artisan Kiln',
  description:
    'Order handcrafted ceramic tiles from The Artisan Kiln. Design custom patterns with our interactive visualization tool.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${specialElite.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal" suppressHydrationWarning>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
