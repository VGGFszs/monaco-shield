import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Button } from '@monaco-shield/ui';
import ProtectedRoute from '@/components/ProtectedRoute';
import { getUserProfile, getUserSubscription, getUserActivityLogs } from '@/services/api';

export default function Dashboard() {
  const { t } = useTranslation('common');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [subscriptionData, setSubscriptionData] = useState<any>(null);
  const [activityLogs, setActivityLogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch user profile
        const profile = await getUserProfile();
        setUserData(profile);

        // Fetch subscription data
        const subscription = await getUserSubscription();
        setSubscriptionData(subscription);

        // Fetch activity logs
        const logs = await getUserActivityLogs({ limit: 5 });
        setActivityLogs(logs);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load dashboard data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <main className="container mx-auto px-4 py-8">
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {t('dashboard.welcome')}, {userData?.firstName || ''}!
              </h1>
              <p className="text-gray-600 mb-6">
                {t('dashboard.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-blue-900 mb-2">
                    {t('dashboard.stats.title')}
                  </h2>
                  <p className="text-blue-700">
                    {t('dashboard.stats.description')}
                  </p>
                  {subscriptionData && (
                    <div className="mt-4">
                      <p className="text-sm text-blue-800">
                        {t('dashboard.stats.plan')}: {subscriptionData.planName}
                      </p>
                      <p className="text-sm text-blue-800">
                        {t('dashboard.stats.status')}: {subscriptionData.status}
                      </p>
                    </div>
                  )}
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-green-900 mb-2">
                    {t('dashboard.activities.title')}
                  </h2>
                  <p className="text-green-700">
                    {t('dashboard.activities.description')}
                  </p>
                  {activityLogs.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {activityLogs.map((log, index) => (
                        <li key={index} className="text-sm text-green-800">
                          {log.action} - {new Date(log.timestamp).toLocaleDateString()}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-purple-900 mb-2">
                    {t('dashboard.alerts.title')}
                  </h2>
                  <p className="text-purple-700">
                    {t('dashboard.alerts.description')}
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="primary">
                  {t('dashboard.getStarted')}
                </Button>
              </div>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}; 