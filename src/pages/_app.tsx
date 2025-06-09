import { AppProps } from 'next/app';
import '@/styles/global.css';
import { Inter } from 'next/font/google';

import { setup } from 'twind';
import twindConfig from '../twind.config';

// eslint-disable-next-line @typescript-eslint/quotes
const inter = Inter({ subsets: ['latin'] });

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
