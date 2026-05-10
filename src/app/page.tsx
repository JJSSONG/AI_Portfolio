import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <div className="max-w-5xl mx-auto py-20 px-6">
        <header className="mb-14 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">송정섭</h1>
          <p className="mt-2 text-lg text-gray-600">풀스택 개발자 • Java / Spring / Vue.js • 10년 차 베테랑 풀스택 개발자</p>
          <p className="mt-4 text-sm text-gray-500">시큐어코딩과 웹 표준을 준수하는 안정적이고 유지보수 가능한 시스템 설계에 중점을 둡니다.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <aside className="lg:col-span-1 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">연락처</h2>
            <p className="text-sm">sotrjs@gmail.com</p>
            <p className="text-sm">010-2435-1976</p>
            <div className="mt-4">
              <a className="inline-block text-sm text-blue-600 hover:underline" href="https://github.com/JJSSONG" target="_blank" rel="noreferrer">GitHub</a>
              <span className="mx-2 text-gray-300">•</span>
              <a className="inline-block text-sm text-blue-600 hover:underline" href="https://www.linkedin.com/in/%EC%A0%95%EC%84%AD-%EC%86%A1-b75718230/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </aside>

          <section className="lg:col-span-2">
            <h2 id="projects" className="text-2xl font-semibold mb-6">대표 프로젝트</h2>

            <article className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">대기업 K그룹 사내 MA(Maintenance Administration) 시스템 운영</h3>
                  <p className="text-sm text-gray-500">2024.03 ~ 2026.05 — Java, Spring, MSSQL, Spring Batch, DevExtreme</p>
                </div>
              </div>
              <p className="mt-3 text-gray-700">
                <strong>주요 성과:</strong>
                <ul className="list-disc list-inside">
                  <li>정산 프로세스 자동화로 처리 속도 40% 개선.</li>
                  <li>쿼리 최적화를 통한 데이터 조회 성능 94% 개선 (50초 → 3초).</li>
                </ul>
                <strong>기술 스택:</strong>
                Java, Spring Framework, Spring Batch, DevExtreme, MSSQL, PL/SQL, REST API, Vercel, AI Agent Integration (OpenClaw).
              </p>
            </article>

            <div id="skills" className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">기술·자격증</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Java (시큐어코딩 포함), Spring</li>
                <li>JavaScript, Vue.js, jQuery</li>
                <li>정보처리기사, SQLD, 웹디자인개발기능사</li>
              </ul>
            </div>
          </section>
        </div>

        <section id="contact" className="mt-12 text-center">
          <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700" href="mailto:sotrjs@gmail.com">Contact: sotrjs@gmail.com</a>
        </section>
      </div>
    </main>
  )
}