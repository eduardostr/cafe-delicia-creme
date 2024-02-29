import Politics from '@/Components/Politica/Politica';
import Head from 'next/head';

export default function Policy() {
  return (
    <>
      <Head>
        <title>Política de privacidade – Café Delicia</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <Politics />
      </main>
    </>
  );
}
