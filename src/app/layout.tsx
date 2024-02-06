import { meta } from '@/lib/metadata';
import { Rubik, Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import "./globals.css";

export const metadata = meta;

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={
        `${rubik.className} ${robotoMono.className}`
      }><ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
