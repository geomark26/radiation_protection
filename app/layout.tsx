import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/contexts/theme-provider';
import { Navbar } from '@/components/navbar';
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from 'next/font/google';

import '@/styles/globals.css';

const sansFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const displayFont = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: '400',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Radiation Protection Education',
  metadataBase: new URL('https://ariadocs.vercel.app/'),
  description:
    'A digital educational application in radiation protection for non-radiation health care workers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${sansFont.variable} ${displayFont.variable} ${monoFont.variable} font-regular antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className='sm:container mx-auto w-[90vw] h-auto scroll-smooth'>
            {children}
          </main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
