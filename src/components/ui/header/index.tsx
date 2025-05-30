import { Link } from "react-router-dom";
import { Cat, Gift, Grid, PawPrint } from "lucide-react";
import { motion } from "motion/react";

import FavoritesIndicator from "./favorites-indicator";
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
      element: <PawPrint />,
      href: "/breeds",
      label: "Breeds",
    },
    {
      element: <FavoritesIndicator />,
      href: "/favorites",
      label: "Favorites",
    },
    {
      element: <Gift />,
      href: "/petting-trainer",
      label: "Press to find out",
    },
  ];

  return (
    <MotionHeader>
      <div className="font-galada flex h-full items-center justify-between text-blue-500">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold sm:text-2xl"
        >
          <Cat className="size-8" />
          <span>Cat Lover</span>
        </Link>
        <nav className="relative">
          <ul className="hidden gap-10 sm:flex">
            {links.map(({ element, href }) => (
              <motion.li
                className="flex items-center"
                key={href}
                whileHover={{ scale: 1.08 }}
              >
                <Link className="text-gray-600" to={href}>
                  {element}
                </Link>
              </motion.li>
            ))}
          </ul>
          <HamburgerMenu links={links} />
        </nav>
      </div>
    </MotionHeader>
  );
}
