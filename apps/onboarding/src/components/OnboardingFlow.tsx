import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import RegistrationForm from './RegistrationForm';
import SubscriptionPlans from './SubscriptionPlans';
import PaymentForm from './PaymentForm';
import { useAuth } from '@/contexts/AuthContext';
import { createSubscription, processPayment } from '@/services/api';

type Step = 'registration' | 'subscription' | 'payment';

interface OnboardingData {
  registration: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  subscription: {
    planId: string;
    planName: string;
    price: number;
  };
  payment: {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    cvv: string;
  };
}

export default function OnboardingFlow() {
  const { t } = useTranslation();
  const router = useRouter();
  const { register, user, isLoading: authLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState<Step>('registration');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    registration: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    subscription: {
      planId: '',
      planName: '',
      price: 0,
    },
    payment: {
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
    },
  });

  const handleRegistrationComplete = async (data: OnboardingData['registration']) => {
    setIsLoading(true);
    setError(null);
    try {
      await register(data);
      setOnboardingData((prev) => ({
        ...prev,
        registration: data,
      }));
      setCurrentStep('subscription');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubscriptionComplete = (planId: string) => {
    // Get plan details from the selected plan
    const planDetails = {
      planId,
      planName: t(`subscription.plans.${planId}.name`),
      price: planId === 'basic' ? 9.99 : planId === 'pro' ? 19.99 : 49.99,
    };

    setOnboardingData((prev) => ({
      ...prev,
      subscription: planDetails,
    }));
    setCurrentStep('payment');
  };

  const handlePaymentComplete = async (data: OnboardingData['payment']) => {
    setIsLoading(true);
    setError(null);
    try {
      // Process payment
      const paymentResult = await processPayment({
        amount: onboardingData.subscription.price,
        currency: 'EUR',
        paymentMethodId: 'pm_card_visa', // This would be replaced with actual payment method ID
      });

      // Create subscription
      await createSubscription({
        planId: onboardingData.subscription.planId,
        paymentMethodId: paymentResult.paymentMethodId,
      });

      setOnboardingData((prev) => ({
        ...prev,
        payment: data,
      }));
      
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment processing failed');
    } finally {
      setIsLoading(false);
    }
  };

  // If user is already authenticated, redirect to dashboard
  if (user && currentStep === 'registration') {
    router.push('/dashboard');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {['registration', 'subscription', 'payment'].map((step, index) => (
            <React.Fragment key={step}>
              <div className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    currentStep === step
                      ? 'bg-primary text-white'
                      : index < ['registration', 'subscription', 'payment'].indexOf(currentStep)
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {index + 1}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">
                  {t(`onboarding.steps.${step}`)}
                </span>
              </div>
              {index < 2 && (
                <div className="flex-1 mx-4 h-0.5 bg-gray-200">
                  <div
                    className="h-0.5 bg-primary transition-all duration-500"
                    style={{
                      width:
                        index < ['registration', 'subscription', 'payment'].indexOf(currentStep)
                          ? '100%'
                          : '0%',
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="mt-8">
        {currentStep === 'registration' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t('onboarding.registration.title')}
            </h2>
            <RegistrationForm 
              onSubmit={handleRegistrationComplete} 
              isLoading={isLoading || authLoading} 
            />
          </div>
        )}

        {currentStep === 'subscription' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t('onboarding.subscription.title')}
            </h2>
            <SubscriptionPlans
              onSelectPlan={handleSubscriptionComplete}
              selectedPlan={onboardingData.subscription.planId}
            />
          </div>
        )}

        {currentStep === 'payment' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t('onboarding.payment.title')}
            </h2>
            <PaymentForm
              onSubmit={handlePaymentComplete}
              selectedPlan={{
                id: onboardingData.subscription.planId,
                name: onboardingData.subscription.planName,
                price: onboardingData.subscription.price,
              }}
              isLoading={isLoading}
            />
          </div>
        )}
      </div>
    </div>
  );
} 