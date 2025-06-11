/* eslint-disable @typescript-eslint/quotes */
import { AppProps } from 'next/app';
import '@/styles/global.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { setup } from 'twind';
import twindConfig from '../twind.config';

// eslint-disable-next-line @typescript-eslint/quotes
const inter = Inter({ subsets: ['latin'] });

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
/* eslint-enable @typescript-eslint/quotes */
