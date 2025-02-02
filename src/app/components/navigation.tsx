import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

export default function Navigation() {
  return (
    <nav className="p-4 rounded col-span-1">
      <NavLink icon={<HomeIcon className="w-4 h-4" />} link="/" title="Home" />
      <NavLink
        icon={<ArrowPathIcon className="w-4 h-4" />}
        link="/history"
        title="History"
      />
      <NavLink
        icon={<Cog6ToothIcon className="w-4 h-4" />}
        link="/settings"
        title="Settings"
      />
    </nav>
  );
}

function NavLink({
  title,
  link,
  icon,
}: {
  title: string;
  link: string;
  icon?: ReactNode;
}) {
  return (
    <Link
      href={link}
      className="flex items-center p-2 rounded transition hover:bg-yellow-200"
    >
      <span className="material-icons mr-2">{icon}</span>
      {title}
    </Link>
  );
}
