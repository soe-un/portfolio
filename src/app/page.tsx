"use client";

import { FaArrowRight } from "react-icons/fa6";
import clsx from "clsx";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {}, []);
  return (
    <>
      <main
        className={clsx(
          `h-[100vh] flex gap-8 row-start-2 items-start`,
          `sm:h-[calc(100vh-104px)] sm:ml-10 sm:mt-[104px]`
        )}
      >
        <section className="h-full flex gap-4 items-center flex-row">
          <h1 className={clsx(`text-5xl`, `sm:text-6xl`)}>
            안녕하세요.
            <br />
            <div className="flex items-center mt-6">
              분석으로 <FaArrowRight className="mx-4 text-pointcolor" />{" "}
              발전하고
            </div>
            <div className="flex items-center mb-6">
              소통으로 <FaArrowRight className="mx-4 text-pointcolor" />{" "}
              협력하는
            </div>
            프론트엔드 개발자
            <br />
            <strong>박소은</strong>입니다.
          </h1>
        </section>
      </main>
      <main
        className={clsx(
          `h-[100vh] flex gap-8 row-start-2 items-start`,
          `sm:h-[calc(100vh-104px)] sm:ml-10 sm:mt-[104px]`
        )}
      >
        <section className="h-full flex gap-4 items-center flex-row">
          <h1 className="text-6xl">About Me</h1>
          <div className="mt-10 text-2xl">
            단순한 개발을 넘어 업무를 <strong>효율적</strong>으로 개선하는 일을
            생각하고, <br />
            <strong>비즈니스에 기여</strong>할 수 있는 부분을 찾기 위해
            노력합니다.
          </div>
        </section>
      </main>
      <main
        className={clsx(
          `h-[100vh] flex gap-8 row-start-2 items-start`,
          `sm:h-[calc(100vh-104px)] sm:ml-10 sm:mt-[104px]`
        )}
      >
        <section className="h-full flex gap-4 items-center flex-row">
          <h1 className="text-6xl">Skills</h1>
          <div className="mt-10 text-2xl">
            단순한 개발을 넘어 업무를 <strong>효율적</strong>으로 개선하는 일을
            생각하고, <br />
            <strong>비즈니스에 기여</strong>할 수 있는 부분을 찾기 위해
            노력합니다.
          </div>
        </section>
      </main>
      <main
        className={clsx(
          `h-[100vh] flex gap-8 row-start-2 items-start`,
          `sm:h-[calc(100vh-104px)] sm:ml-10 sm:mt-[104px]`
        )}
      >
        <section className="h-full flex gap-4 items-center flex-row">
          <h1 className="text-6xl">Projects</h1>
          <div className="mt-10 text-2xl">
            단순한 개발을 넘어 업무를 <strong>효율적</strong>으로 개선하는 일을
            생각하고, <br />
            <strong>비즈니스에 기여</strong>할 수 있는 부분을 찾기 위해
            노력합니다.
          </div>
        </section>
      </main>
    </>
  );
}
