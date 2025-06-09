import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter/latin.css';

import { setup } from 'twind';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
