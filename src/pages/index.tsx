import Head from "next/head";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Logo } from "../../components/3d/Logo";
export default function Page() {
  return (
    <>
      <Head>
        <title>Ocove Studio</title>
      </Head>
      <motion.main
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.main>
    </>
  )
}

// Add component to add new objects per route without rerendering, eg:
// Page.canvas = () => <Logo />

Page.canvas = () => <></>