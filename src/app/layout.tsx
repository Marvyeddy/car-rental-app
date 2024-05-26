import type { Metadata } from 'next';
import { Roboto, Roboto_Flex } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import { AuthContextProvider } from '@/context/AuthContext';

const inter = Roboto_Flex({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Car rental',
  description: 'Rent the best and comfortable cars for you...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} overflow-x-hidden`}>
        <main className='relative font-Roboto min-h-screen lg:px-20 px-7 flex flex-col'>
          <AuthContextProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthContextProvider>
        </main>
      </body>
    </html>
  );
}
