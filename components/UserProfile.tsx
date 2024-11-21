'use client';

import { useSession } from 'next-auth/react';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

export function UserProfile() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4">
        <Avatar>
          <img
            src={session.user?.image || ''}
            alt={session.user?.name || ''}
            className="rounded-full"
          />
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">{session.user?.name}</h2>
          <p className="text-gray-500">{session.user?.email}</p>
        </div>
      </div>
    </Card>
  );
}