import Terms from '@/Components/Termo/Termo';
import Head from 'next/head';

export default function Term() {
  return (
    <>
      <Head>
        <title>Termos e Condições – Café Delicia</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <Terms />
      </main>
    </>
  );
}
