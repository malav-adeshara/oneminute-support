import Hero from '@/components/landing/hero';
import Navbar from '@/components/landing/nav';
import React from 'react';

export default function Page() {
  return (
    <main className='w-full flex flex-col relative z-10'>
      <Navbar />
      <Hero />
    </main>
  );
}