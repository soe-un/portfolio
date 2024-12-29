import { JSX } from "react";

export const skillList = [
  "ALL",
  "Language",
  "Frontend",
  "Backend",
  "ETC",
] as const;
export type TSkillList = (typeof skillList)[number];

export type TSkillDesc = {
  title: string;
  desc?: string;
  icon: JSX.Element;
};
