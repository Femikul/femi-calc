import React, { useState, useEffect, Suspense, lazy } from 'react';
import Head from 'next/head'
import Loading from '../components/Loading';

export default function Home() {
 
  const Calc = lazy(() => import('../components/Calc'));

  return (
    <>
      <Head>
        <title>Calculator App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Suspense fallback={<Loading />}>     
      <Calc />
      </Suspense>
    </>
  );
}
