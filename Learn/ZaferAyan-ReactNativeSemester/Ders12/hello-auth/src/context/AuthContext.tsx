import type { Session } from '@supabase/supabase-js';
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export type AuthContextType = {
  session: Session | null;
  setSession: (session: Session | null) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined){
  auth: {
    session: Session | null;
    isLoading: true;
  };
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const value: AuthContextType = {
    session,
    setSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth: () => AuthContextType = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
