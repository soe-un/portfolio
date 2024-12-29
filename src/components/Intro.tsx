"use client";

import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <section className="flex flex-row items-center">
        <h1 className={clsx(`text-4xl sm:text-6xl`)}>
          안녕하세요.
          <br />
          <div className="flex items-center mt-6">
            분석으로 <FaArrowRight className="mx-4 text-pointcolor" /> 발전하고
          </div>
          <div className="flex items-center mb-6">
            소통으로 <FaArrowRight className="mx-4 text-pointcolor" /> 협력하는
          </div>
          프론트엔드 개발자
          <br />
          <strong>박소은</strong>입니다.
        </h1>
      </section>
    </main>
  );
}
