import { AuthContext } from '@/src/contexts/AuthContext';
import { useContext } from 'react';

export default function useAuth() {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('Hata: AuthProvider ile sarmalanmamış');
  }

  return authContext;
}
