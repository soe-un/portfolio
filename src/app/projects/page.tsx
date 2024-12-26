import Sidebar from "../sidebar";

export default function About() {
  return (
    <main>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <h1>이런 프로젝트를 했어요</h1>
      </div>
      <Sidebar />
    </main>
  );
}
