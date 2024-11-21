import { LoginButton } from '@/components/LoginButton';
import { UserProfile } from '@/components/UserProfile';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
              Twitter Authentication Demo
            </h1>
            <div className="space-y-6">
              <LoginButton />
              <UserProfile />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}