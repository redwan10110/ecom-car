import '@/styles/globals.css'
import '../public/css/plugins/magnific-popup.css';
import '../public/css/plugins/swiper-bundle.min.css';
import '../public/css/vendor/icofont.min.css';
import '../public/css/vendor/line-awesome.min.css';
import '../public/css/vendor/simple-line-icons.css';
import '../public/css/style.css';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
