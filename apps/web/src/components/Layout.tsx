import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@monaco-shield/ui';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const changeLanguage = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-primary">
              MonacoShield
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-600 hover:text-primary">
                {t('nav.features')}
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-primary">
                {t('nav.pricing')}
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary">
                {t('nav.contact')}
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={router.locale}
                className="bg-transparent border border-gray-300 rounded-md px-2 py-1"
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="it">IT</option>
              </select>

              <Button asChild>
                <Link href="/signup">{t('nav.signup')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">MonacoShield</h3>
              <p className="text-gray-600">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.product')}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-gray-600 hover:text-primary">
                    {t('footer.features')}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-600 hover:text-primary">
                    {t('footer.pricing')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-primary">
                    {t('footer.about')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-primary">
                    {t('footer.contact')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.legal')}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-primary">
                    {t('footer.privacy')}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-primary">
                    {t('footer.terms')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} MonacoShield. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 