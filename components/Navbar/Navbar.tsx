import Link from "next/link";

interface Props {
  slugs: object[];
  pageTitles: any;
}

const Navbar = (props: Props) => {
  const { slugs, pageTitles } = props;

  return (
    <nav>
      <ul>
        <li><Link href="/"><h1>Ocove Studio</h1></Link></li>
        <li><Link href="mailto:contact@ocove.studio"><p>Contact</p></Link></li>
      </ul>
      <ul>
        {slugs?.map((slug: any, i: number) => (
            <li key={slug + 'navbar-link'}><Link href={`/${slug.slug.current}`}><p>{pageTitles[i].title}</p></Link></li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
