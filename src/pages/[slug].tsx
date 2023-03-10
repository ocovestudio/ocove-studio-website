import { createClient } from "next-sanity";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { GetStaticProps } from "next";
import Navbar from "../../components/Navbar/Navbar";
import CustomHead from "../../components/head/CustomHead";
import Image from "next/image";

const client = createClient({
  projectId: "ozrbni4y",
  dataset: "production",
  apiVersion: "2023-03-10",
  useCdn: false,
});

interface PageProps {
  direction: string;
  description: string;
  title: string;
  body: any;
  slugs: object[];
  pageTitles: any;
}

export default function Page(props: PageProps) {
  const { direction, title, body, slugs, pageTitles, description } = props;

  return (
    <>
      <CustomHead 
        title={title}
        description={description}
      />
      <Navbar slugs={slugs} pageTitles={pageTitles} />
      <motion.main
        key={title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className={direction}>
          {body?.map((el: any) => {
            return (
              <div key={el[0].title + 'body'}>
                {el[0]?.showTitle && <p>{el[0].title}</p>}
                {el[0]?.content && <PortableText value={el[0].content} />}
                {el[0]?.linkedIn && <a style={{width: '20px', height: '20px', paddingRight: '0.5em'}} href={el[0]?.linkedIn}><Image alt="LinkedIn icon link" style={{objectFit: 'contain'}} width={20} height={20} src="/icons/linkedin-icon.png"/></a>}
                {el[0]?.website && <a style={{width: '20px', height: '20px', paddingRight: '0.5em'}} href={el[0]?.website}><Image alt="Website icon link" style={{objectFit: 'contain'}} width={20} height={20} src="/icons/website-icon.png"/></a>}
              </div>
            );
          })}
        </section>
      </motion.main>
    </>
  );
}

export async function getStaticPaths() {
  const pages = await client.fetch(`*[_type == "page"]`);

  const paths = pages.map((page: any) => {
    return {
      params: { slug: page.slug.current },
    };
  });

  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await client.fetch(
    `*[_type == "page" && slug.current == "${context?.params?.slug}"]`
  );
  const slugs = await client.fetch(`*[_type == "page"]{slug}`);
  const pageTitles = await client.fetch(`*[_type == "page"]{title}`);

  // get data from references
  const ids = data[0]?.body?.map((ref: any) => ref["_ref"]);
  const promises = ids?.map(
    async (id: string) => await client.fetch(`*[_id == "${id}"]`)
  );
  const refs = promises ? await Promise.all([...promises]) : null;

  return {
    props: {
      title: data[0].title,
      description: data[0].description,
      body: refs,
      slugs: slugs,
      pageTitles: pageTitles, 
      direction: data[0]?.direction || null,
    },
    revalidate: 20,
  };
};

Page.canvas = () => <></>;
