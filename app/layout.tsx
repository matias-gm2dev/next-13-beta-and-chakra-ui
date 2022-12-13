'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { Poppins } from '@next/font/google';
import { theme } from 'app/theme';
import { MainLayout } from './components/MainLayout';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>
        <ChakraProvider theme={theme}>
          <MainLayout>{children}</MainLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
