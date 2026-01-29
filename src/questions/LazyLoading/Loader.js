import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'))
const LazyComponentA = lazy(()=>import('./LazyComponentA'))
const LazyComponentB = lazy(()=>import('./LazyComponentB'))

 const Loader=()=> {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
        <LazyComponentA />
        <LazyComponentB />
      </Suspense>
    </div>
  );
}

export default Loader //compulsory make it should be default export