import React from 'react'
import { HeaderPage, AdvantagesPage, TryPage, IncomePage, FaqPage, Footer } from '@/components';

export default function Home () {
  return (
    <main className='flex flex-col items-center justify-center'>page
    
      <HeaderPage />
      <AdvantagesPage />
      <TryPage />
      <IncomePage />
      <FaqPage />
      <Footer/>
    </main>
  )
}
