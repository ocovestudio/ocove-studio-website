import Head from "next/head";
import Scene from "../../components/3d/Scene";
import { motion } from "framer-motion";

export default function Home() {
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
      >
    </motion.main>
    </>
  )
}