"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center fixed top-0 left-0 w-full bg-slate-100 shadow-md z-50 p-4">
      <div className="flex flex-row items-center gap-6">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-orange-400 font-bold" : "text-blue-600 hover:text-orange-400"
          }`}
        >
          Solutions We&apos;ve Built
        </Link>

        <Link
          href="/work-with-us"
          className={`${
            pathname === "/work-with-us" ? "text-orange-400 font-bold" : "text-blue-600 hover:text-orange-400"
          }`}
        >
          Work With Us
        </Link>
      </div>
    </nav>
  );
}
