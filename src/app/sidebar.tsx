"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const pathName = usePathname();
  const tabs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Me",
      link: "/about",
    },
    {
      title: "Skills",
      link: "/skills",
    },
    {
      title: "Projects",
      link: "/projects",
    },
  ] as { title: string; link: string }[];

  return (
    <div className="absolute flex flex-col top-[2rem] right-[2rem] gap-4">
      {tabs.map((t, idx) => {
        return (
          <Link href={t.link} key={t.link}>
            <button className={`${pathName === t.link && "text-pointcolor"}`}>
              <strong>{`${String(idx).padStart(2, "0")}.`}</strong> {t.title}
            </button>
          </Link>
        );
      })}
    </div>
  );
}
