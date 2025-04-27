import { Inter } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MonacoShield - Onboarding',
  description: 'Complete your registration and subscription process',
};

function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-50">
          <Component {...pageProps} />
        </main>
      </body>
    </html>
  );
}

export default appWithTranslation(RootLayout); 