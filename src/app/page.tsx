import Sidebar from "./sidebar";

export default function Home() {
  return (
    <main className="flex gap-8 row-start-2 items-center sm:items-start">
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <h1>
          안녕하세요. 프론트엔드 개발자 <br />
          <strong>박소은</strong>입니다.
        </h1>
      </div>
      <Sidebar />
    </main>
  );
}
