import Head from "next/head";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { createClient } from "next-sanity";
import Navbar from "../../components/Navbar/Nav";
import CustomHead from "../../components/head/CustomHead";

const client = createClient({
  projectId: "ozrbni4y",
  dataset: "production",
  apiVersion: "2023-03-10",
  useCdn: false,
});

interface Props {
  slugs: object[];
  pageTitles: string[]
}
export default function Page(props: Props) {
  const { slugs, pageTitles } = props;

  return (
    <>
      <CustomHead
        title="Ocove Studio"
        description="Digital studio specialising in cutting edge web development, digital experiences, and 3d design. Founded by Billy Myles-Berkouwer, Arran Baker, and Matthew Congdon."
      />
      <Navbar slugs={slugs} pageTitles={pageTitles} />
      <motion.main
        key="index"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.main>
    </>
  );
}

// Add component to add new objects per route without rerendering, eg:
// Page.canvas = () => <Logo />
Page.canvas = () => <></>;

export const getStaticProps: GetStaticProps = async (context) => {
  const slugs = await client.fetch(`*[_type == "page"]{slug}`);
  const pageTitles = await client.fetch(`*[_type == "page"]{title}`);

  return {
    props: {
      slugs: slugs,
      pageTitles: pageTitles,
    },
  };
};