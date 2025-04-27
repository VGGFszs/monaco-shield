import React from 'react';
import { useTranslation } from 'next-i18next';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

interface SubscriptionPlansProps {
  onSelectPlan: (planId: string) => void;
  selectedPlan?: string;
}

export default function SubscriptionPlans({ onSelectPlan, selectedPlan }: SubscriptionPlansProps) {
  const { t } = useTranslation();

  const plans: Plan[] = [
    {
      id: 'basic',
      name: t('subscription.plans.basic.name'),
      price: 9.99,
      features: [
        t('subscription.plans.basic.features.feature1'),
        t('subscription.plans.basic.features.feature2'),
        t('subscription.plans.basic.features.feature3'),
      ],
    },
    {
      id: 'pro',
      name: t('subscription.plans.pro.name'),
      price: 19.99,
      features: [
        t('subscription.plans.pro.features.feature1'),
        t('subscription.plans.pro.features.feature2'),
        t('subscription.plans.pro.features.feature3'),
        t('subscription.plans.pro.features.feature4'),
      ],
      recommended: true,
    },
    {
      id: 'enterprise',
      name: t('subscription.plans.enterprise.name'),
      price: 49.99,
      features: [
        t('subscription.plans.enterprise.features.feature1'),
        t('subscription.plans.enterprise.features.feature2'),
        t('subscription.plans.enterprise.features.feature3'),
        t('subscription.plans.enterprise.features.feature4'),
        t('subscription.plans.enterprise.features.feature5'),
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`relative rounded-lg border p-6 shadow-sm ${
            plan.recommended
              ? 'border-primary ring-2 ring-primary'
              : 'border-gray-200'
          }`}
        >
          {plan.recommended && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
              <span className="inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-white">
                {t('subscription.recommended')}
              </span>
            </div>
          )}

          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
              <span className="text-base font-medium text-gray-500">/month</span>
            </div>
          </div>

          <ul className="mt-6 space-y-4">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => onSelectPlan(plan.id)}
            className={`mt-8 block w-full rounded-md px-4 py-2 text-center text-sm font-medium ${
              selectedPlan === plan.id
                ? 'bg-primary text-white'
                : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
            }`}
          >
            {selectedPlan === plan.id
              ? t('subscription.selected')
              : t('subscription.select')}
          </button>
        </div>
      ))}
    </div>
  );
} 