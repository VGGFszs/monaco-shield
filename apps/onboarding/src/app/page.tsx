'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';
import OnboardingFlow from '@/components/OnboardingFlow';

export default function OnboardingPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {t('onboarding.title')}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {t('onboarding.description')}
          </p>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <OnboardingFlow />
        </div>
      </main>
    </div>
  );
} 