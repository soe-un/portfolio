"use client";

import { skillList, TSkillList } from "@/fixture/type";
import clsx from "clsx";
import { useState } from "react";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiC,
  SiFigma,
  SiGit,
  SiJenkins,
  SiJira,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiSpringboot,
  SiSwr,
} from "react-icons/si";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TSkillList>("ALL");

  const sList = [
    {
      title: "JavaScript",
      icon: <BiLogoJavascript />,
    },
    {
      title: "TypeScript",
      icon: <BiLogoTypescript />,
    },
    {
      title: "Java",
      icon: <BiLogoJava />,
    },
    { title: "Python", icon: <BiLogoPython /> },
    { title: "C", icon: <SiC /> },
    { title: "HTML", icon: <BiLogoHtml5 /> },
    { title: "CSS", icon: <BiLogoCss3 /> },
    { title: "scss", icon: <BiLogoTailwindCss /> },
    { title: "React", icon: <SiReact /> },
    { title: "Next.js", icon: <SiNextdotjs /> },
    { title: "react-hook-form", icon: <SiReacthookform /> },
    { title: "redux", icon: <SiRedux /> },
    { title: "SWR", icon: <SiSwr /> },
    { title: "react-query", icon: <SiReactquery /> },
    { title: "Spring Boot", icon: <SiSpringboot /> },
    { title: "Mysql", icon: <SiMysql /> },
    { title: "Git", icon: <SiGit /> },
    { title: "Jenkins", icon: <SiJenkins /> },
    { title: "Figma", icon: <SiFigma /> },
    { title: "Jira", icon: <SiJira /> },
  ];

  const getList = () => {
    switch (activeTab) {
      case "ALL":
        return sList.map((S) => S.title);
      case "Language":
        return ["JavaScript", "TypeScript", "Java", "Python", "C"];
      case "Frontend":
        return [
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "scss",
          "React",
          "Next.js",
          "react-hook-form",
          "redux",
          "SWR",
          "react-query",
        ];
      case "Backend":
        return ["Java", "Spring Boot", "Mysql"];
      case "ETC":
        return ["Git", "Jenkins", "Figma", "Jira"];
      default:
        return [];
    }
  };
  return (
    <main>
      <section>
        <h1 className="text-4xl sm:text-6xl">Skills</h1>
        <div className="flex flex-wrap gap-2 w-[calc(100%-0.5rem)] sm:w-[calc(100%-3rem)] mx-1 mt-4 sm:mt-10 text-2xl">
          {skillList.map((i) => {
            return (
              <button
                className={clsx(
                  `${activeTab === i && "text-background bg-foreground"}`,
                  "text-base sm:text-2xl"
                )}
                onClick={(e) => {
                  setActiveTab(i);
                }}
                key={i}
              >
                {i}
              </button>
            );
          })}
        </div>
        <div className="w-[calc(100%-2.5rem)] sm:w-[calc(100%-5rem)] sm: flex flex-wrap gap-4 mx-5 mt-5 h-fit">
          {sList
            .filter((i) => getList().includes(i.title))
            .map((i) => {
              return (
                <div
                  key={i.title}
                  className="w-fit flex items-center px-2 py-1 rounded-sm hover:bg-foreground hover:text-background"
                >
                  <div className="text-md sm:text-2xl">{i.icon}</div>
                  <h2 className="text-md ml-2 sm:ml-4 sm:text-2xl">
                    {i.title}
                  </h2>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
}
