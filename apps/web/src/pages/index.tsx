import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Button } from '@monaco-shield/ui';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>MonacoShield - Compliance Platform for Monaco Businesses</title>
        <meta
          name="description"
          content="MonacoShield helps Monaco-based companies meet Anti-Money Laundering (AML) and electronic signature obligations with our comprehensive compliance platform."
        />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl mb-8">{t('hero.subtitle')}</p>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="/signup">{t('hero.cta.primary')}</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">{t('hero.cta.secondary')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t('features.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature cards will go here */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
} 