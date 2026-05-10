import React from "react";
import { motion } from "framer-motion";

const icons = {
  arrowRight: "M5 12h14M13 5l7 7-7 7",
  check: "M20 6 9 17l-5-5",
  globe: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 12h20M12 2c2.5 2.7 4 6.1 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.1-4-10s1.5-7.3 4-10Z",
  graduation: "M22 10 12 5 2 10l10 5 10-5ZM6 12v5c3 2 9 2 12 0v-5",
  message: "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
  star: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21 7 14.2 2 9.3l6.9-1L12 2Z",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM9 15l2 2 4-4"
};

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={icons[name]} />
    </svg>
  );
}

const services = [
  "미국 및 글로벌 대학 지원을 위한 맞춤형 대학 리스트 전략",
  "Common App 에세이와 Supplemental Essay 코칭",
  "활동 리스트, 수상 경력, 리더십 경험의 전략적 정리",
  "SAT/ACT 및 수학 학업 역량을 고려한 장기 로드맵",
  "미국 대학 학비·장학금·재정보조(FAFSA/CSS Profile) 전략 컨설팅",
  "학생과 학부모를 위한 영어·한국어 이중 언어 상담",
  "9학년부터 12학년까지 지원 일정과 준비 과정 관리"
];

const differentiators = [
  {
    icon: "graduation",
    title: "30년 교육 경험 기반 전략",
    text: "입시 컨설턴트가 아니라 실제 교사·학원 운영자·SAT 수학 전문가로서 축적한 교육 경험을 바탕으로 학생의 장기 성장 전략을 설계합니다."
  },
  {
    icon: "globe",
    title: "한미 교육 시스템을 모두 이해하는 컨설팅",
    text: "한국 학부모의 기대와 미국 대학 입시의 실제 평가 기준 사이의 간극을 연결하며, 국제학교·유학생 가정에 최적화된 방향을 제시합니다."
  },
  {
    icon: "book",
    title: "학생에게 맞는 현실적 경로 설계",
    text: "Freshman admission뿐 아니라 다양한 Transfer Pathway, 전공 방향성, 재정 현실성까지 함께 고려하여 학생에게 가장 적합한 장기 전략을 설계합니다."
  },
  {
    icon: "shield",
    title: "부티크형 소수 정예 관리",
    text: "학생 수를 제한하여 학생의 성향·학업 패턴·강점·재정 상황까지 깊이 이해하고 직접 관리합니다."
  }
];

const partnerships = [
  {
    name: "Foundation Planning",
    audience: "9–10학년 장기 학업 설계",
    points: ["학업 로드맵 설계", "과목 및 활동 방향성", "여름 프로그램 전략", "학생 성향 기반 장기 성장 계획"]
  },
  {
    name: "Application Strategy",
    audience: "11–12학년 입시 전략 관리",
    points: ["대학 리스트 전략", "에세이 및 활동 방향성", "지원 일정 관리", "학생별 대학 포지셔닝 설계"]
  },
  {
    name: "Family Advisory",
    audience: "학부모 및 재정 전략 상담",
    points: ["학비 및 재정보조 전략", "Transfer pathway 상담", "장학금 및 Merit Aid 방향성", "학부모 의사결정 지원"]
  },
  {
    name: "Complete Admissions Partnership",
    audience: "소수 정예 집중 관리",
    points: ["입시 전 과정 직접 관리", "학생·학부모 장기 커뮤니케이션", "학업·전공·입시 방향 통합 설계", "Limited families accepted each year"]
  }
];

const contentTests = [
  {
    name: "서비스 섹션은 최소 여섯 가지 항목을 포함해야 합니다",
    pass: services.length >= 6
  },
  {
    name: "서비스 섹션은 college funding 관련 항목을 포함해야 합니다",
    pass: services.some((service) => service.includes("학비") && service.includes("재정보조"))
  },
  {
    name: "모든 프로그램은 최소 네 가지 설명 항목을 포함해야 합니다",
    pass: partnerships.every((pkg) => pkg.points.length >= 4)
  },
  {
    name: "Family Advisory 프로그램이 존재해야 합니다",
    pass: partnerships.some((pkg) => pkg.name === "Family Advisory")
  },
  {
    name: "모든 차별점 아이콘은 로컬 SVG 경로를 사용해야 합니다",
    pass: differentiators.every((item) => Boolean(icons[item.icon]))
  },
  {
    name: "외부 lucide-react 의존성이 필요하지 않아야 합니다",
    pass: typeof Icon === "function" && Boolean(icons.arrowRight) && Boolean(icons.check)
  }
];

function runContentTests() {
  contentTests.forEach((test) => {
    if (!test.pass) {
      throw new Error(`Landing page content test failed: ${test.name}`);
    }
  });
}

export default function BoutiqueAdmissionsLandingPage() {
  runContentTests();

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-slate-950" style={{ fontFamily: "Pretendard, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', system-ui, sans-serif", wordBreak: "keep-all" }}>
      <section className="relative overflow-hidden border-b border-black/5 bg-[#f5f1e8]">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.65),rgba(245,241,232,0.96))]" />
        <div className="absolute right-6 top-6 z-20 flex items-center gap-3 lg:right-10 lg:top-8">
          <span className="hidden text-sm text-slate-600 sm:inline">Korean-English Consultation</span>
          <button
            type="button"
            onClick={() => window.open("https://pf.kakao.com/_xdxnpxbX/chat", "_blank", "noopener,noreferrer")}
            className="rounded-none border border-[#FEE500] bg-[#FEE500] px-4 py-2 text-sm font-semibold text-black hover:bg-[#f6dc00]"
          >
            <Icon name="message" className="mr-2 h-4 w-4" /> KakaoTalk
          </button>
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col justify-center">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
              
              <div className="inline-flex w-fit items-center gap-2 border border-amber-400/30 bg-amber-400/10 px-4 py-2 font-medium text-slate-700 backdrop-blur">
                Not the score. The path.
              </div>
            </div>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              학생마다
              <br />
              성장의 방향은 다릅니다.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-700">
              David Cho는 단순히 대학 원서를 준비하지 않습니다. 학생의 사고 방식, 학업 성향, 강점, 동기, 그리고 장기적인 가능성을 깊이 이해한 뒤 가장 잘 성장할 수 있는 전공과 대학 방향을 함께 설계합니다.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => window.open("https://pf.kakao.com/_xdxnpxbX/chat", "_blank", "noopener,noreferrer")}
                className="rounded-none border border-slate-950 bg-slate-950 px-8 py-6 text-base font-semibold text-white hover:bg-slate-800"
              >
                가족 상담 예약하기 <Icon name="arrowRight" className="ml-2 h-5 w-5" />
              </button>
              <button className="rounded-none border border-slate-400 bg-transparent px-8 py-6 text-base font-semibold text-slate-900 hover:bg-black/5">
                프로그램 보기
              </button>
            </div>
            <div className="mt-10 border-l-2 border-slate-400 pl-5 text-base italic leading-8 text-slate-600" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              “No junior consultants. No hand-offs. Every family works directly with David Cho from strategy to submission.”
            </div>

            <div className="mt-12 border-t border-slate-300 pt-6 text-sm text-slate-600">
              <div className="grid gap-4 sm:grid-cols-3">
                <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4" /> 학생 성향 분석 기반 전략</span>
                <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4" /> 전공·진로 방향성 설계</span>
                <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4" /> 미국 대학 입시·Transfer 전략</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="lg:pl-8">
            <div className="overflow-hidden border border-black/10 bg-[#faf7f2] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="aspect-[4/5] overflow-hidden bg-[#e9e2d6]">
                <img
                  src="/images/david-cho.jpg"
                  alt="David Cho"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="border-t border-black/5 bg-[#faf7f2] p-8 text-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Educational Direction</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.03em]">
                  학생의 가능성을 하나의 방향으로 연결합니다
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  성적과 활동을 단순히 정리하는 것이 아니라, 학생의 성향·학업 패턴·전공 적합성·재정 현실성까지 하나의 장기적인 교육 전략 안에서 연결합니다.
                </p>

                <div className="mt-6 grid gap-4">
                  {["학생 성향 분석", "전공 적합성", "학업 성장 전략", "대학 포지셔닝", "학비·장학금 전략"].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-100 px-4 py-3">
                      <span className="font-semibold">{item}</span>
                      <Icon name="check" className="h-5 w-5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <Stat number="15+" label="K–12, 대학 강의, 학원 운영, 개인 지도까지 아우르는 교육 경력" />
            <Stat number="$1M+" label="미국 캘리포니아 학원 운영 당시 연간 예산 관리 경험" />
            <Stat number="25+" label="대학원 학위 보유 강사를 포함한 파트타임 강사진 관리 경험" />
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1e8] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Why Families Choose Us</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">입시를 아는 컨설턴트이기 전에, 학생을 성장시켜 본 교육자입니다.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <div key={item.title} className="border border-black/5 bg-[#faf7f2] text-slate-950 shadow-sm">
                <div className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center bg-slate-950 text-white">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold leading-snug tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#efe8dc] px-6 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-800">Services</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">계획부터 제출까지, 흔들리지 않는 입시 로드맵</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              학생의 학교 환경, 성적, 전공 관심사, 활동 이력, 가정의 목표뿐 아니라 학비 부담과 장학금 가능성까지 함께 고려하여 가장 현실적이면서도 전략적인 지원 계획을 설계합니다.
            </p>
          </div>
          <div className="grid gap-4">
            {services.map((service) => (
              <div key={service} className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <Icon name="check" className="mt-1 h-5 w-5 flex-none text-blue-800" />
                <p className="leading-7 text-slate-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1e8] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Educational Partnerships</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">학생의 성장 단계에 맞춘 Educational Partnerships</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {partnerships.map((pkg, index) => {
              const isHighlighted = pkg.name === "Complete Admissions Partnership";
              return (
                <div key={pkg.name} className={`border border-black/5 ${isHighlighted ? "bg-slate-950 text-white" : "bg-[#faf7f2] text-slate-950"} shadow-sm`}>
                  <div className="p-7">
                    <p className={`text-sm font-semibold ${isHighlighted ? "text-blue-800" : "text-amber-300"}`}>{pkg.audience}</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.02em]">{pkg.name}</h3>
                    
                    <div className="mt-6 space-y-4">
                      {pkg.points.map((point) => (
                        <div key={point} className="flex gap-3">
                          <Icon name="check" className="mt-0.5 h-5 w-5 flex-none" />
                          <span className={`leading-7 ${isHighlighted ? "text-slate-200" : "text-slate-700"}`}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#1f2d27] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-5xl border border-white/10 bg-white/5 p-10 sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Founder Story</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
            학생의 합격보다 먼저, 학생의 가능성을 성장시켜 온 교육자
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="leading-8 text-slate-300">
                David Cho는 한국과 미국의 다양한 교육 환경에서 학생들을 가르치며, 단순한 시험 점수보다 학생의 사고력·학업 방향성·자신감의 성장이 훨씬 중요하다는 것을 직접 경험했습니다.
              </p>
              <p className="mt-5 leading-8 text-slate-300">
                USC Rossier School of Education에서 교육학을 연구하고, SAT·수학 교육과 학원 운영, 미국 학교 현장 경험까지 쌓아오며 학생 개개인에게 맞는 현실적이면서도 장기적인 전략을 설계해 왔습니다.
              </p>
            </div>
            <div>
              <p className="leading-8 text-slate-300">
                또한 Santa Monica College 근무 경험을 통해 미국 대학 transfer system에 대한 실질적인 이해를 갖추게 되었으며, 학생 상황에 맞는 다양한 전략적 편입 경로까지 폭넓게 안내할 수 있습니다.
              </p>
              <p className="mt-5 leading-8 text-slate-300">
                David Cho의 컨설팅은 단순한 원서 제출이 아니라, 학생의 잠재력·가정의 현실·장기적인 교육 방향을 함께 설계하는 프리미엄 교육 파트너십입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-800">Founder Philosophy</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">입시 컨설턴트가 아닌, 학생 성장을 설계해 온 교육자</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              David Cho는 학원 설립자, 수학 강사, SAT/ACT 전문가, 공립·차터학교 교사, 대학 입시 컨설턴트로서 다양한 교육 현장을 경험했습니다. 학생의 가능성을 정확히 읽고, 학부모님이 신뢰할 수 있는 현실적인 입시 및 학비 전략을 제시합니다.
            </p>
          </div>
          <div className="grid gap-5">
            <BioPoint icon="users" title="전 EduPro California 설립자 및 대표" text="캘리포니아에서 대학 준비 중심의 학원을 운영하며 다양한 학생과 학부모를 지도했습니다." />
            <BioPoint icon="graduation" title="USC Rossier School of Education 출신 교육자" text="University of Southern California에서 Master of Arts in Teaching을 취득했습니다." />
            <BioPoint icon="message" title="영어·한국어 이중 언어 커뮤니케이션" text="학생과 학부모가 미국 입시의 기준, 준비 과정, 학비 전략을 명확히 이해하도록 돕습니다." />
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1e8] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl border border-black/10 bg-[#ede7dc] p-10 text-center shadow-sm sm:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center border border-slate-300 bg-white text-slate-950">
            <Icon name="calendar" className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">첫 단계는 가족 맞춤 상담입니다.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            학생의 현재 성적, 목표 대학, 전공 방향뿐 아니라 예상 학비와 재정보조 가능성까지 함께 검토하여 가장 현실적이고 전략적인 다음 단계를 제안드립니다.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => window.open("https://pf.kakao.com/_xdxnpxbX/chat", "_blank", "noopener,noreferrer")}
                className="rounded-none border border-slate-950 bg-slate-950 px-8 py-6 text-base font-semibold text-white hover:bg-slate-800"
              >
                상담 예약하기 <Icon name="arrowRight" className="ml-2 h-5 w-5" />
              </button>
              <p className="text-sm text-slate-500">소수 정예로 제한 운영됩니다</p>
            </div>

            <div className="border-t border-slate-300 pt-5 text-sm text-slate-500">
              Korean-English parent consultation available via KakaoTalk
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
      <div className="text-4xl font-semibold tracking-[-0.03em] text-slate-950">{number}</div>
      <p className="mt-3 leading-7 text-slate-600">{label}</p>
    </div>
  );
}

function BioPoint({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-3xl bg-slate-100 p-5">
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-slate-950 text-white">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-semibold leading-snug tracking-[-0.02em]">{title}</h3>
        <p className="mt-1 leading-7 text-slate-600">{text}</p>
      </div>
    </div>
  );
}
