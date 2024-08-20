// hooks/auth.js
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const useAuth = (router) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userDataFromCookie = Cookies.get('userData');
      if (userDataFromCookie) {
        setUser(JSON.parse(userDataFromCookie));
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  return { user, loading };
};

export { useAuth };
