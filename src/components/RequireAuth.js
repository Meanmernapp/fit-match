// components/RequireAuth.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

const RequireAuth = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useAuth(); 

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin', { scroll: true });
    }
  }, [user, loading, router]);

  return children;
};

export default RequireAuth;
