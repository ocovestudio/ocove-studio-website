import '@/styles/globals.css'
import { MouseInfoProvider } from '@faceless-ui/mouse-info'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRef, useState } from 'react'
import Navbar from '../../components/Navbar/Nav'

const Scene = dynamic(() => import('../../components/3d/Scene'), { ssr: true })

export default function App({ Component, pageProps }: AppProps) {
  const ref = useRef()
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
      <MouseInfoProvider>
        <AnimatePresence mode='wait' >
          <Component {...pageProps} />
        </AnimatePresence>
        {/* @ts-ignore */}
        {Component?.canvas && (
            <Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
              {/* @ts-ignore */}
              {Component.canvas(pageProps)}
            </Scene>
        )}
        <Navbar />
      </MouseInfoProvider>
    </>    
  )
}
