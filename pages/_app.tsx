import { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const obj = { b: true, a: false };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} key={obj.a} />;
}

export default MyApp;
