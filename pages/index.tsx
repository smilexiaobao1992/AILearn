import Head from 'next/head';
import Hero from '../components/hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome AILearn</title>
      </Head>
      <Hero/>
    </div>
  );
}
