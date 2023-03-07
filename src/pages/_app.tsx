import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import Scene from '../../components/3d/Scene'
import Navbar from '../../components/Navbar/Nav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inconsolata.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        />
      </Head>
      <div className='three-canvas-container'>
        <Scene />
      </div>
      <main>
        <Component {...pageProps} />
      </main>
      <Navbar />
    </>    
  )
}
