"use client";

import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY < window.innerHeight) {
      setActiveTab(0);
    } else if (
      window.innerHeight <= window.scrollY &&
      window.scrollY < window.innerHeight * 2
    ) {
      setActiveTab(1);
    } else if (
      window.innerHeight * 2 <= window.scrollY &&
      window.scrollY < window.innerHeight * 3
    ) {
      setActiveTab(2);
    } else {
      setActiveTab(3);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tabs = ["Home", "About Me", "Skills", "Projects"];

  return (
    <div
      className={clsx(
        `fixed sm:top-0 right-0 bottom-0`,
        `h-fit w-fit sm:w-full bg-background`
      )}
    >
      <div
        className={clsx(
          `p-[2rem] flex justify-end sm:flex-row flex-col `,
          `gap-2 text-xl`,
          `sm:gap-4`
        )}
      >
        {tabs.map((t, idx) => {
          return (
            <button
              className={clsx(
                `${activeTab === idx && "text-background bg-foreground"}`,
                `text-left`
              )}
              key={t}
              onClick={() => {
                window.scrollTo({
                  behavior: "smooth",
                  left: 0,
                  top: window.innerHeight * idx,
                });
              }}
            >
              <strong>{`${String(idx).padStart(2, "0")}.`}</strong> {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}
