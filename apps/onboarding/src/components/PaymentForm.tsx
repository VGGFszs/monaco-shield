import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

interface PaymentFormData {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

interface PaymentFormProps {
  onSubmit: (data: PaymentFormData) => void;
  selectedPlan: {
    id: string;
    name: string;
    price: number;
  };
}

export default function PaymentForm({ onSubmit, selectedPlan }: PaymentFormProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });
  const [errors, setErrors] = useState<Partial<PaymentFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<PaymentFormData> = {};

    // Card number validation (16 digits)
    if (!formData.cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) {
      newErrors.cardNumber = t('payment.errors.invalidCardNumber');
    }

    // Card holder validation
    if (!formData.cardHolder.trim()) {
      newErrors.cardHolder = t('payment.errors.required');
    }

    // Expiry date validation (MM/YY format)
    if (!formData.expiryDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
      newErrors.expiryDate = t('payment.errors.invalidExpiryDate');
    }

    // CVV validation (3 or 4 digits)
    if (!formData.cvv.match(/^\d{3,4}$/)) {
      newErrors.cvv = t('payment.errors.invalidCvv');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'cardNumber') {
      formattedValue = value
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim();
    }

    // Format expiry date
    if (name === 'expiryDate') {
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .slice(0, 5);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof PaymentFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900">
          {t('payment.orderSummary')}
        </h3>
        <div className="mt-2 flex justify-between">
          <span className="text-gray-600">{selectedPlan.name}</span>
          <span className="font-medium">${selectedPlan.price}/month</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            {t('payment.cardNumber')}
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
              errors.cardNumber ? 'border-red-500' : ''
            }`}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
          />
          {errors.cardNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="cardHolder"
            className="block text-sm font-medium text-gray-700"
          >
            {t('payment.cardHolder')}
          </label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
              errors.cardHolder ? 'border-red-500' : ''
            }`}
            placeholder="John Doe"
          />
          {errors.cardHolder && (
            <p className="mt-1 text-sm text-red-600">{errors.cardHolder}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700"
            >
              {t('payment.expiryDate')}
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
                errors.expiryDate ? 'border-red-500' : ''
              }`}
              placeholder="MM/YY"
              maxLength={5}
            />
            {errors.expiryDate && (
              <p className="mt-1 text-sm text-red-600">{errors.expiryDate}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-gray-700"
            >
              {t('payment.cvv')}
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
                errors.cvv ? 'border-red-500' : ''
              }`}
              placeholder="123"
              maxLength={4}
            />
            {errors.cvv && (
              <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {t('payment.submit')}
        </button>
      </form>
    </div>
  );
} 