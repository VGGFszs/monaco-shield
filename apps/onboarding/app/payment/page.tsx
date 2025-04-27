import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { processPayment, createSubscription } from '@/services/api';

interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
}

export default function PaymentPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  useEffect(() => {
    // Get the selected plan ID from localStorage
    const planId = localStorage.getItem('selectedPlanId');
    if (!planId) {
      // If no plan is selected, redirect back to subscription page
      router.push('/subscription');
      return;
    }
    setSelectedPlanId(planId);
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formattedValue = value
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim();
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
      return;
    }
    
    // Format expiry date with slash
    if (name === 'expiryDate') {
      const formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .substring(0, 5);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
      return;
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      if (!selectedPlanId) {
        throw new Error('No subscription plan selected');
      }
      
      // Process the payment
      const paymentResult = await processPayment({
        amount: 0, // This should come from the selected plan
        currency: 'EUR',
        paymentMethodId: 'pm_test', // In a real app, this would be created via Stripe
      });
      
      // Create the subscription
      await createSubscription({
        planId: selectedPlanId,
        paymentMethodId: paymentResult.paymentMethodId,
      });
      
      // Clear the selected plan from localStorage
      localStorage.removeItem('selectedPlanId');
      
      // Redirect to success page
      router.push('/success');
    } catch (error: any) {
      console.error('Payment error:', error);
      setError(
        error.response?.data?.message || 
        error.message || 
        t('payment.errors.processingFailed') || 
        'Failed to process payment'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {t('payment.title')}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {t('payment.subtitle')}
          </p>
        </div>

        {error && (
          <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="nameOnCard" className="sr-only">
                {t('payment.nameOnCard')}
              </label>
              <input
                id="nameOnCard"
                name="nameOnCard"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder={t('payment.nameOnCard')}
                value={formData.nameOnCard}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="cardNumber" className="sr-only">
                {t('payment.cardNumber')}
              </label>
              <input
                id="cardNumber"
                name="cardNumber"
                type="text"
                required
                maxLength={19}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder={t('payment.cardNumber')}
                value={formData.cardNumber}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div className="flex">
              <div className="w-1/2">
                <label htmlFor="expiryDate" className="sr-only">
                  {t('payment.expiryDate')}
                </label>
                <input
                  id="expiryDate"
                  name="expiryDate"
                  type="text"
                  required
                  maxLength={5}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder={t('payment.expiryDate')}
                  value={formData.expiryDate}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="cvv" className="sr-only">
                  {t('payment.cvv')}
                </label>
                <input
                  id="cvv"
                  name="cvv"
                  type="text"
                  required
                  maxLength={4}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder={t('payment.cvv')}
                  value={formData.cvv}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {isLoading ? (
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
              ) : null}
              {isLoading ? t('payment.processing') : t('payment.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
} 