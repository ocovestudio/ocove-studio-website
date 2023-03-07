import Link from "next/link";
import { FunctionComponentFactory } from "react";

interface INavProps {}

const Nav: FunctionComponentFactory<INavProps> = (props) => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Ocove Studio</Link></li>
        <li><Link href="/members">Members</Link></li>
      </ul>
      <ul>
        <li><Link href="/members">Members</Link></li>
        <li><Link href="/members">Members</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
