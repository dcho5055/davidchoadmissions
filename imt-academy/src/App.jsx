import { reviews } from "./content/reviews.js";

// Single place to change how families reach IMT Academy.
const CONTACT_EMAIL = "dcho5055@gmail.com";
const KAKAO_URL = "https://pf.kakao.com/_xkcnmX/chat";

function contactUrl(c) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(c.mailSubject)}&body=${encodeURIComponent(c.mailBody)}`;
}

function KakaoButton({ className = "", children = "카카오톡 상담" }) {
  return (
    <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" lang="ko" className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#FEE500] px-7 py-4 text-base font-semibold text-[#191919] transition hover:bg-[#f5dc00] ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 3C6.48 3 2 6.58 2 11c0 2.85 1.86 5.35 4.66 6.77-.2.74-.74 2.69-.85 3.11-.13.52.19.51.4.37.17-.11 2.66-1.81 3.73-2.54.67.1 1.36.15 2.06.15 5.52 0 10-3.58 10-8S17.52 3 12 3z"/></svg>
      {children}
    </a>
  );
}

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

function Cta({ href, children, variant = "dark", className = "" }) {
  const styles = variant === "dark"
    ? "bg-[#14284b] text-white hover:bg-[#0e1d38]"
    : "bg-white text-[#14284b] hover:bg-[#eef2f8]";
  return (
    <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition ${styles} ${className}`}>
      {children} <Icon name="arrow" className="h-4 w-4" />
    </a>
  );
}

const serif = { fontFamily: "'Plus Jakarta Sans', Inter, 'Apple SD Gothic Neo', 'Noto Sans KR', system-ui, sans-serif", fontWeight: 700, letterSpacing: "-0.025em" };
const colleges = "Yale · Princeton · Stanford · UC Berkeley · UCLA · USC · Northeastern";

export default function App({ c }) {
  const href = contactUrl(c);
  const ko = c.lang === "ko";
  const eyebrow = ko ? "text-sm font-semibold tracking-[0.08em] text-[#b5651d]" : "text-sm font-semibold uppercase tracking-[0.2em] text-[#b5651d]";
  const eyebrowLight = ko ? "text-sm font-semibold tracking-[0.08em] text-[#e9b98a]" : "text-sm font-semibold uppercase tracking-[0.2em] text-[#e9b98a]";
  const kw = ko ? { wordBreak: "keep-all" } : undefined;

  return (
    <div lang={c.lang} className="min-h-screen bg-[#f7f6f2] text-[#14181f]" style={{ fontFamily: "Inter, 'Apple SD Gothic Neo', 'Noto Sans KR', system-ui, sans-serif", ...kw }}>
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[#f7f6f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="text-xl font-semibold tracking-tight text-[#14284b]" style={serif}>IMT Academy</span>
            <span className={`hidden text-xs font-medium text-slate-500 sm:inline ${ko ? "" : "uppercase tracking-[0.18em]"}`}>{c.brandSub}</span>
          </a>
          <nav className="flex items-center gap-4 text-sm font-medium text-slate-600 md:gap-6">
            <a href="#courses" className="hidden hover:text-[#14284b] md:inline">{c.nav.courses}</a>
            <a href="#about" className="hidden hover:text-[#14284b] md:inline">{c.nav.about}</a>
            <a href="#how" className="hidden hover:text-[#14284b] lg:inline">{c.nav.how}</a>
            <a href="#faq" className="hidden hover:text-[#14284b] md:inline">{c.nav.faq}</a>
            <a href={c.switchHref} hrefLang={ko ? "en" : "ko"} lang={ko ? "en" : "ko"} className="rounded-full border border-black/10 px-3 py-1.5 hover:border-[#14284b] hover:text-[#14284b]">{c.switchLabel}</a>
            {c.kakao
              ? <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#FEE500] px-4 py-2 text-[#191919] hover:bg-[#f5dc00]">카톡 상담</a>
              : <a href={href} className="rounded-full bg-[#14284b] px-4 py-2 text-white hover:bg-[#0e1d38]">{c.nav.contact}</a>}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
          <div>
            <p className={eyebrow}>{c.hero.eyebrow}</p>
            <h1 className={`mt-5 leading-[1.18] text-[#14284b] ${ko ? "text-[2.1rem] sm:text-[2.6rem] lg:text-[2.75rem]" : "text-[2.5rem] sm:text-5xl lg:text-[3rem]"}`} style={serif}>
              {c.hero.title[0]}<br />{c.hero.title[1]}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{c.hero.intro}</p>
            {c.hero.note && <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">{c.hero.note}</p>}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              {c.kakao ? <><KakaoButton /><Cta href={href}>{c.cta}</Cta></> : <Cta href={href}>{c.cta}</Cta>}
            </div>
            <p className="mt-5 text-sm font-medium text-slate-500">{c.hoursLabel}: {c.hours}</p>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2rem] border-2 border-[#b5651d]/30 lg:block" />
            <img src="/images/point.jpg" alt={c.hero.imgAlt} className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-[0_30px_60px_rgba(20,40,75,0.18)]" />
          </div>
        </section>

        <section className="border-y border-black/5 bg-white">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-black/5 lg:grid-cols-4">
            {c.credentials.map((x) => (
              <div key={x.k} className="bg-white px-4 py-7 sm:px-6">
                <dt className="text-2xl text-[#14284b]" style={serif}>{x.k}</dt>
                <dd className="mt-1 text-sm leading-6 text-slate-600">{x.v}</dd>
              </div>
            ))}
          </dl>
          <p className="border-t border-black/5 px-4 py-5 text-center text-sm tracking-wide text-slate-500 sm:px-6">
            {c.collegesPrefix} <span className="font-semibold text-[#14284b]" lang="en">{colleges}</span>
          </p>
        </section>

        <section id="courses" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="max-w-2xl">
            <p className={eyebrow}>{c.courses.eyebrow}</p>
            <h2 className="mt-4 text-4xl tracking-tight text-[#14284b]" style={serif}>{c.courses.title}</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.courses.items.map((x) => (
              <article key={x.name} className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
                <p className={`text-xs font-semibold text-slate-500 ${ko ? "" : "uppercase tracking-[0.16em]"}`}>{x.level}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#14284b]">{x.name}</h3>
                <p className="mt-3 leading-7 text-slate-600">{x.text}</p>
              </article>
            ))}
            <article className="flex flex-col justify-between rounded-3xl bg-[#14284b] p-7 text-white lg:col-span-3 lg:flex-row lg:items-center">
              <p className="text-lg leading-8 text-white/85">{c.courses.notSure}</p>
              <Cta href={href} variant="light" className="mt-6 self-start lg:mt-0 lg:self-center">{c.courses.notSureCta}</Cta>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="rounded-[2rem] bg-[#14284b] p-8 text-white sm:p-12">
            <p className={eyebrowLight}>{c.signs.eyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-snug tracking-tight sm:text-4xl" style={serif}>{c.signs.title}</h2>
            <ul className="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
              {c.signs.items.map((t) => (
                <li key={t} className="flex gap-3 text-lg leading-7 text-white/90">
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#e9b98a]/20 text-[#e9b98a]"><Icon name="check" className="h-3.5 w-3.5" /></span>
                  {t}
                </li>
              ))}
            </ul>
            <Cta href={href} variant="light" className="mt-10">{c.signs.cta}</Cta>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <img src="/images/notes.jpg" alt={c.why.imgAlt} loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top" />
            <div>
              <p className={eyebrow}>{c.why.eyebrow}</p>
              <h2 className="mt-4 text-4xl leading-tight tracking-tight text-[#14284b]" style={serif}>{c.why.title}</h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {c.why.items.map((r) => (
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
            <p className={eyebrow}>{c.how.eyebrow}</p>
            <h2 className="mt-4 text-4xl tracking-tight text-[#14284b]" style={serif}>{c.how.title}</h2>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {c.how.steps.map((s) => (
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
            <p className={eyebrowLight}>{c.story.eyebrow}</p>
            <blockquote className="mt-6 text-3xl leading-snug sm:text-4xl" style={serif}>“{c.story.quote}”</blockquote>
            <p className="mt-6 text-white/70">{c.story.note}</p>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 mx-auto max-w-6xl px-4 pt-24 sm:px-6">
          <div className="grid gap-12 rounded-[2rem] bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <img src="/images/portrait.jpg" alt="David Cho" loading="lazy" className="h-32 w-32 rounded-full object-cover object-top" />
              <p className={`mt-8 ${eyebrow}`}>{c.about.eyebrow}</p>
              <h2 className="mt-4 text-3xl leading-snug tracking-tight text-[#14284b] sm:text-4xl" style={serif}>{c.about.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{c.about.text}</p>
            </div>
            <ol className="relative border-l-2 border-[#b5651d]/20 pl-8">
              {c.about.career.map((x) => (
                <li key={x.k} className="relative pb-7 last:pb-0">
                  <span className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full bg-[#b5651d]" />
                  <p className="text-lg font-semibold text-[#14284b]">{x.k}</p>
                  <p className="mt-1 leading-7 text-slate-600">{x.v}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
          <p className={eyebrow}>{c.reviewsBlock.eyebrow}</p>
          <h2 className="mt-4 text-4xl tracking-tight text-[#14284b]" style={serif}>{c.reviewsBlock.title}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reviews.map((r) => (
              <figure key={r.who} className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-8">
                <div>
                  <p className="text-[#e0a100]" aria-label={c.reviewsBlock.stars}>★★★★★</p>
                  <blockquote lang="en" className="mt-4 space-y-4 text-lg leading-8 text-slate-700">
                    {r.text.map((t) => <p key={t}>“{t}”</p>)}
                  </blockquote>
                </div>
                <figcaption className="mt-6 text-sm text-slate-500"><span className="font-semibold text-[#14284b]">{r.who}</span> · {c.roles[r.role] || r.role} · {c.reviewsBlock.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className={eyebrow}>{c.faq.eyebrow}</p>
            <h2 className="mt-4 text-4xl tracking-tight text-[#14284b]" style={serif}>{c.faq.title}</h2>
          </div>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {c.faq.items.map((f) => (
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
              <h2 className="text-3xl tracking-tight text-[#14284b] sm:text-4xl" style={serif}>{c.final.title}</h2>
              <p className="mt-3 text-lg leading-8 text-slate-600">{c.final.text}</p>
              <p className="mt-3 text-sm text-slate-500">{c.final.emailLabel} <a href={href} className="font-semibold text-[#14284b] underline underline-offset-4">{CONTACT_EMAIL}</a> · {c.hours}</p>
            </div>
            <div className="flex flex-none flex-col gap-3">
              {c.kakao && <KakaoButton />}
              <Cta href={href}>{c.cta}</Cta>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#f7f6f2]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p><span className="font-semibold text-[#14284b]" style={serif}>IMT Academy</span> · {c.footerTag}</p>
          <p>© {new Date().getFullYear()} IMT Academy LLC · Virginia, USA</p>
        </div>
      </footer>
    </div>
  );
}
