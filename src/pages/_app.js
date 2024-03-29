import { useEffect } from "react";
import Theme from '../styles/theme';
import Head from 'next/head';
import Aos from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: 'ease-out-back',
      duration: 1000,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Head>
        <title>mahadisaputra.my.id: Portfolio</title>
        <meta name="author" content="I Dewa Gede Mahadi Saputra"/>
        <meta name="description" content="Mahadi Saputra's Portfolio Website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 