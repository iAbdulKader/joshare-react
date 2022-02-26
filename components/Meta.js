import Head from 'next/head';

export default function Meta({ title }) {
  return (
      <Head>
        <title>{title}</title>
        <meta name="description" content="joShare - A File Sharing App. Share Files With Ease." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
}