import { useEffect } from 'react';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /dashboard if the user is at the root
    if (router.pathname === '/') {
      router.replace('/dashboard');
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;
