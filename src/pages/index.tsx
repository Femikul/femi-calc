import React, { useState, useEffect, Suspense, lazy } from 'react';
import Head from 'next/head'
import Loading from '../components/Loading';

export default function Home() {
 
  const Calc = lazy(() => import('../components/Calc'));

  return (
    <>
<<<<<<< HEAD
=======
    <Suspense fallback={<Loading />}>
>>>>>>> fa43a5ab171a87df2ba3d9eff14e00097b7e6dae
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
