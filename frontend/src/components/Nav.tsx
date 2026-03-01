"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/check-in", label: "Check In" },
  { href: "/journal", label: "Journal" },
  { href: "/board", label: "Board" },
  { href: "/profile", label: "Profile" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-gray-200 bg-white px-6 py-3 flex items-center justify-between">
      <span className="font-semibold text-lg tracking-tight text-rose-500">
        GF-inCS
      </span>
      <ul className="flex gap-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-sm font-medium transition-colors hover:text-rose-500 ${
                pathname === href ? "text-rose-500" : "text-gray-600"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
