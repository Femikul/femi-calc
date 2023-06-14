import '@/styles/globals.css';
import 'w3-css/3/w3.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
