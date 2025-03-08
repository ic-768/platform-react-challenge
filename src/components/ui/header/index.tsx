import { Link } from "react-router-dom";
import { Grid, Heart, PawPrintIcon } from "lucide-react";

import MotionLi from "../motion/motion-li";
import HamburgerMenu from "./hamburger-menu";
import MotionHeader from "./motion-header";

export default function Header() {
  const links = [
    {
      element: <Grid />,
      href: "/",
      label: "Home",
    },
    {
      element: <Heart />,
      href: "/favorites",
      label: "Favorites",
    },
  ];

  return (
    <MotionHeader>
      <div className="flex h-full items-center justify-between text-blue-500">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold sm:text-2xl"
        >
          <PawPrintIcon className="size-8" />
          <span>Cat Lover</span>
        </Link>
        <nav className="relative">
          <ul className="hidden gap-10 sm:flex">
            {links.map(({ element, href }) => (
              <MotionLi
                className="flex items-center"
                key={href}
                whileHover={{ scale: 1.08 }}
              >
                <Link className="text-gray-600" to={href}>
                  {element}
                </Link>
              </MotionLi>
            ))}
          </ul>
          <HamburgerMenu links={links} />
        </nav>
      </div>
    </MotionHeader>
  );
}
