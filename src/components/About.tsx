"use client";

export default function Home() {
  return (
    <main>
      <section>
        <h1 className={`text-4xl sm:text-6xl`}>About Me</h1>
        <div className="mt-10 text-xl sm:text-2xl">
          개발을 넘어 업무를
          <br />
          <strong>효율적</strong>으로 개선하는 일을 생각하고, <br />
          <strong>비즈니스에 기여</strong>할 수 있는 부분을
          <br /> 찾기 위해 노력합니다.
        </div>
      </section>
    </main>
  );
}
