'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Twitter } from 'lucide-react';

export function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Button
        variant="destructive"
        className="w-full"
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    );
  }

  return (
    <Button
      className="w-full bg-[#1DA1F2] hover:bg-[#1a8cd8] flex items-center justify-center gap-2"
      onClick={() => signIn('twitter')}
    >
      <Twitter className="w-5 h-5" />
      Sign in with Twitter
    </Button>
  );
}