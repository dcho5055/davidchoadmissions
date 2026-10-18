// Single place to change how families reach IMT Academy.
const CONTACT_EMAIL = "dcho5055@gmail.com";
const CONTACT_URL = `mailto:${CONTACT_EMAIL}?subject=IMT%20Academy%20%E2%80%94%20Free%20Math%20Gap%20Diagnosis&body=Student%20grade%3A%0ACourse%2Fsubject%3A%0AYour%20time%20zone%3A%0A`;
const HOURS = "Weekday evenings 6–10 PM ET · Weekends";

const paths = {
  arrow: "M5 12h14M13 5l7 7-7 7",
  check: "M20 6 9 17l-5-5",
  plus: "M12 5v14M5 12h14",
};

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={paths[name]} />
    </svg>
  );
}

const credentials = [
  { k: "30 years", v: "in education — classroom, college, and 1:1 tutoring" },
  { k: "Dual-certified", v: "U.S. state license in Mathematics K–12 and English Language Learner K–12" },
  { k: "12 years", v: "of Top 30 college admits, every year, from the learning center I ran" },
  { k: "USC", v: "Master of Arts in Teaching · former California public school math teacher" },
];

const courses = [
  { name: "SAT Math", level: "Grades 9–12", text: "Question-type strategy, timing, and targeted practice for the Digital SAT." },
  { name: "AP Calculus AB / BC", level: "Grades 11–12", text: "Concepts first, then exam-style multiple choice and free-response writing." },
  { name: "AP Precalculus · Precalculus", level: "Grades 10–12", text: "Functions, trigonometry, and the habits students need before calculus — including AP Precalculus exam prep." },
  { name: "AP Statistics", level: "Grades 10–12", text: "Data, probability, and inference explained clearly, with practice on AP-style free-response questions." },
  { name: "Algebra I · Geometry · Algebra II", level: "Grades 8–11", text: "Keep up with class, raise grades, and close the gaps that slow students down later." },
  { name: "Middle School Math", level: "Grades 6–8", text: "Build a solid foundation early, before math gets harder and grades start to count." },
];

const steps = [
  { n: "1", title: "Free Math Gap Diagnosis", text: "A 30-minute session where I find exactly where your student is strong, where the gaps are, and why mistakes keep happening." },
  { n: "2", title: "Written report", text: "You receive a short written report of what I found. Parent consultation in English or Korean." },
  { n: "3", title: "Personal plan", text: "A plan built around the school calendar, upcoming tests, the student's own pace, and college goals." },
  { n: "4", title: "1:1 online lessons", text: "Live lessons with me — not a different tutor each week — plus regular progress updates for parents." },
];

const reasons = [
  { title: "Certified in math and in English learning", text: "I hold U.S. state licenses in both Mathematics (K–12) and English Language Learners (K–12). When a student is stuck on the wording, not the math, I can see it and teach both." },
  { title: "Diagnosis before drilling", text: "More worksheets don't fix a missing foundation. I find the real reason a student is stuck, then fix that first." },
  { title: "Math is where college plans are won or lost", text: "The right course sequence, AP choices, and grades that hold up in the 11th-grade AP year. Having guided students to Top 30 universities, I plan math with college in mind." },
  { title: "One teacher who knows U.S. classrooms", text: "I taught math in California public middle and high schools, so I know how teachers grade and how tests are written. Parent updates in English or Korean." },
];

const signs = [
  "Does fine on calculations, but loses points on word problems",
  "Grades dropped when AP or honors classes started",
  "Understands in class, then freezes on tests",
  "Studies hard, but SAT Math scores won't move",
  "Reads English well in daily life, but academic wording slows them down",
  "Keeps making the same mistakes, and nobody has found out why",
];

const reviews = [
  {
    who: "Jihyun K.",
    role: "Parent",
    text: [
      "I interviewed many tutors and tried some but my kids' tutor at IMT is the best. They enjoy learning math and I am really happy to see their progress.",
      "My son asked me to let him learn from the tutor until he finishes high school after his first lesson.",
    ],
  },
  {
    who: "Woosung L.",
    role: "Parent",
    text: [
      "Unlike other academies where they feel like it's not helpful and don't want to go, here they want to come because they feel they are actually benefiting from it.",
      "Our kids had no idea that studying could be this easy and enjoyable.",
    ],
  },
  {
    who: "GaYoung L.",
    role: "Parent",
    text: [
      "I know finding a tutor who not only excels in their subject matter but also connects well with children is a rare gem, and we are thrilled to have found one.",
      "Math has always been a challenging subject for my son, but his consistent support and reassurance built my son's confidence tremendously.",
    ],
  },
  {
    who: "Yireh K.",
    role: "Student",
    text: [
      "It's been a game-changer for my grades and my enjoyment of studying, especially as I prepare for TJ (Thomas Jefferson High School for Science and Technology).",
    ],
  },
  {
    who: "Zion K.",
    role: "Parent",
    text: [
      "Expert instructors, personalized attention, and an engaging approach transformed my child's math skills. Regular progress updates and increased confidence really made this academy a top choice for quality math education.",
    ],
  },
  {
    who: "Elise K.",
    role: "Student",
    text: [
      "My tutor helps me with math and whenever I don't understand anything he explains it very well. I understand math much better than before and he has helped me learn new things very easily.",
    ],
  },
];

const faqs = [
  { q: "Are lessons online?", a: "Yes. All lessons are live 1:1 sessions on Zoom with screen sharing, so students anywhere in the U.S. can join from home." },
  { q: "When are lessons available?", a: "Weekday evenings 6–10 PM Eastern Time, plus weekend mornings and afternoons. We set a regular weekly time after the free diagnosis." },
  { q: "How long is each lesson?", a: "Most lessons are 60 or 90 minutes. For AP and SAT students, 90 minutes usually works best." },
  { q: "How much does tutoring cost?", a: "Lessons start at $150/hour, and SAT Math and AP courses are $180/hour. After the free diagnosis, I'll send a plan with the exact schedule and pricing." },
  { q: "How often should my student meet?", a: "Most students meet once or twice a week. Before an SAT or AP exam, we may meet more often for a short period." },
  { q: "Who teaches the lessons?", a: "I do. Every lesson is taught by David Cho personally — a licensed math teacher (Iowa Standard License, Mathematics K–8 and 5–12) and former California public middle and high school math teacher." },
  { q: "Can I talk with you in Korean?", a: "Yes. Lessons are in English, and parent consultations and updates can be in English or Korean. 학부모 상담은 한국어로 가능합니다." },
];

function Cta({ children = "Get a free Math Gap Diagnosis", variant = "dark", className = "" }) {
  const styles = variant === "dark"
    ? "bg-[#14284b] text-white hover:bg-[#0e1d38]"
    : "bg-white text-[#14284b] hover:bg-[#eef2f8]";
  return (
    <a href={CONTACT_URL} className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition ${styles} ${className}`}>
      {children} <Icon name="arrow" className="h-4 w-4" />
    </a>
  );
}

const serif = { fontFamily: "Fraunces, Georgia, serif" };

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#14181f]" style={{ fontFamily: "Inter, 'Apple SD Gothic Neo', 'Noto Sans KR', system-ui, sans-serif" }}>
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[#f7f6f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="text-xl font-semibold tracking-tight text-[#14284b]" style={serif}>IMT Academy</span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-slate-500 sm:inline">Math Tutoring</span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#courses" className="hidden hover:text-[#14284b] md:inline">Courses</a>
            <a href="#how" className="hidden hover:text-[#14284b] md:inline">How it works</a>
            <a href="#faq" className="hidden hover:text-[#14284b] md:inline">FAQ</a>
            <a href={CONTACT_URL} className="rounded-full bg-[#14284b] px-4 py-2 text-white hover:bg-[#0e1d38]">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b5651d]">Math K–12 + English Language Learner certified</p>
            <h1 className="mt-5 text-5xl leading-[1.05] tracking-tight text-[#14284b] sm:text-6xl" style={serif}>
              Thirty years of teaching.<br />One student at a time.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Every student gets stuck for a reason — a missed concept, a weak foundation, or the English behind word problems and AP free-response. David Cho, a U.S. state-licensed teacher in both Mathematics and English Language Learners, finds that reason first, then fixes it one-on-one.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">
              30년의 교육 경력, 한 번에 한 학생에게. 수학·영어학습자(ELL) 미국 정교사 자격을 가진 선생님이 무료 진단으로 아이가 막힌 지점부터 찾아드립니다. 학부모 상담은 한국어로 가능합니다.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Cta />
              <a href="#courses" className="inline-flex items-center justify-center px-2 py-3 text-base font-semibold text-[#14284b] underline-offset-4 hover:underline">See courses</a>
            </div>
            <p className="mt-5 text-sm font-medium text-slate-500">Lessons: {HOURS}</p>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2rem] border-2 border-[#b5651d]/30 lg:block" />
            <img src="/images/point.jpg" alt="David Cho, math teacher" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-[0_30px_60px_rgba(20,40,75,0.18)]" />
          </div>
        </section>

        <section className="border-y border-black/5 bg-white">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-black/5 lg:grid-cols-4">
            {credentials.map((c) => (
              <div key={c.k} className="bg-white px-4 py-7 sm:px-6">
                <dt className="text-2xl text-[#14284b]" style={serif}>{c.k}</dt>
                <dd className="mt-1 text-sm leading-6 text-slate-600">{c.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="courses" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b5651d]">Courses</p>
            <h2 className="mt-4 text-4xl tracking-tight text-[#14284b]" style={serif}>From middle school foundations to AP Calculus</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <article key={c.name} className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{c.level}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#14284b]">{c.name}</h3>
                <p className="mt-3 leading-7 text-slate-600">{c.text}</p>
              </article>
            ))}
            <article className="flex flex-col justify-between rounded-3xl bg-[#14284b] p-7 text-white lg:col-span-3 lg:flex-row lg:items-center">
              <p className="text-lg leading-8 text-white/85">Not sure where your student should start?</p>
              <Cta variant="light" className="mt-6 self-start lg:mt-0 lg:self-center">Get a free diagnosis</Cta>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="rounded-[2rem] bg-[#14284b] p-8 text-white sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e9b98a]">Does this sound like your student?</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-snug tracking-tight sm:text-4xl" style={serif}>Usually it isn't a "math person" problem. It's a gap nobody has found yet.</h2>
            <ul className="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
              {signs.map((t) => (
                <li key={t} className="flex gap-3 text-lg leading-7 text-white/90">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#e9b98a]/20 text-[#e9b98a]"><Icon name="check" className="h-3.5 w-3.5" /></span>
                  {t}
                </li>
              ))}
            </ul>
            <Cta variant="light" className="mt-10">Find the gap — free diagnosis</Cta>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <img src="/images/notes.jpg" alt="David Cho holding lesson notes" loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b5651d]">Why families choose IMT</p>
              <h2 className="mt-4 text-4xl tracking-tight text-[#14284b]" style={serif}>Not just another tutor. A licensed teacher in math and in English learning.</h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {reasons.map((r) => (
                  <div key={r.title}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3e6d8] text-[#b5651d]"><Icon name="check" className="h-4 w-4" /></div>
                    <h3 className="mt-4 text-lg font-semibold text-[#14284b]">{r.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b5651d]">How it works</p>
            <h2 className="mt-4 text-4xl tracking-tight text-[#14284b]" style={serif}>Four steps, one teacher</h2>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="rounded-3xl border border-black/5 bg-white p-7">
                <span className="text-4xl text-[#b5651d]" style={serif}>{s.n}</span>
                <h3 className="mt-4 text-lg font-semibold text-[#14284b]">{s.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-[#14284b] py-24 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e9b98a]">Student story</p>
            <blockquote className="mt-6 text-3xl leading-snug sm:text-4xl" style={serif}>
              “This student first came to me because math was the weak spot. After two years of steady work: straight A's in high school, and admission to Northeastern University — with a plan for medical school.”
            </blockquote>
            <p className="mt-6 text-white/70">We focused on math and science, built steady study habits, and planned ahead instead of cramming.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b5651d]">What families say</p>
          <h2 className="mt-4 text-4xl tracking-tight text-[#14284b]" style={serif}>From our Google reviews</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reviews.map((r) => (
              <figure key={r.who} className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-8">
                <div>
                  <p className="text-[#e0a100]" aria-label="5 out of 5 stars">★★★★★</p>
                  <blockquote className="mt-4 space-y-4 text-lg leading-8 text-slate-700">
                    {r.text.map((t) => <p key={t}>“{t}”</p>)}
                  </blockquote>
                </div>
                <figcaption className="mt-6 text-sm text-slate-500"><span className="font-semibold text-[#14284b]">{r.who}</span> · {r.role} · Google review</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6" lang="ko">
          <div className="rounded-[2rem] border border-[#b5651d]/20 bg-white p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b5651d]">학부모님께</p>
            <h2 className="mt-4 text-3xl leading-snug tracking-tight text-[#14284b] sm:text-4xl">상담과 진행 보고는 한국어로 편하게 하실 수 있습니다.</h2>
            <div className="mt-6 grid gap-6 text-base leading-8 text-slate-600 md:grid-cols-3">
              <p><span className="font-semibold text-[#14284b]">미국 정교사 자격</span><br />Iowa Standard Teaching License — 수학(K–8, 5–12) 및 영어학습자(K–12) 과목 인증.</p>
              <p><span className="font-semibold text-[#14284b]">수학이 아니라 영어에서 막힐 때</span><br />문장제, SAT, AP 서술형에서 점수가 깎이는 이유가 영어 표현인 경우가 많습니다. 수학과 ELL 자격으로 둘 다 잡습니다.</p>
              <p><span className="font-semibold text-[#14284b]">수업은 영어, 상담은 한국어</span><br />수업은 학교와 같은 영어로, 학부모님 상담과 진행 보고는 한국어로 드립니다.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b5651d]">FAQ</p>
            <h2 className="mt-4 text-4xl tracking-tight text-[#14284b]" style={serif}>Questions parents ask</h2>
          </div>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[#14284b]">
                  {f.q}
                  <Icon name="plus" className="h-5 w-5 flex-none text-slate-400 transition group-open:rotate-45" />
                </summary>
                <p className="mt-3 leading-8 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 overflow-hidden rounded-[2rem] bg-white p-10 text-center shadow-sm sm:p-14 lg:flex-row lg:text-left">
            <img src="/images/portrait.jpg" alt="David Cho" loading="lazy" className="h-40 w-40 flex-none rounded-full object-cover object-top" />
            <div className="flex-1">
              <h2 className="text-3xl tracking-tight text-[#14284b] sm:text-4xl" style={serif}>Find the gap before it gets bigger.</h2>
              <p className="mt-3 text-lg leading-8 text-slate-600">The Math Gap Diagnosis is free: 30 minutes with your student, then a short written report. I teach a limited number of students each semester.</p>
              <p className="mt-3 text-sm text-slate-500">Email <a href={CONTACT_URL} className="font-semibold text-[#14284b] underline underline-offset-4">{CONTACT_EMAIL}</a> · {HOURS}</p>
            </div>
            <Cta className="flex-none" />
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#f7f6f2]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p><span className="font-semibold text-[#14284b]" style={serif}>IMT Academy</span> · 1:1 Online Math Tutoring</p>
          <p>© {new Date().getFullYear()} IMT Academy LLC · Virginia, USA</p>
        </div>
      </footer>
    </div>
  );
}
