import Head from 'next/head';
import config from '../../config.json';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{config.general.brand}</title>
      </Head>
    </div>
  );
}
