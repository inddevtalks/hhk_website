claude_ai -- good looking 

import React, { useState, useEffect, useRef } from 'react';

/* ─── Google Fonts injected once ─── */
const FontLink = () => (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');`}</style>
);

/* ─── Design tokens ─── */
const T = {
  navy:   '#002B5B',
  navyD:  '#001830',
  navyL:  '#0a3d7a',
  gold:   '#E8B800',
  goldL:  '#FFD700',
  goldDim:'rgba(232,184,0,0.15)',
  cream:  '#F9F6EF',
  white:  '#FFFFFF',
  muted:  'rgba(0,43,91,0.45)',
  border: 'rgba(0,43,91,0.10)',
};

const css = {
  display:   { fontFamily: "'Cormorant Garamond', serif" },
  body:      { fontFamily: "'Outfit', sans-serif" },
};

/* ─── useInView hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ═══════════════════════════════════════
   NAVBAR
═══════════════════════════════════════ */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = ['Home','About','Programs','Team','Partners','Careers','Blogs','Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? T.navyD : 'transparent',
      borderBottom: scrolled ? `1px solid rgba(232,184,0,0.12)` : 'none',
      transition: 'background 0.35s, border-color 0.35s',
      ...css.body,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: T.gold, display: 'flex', alignItems: 'center', justifyContent: 'center',
            ...css.display, fontWeight: 700, fontSize: 16, color: T.navy, letterSpacing: 1,
          }}>HK</div>
          <span style={{ ...css.display, fontWeight: 600, fontSize: 17, color: T.white, letterSpacing: 0.5 }}>
            Har Hath Kalam
          </span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map(l => (
            <a key={l} href="#" style={{
              ...css.body, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.72)',
              textDecoration: 'none', letterSpacing: 0.3,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = T.goldL}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.72)'}
            >{l}</a>
          ))}
          <a href="#" style={{
            ...css.body, fontSize: 13, fontWeight: 600,
            background: T.gold, color: T.navy,
            padding: '8px 20px', borderRadius: 6,
            textDecoration: 'none', letterSpacing: 0.3,
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.target.style.background = T.goldL}
            onMouseLeave={e => e.target.style.background = T.gold}
          >Donate</a>
        </div>
      </div>
    </nav>
  );
};

/* ═══════════════════════════════════════
   HERO
═══════════════════════════════════════ */
const Hero = () => (
  <section style={{
    minHeight: '100vh',
    background: T.navyD,
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    textAlign: 'center', padding: '8rem 2rem 6rem',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Decorative grid lines */}
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04 }}>
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{ position: 'absolute', top: 0, bottom: 0, left: `${(i + 1) * 14.28}%`, width: 1, background: T.gold }} />
      ))}
    </div>

    {/* Gold accent top bar */}
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: T.gold }} />

    {/* Eyebrow */}
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      background: 'rgba(232,184,0,0.1)', border: `1px solid rgba(232,184,0,0.25)`,
      borderRadius: 100, padding: '6px 18px', marginBottom: '2rem',
    }}>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: T.gold }} />
      <span style={{ ...css.body, fontSize: 12, fontWeight: 500, color: T.goldL, letterSpacing: 2, textTransform: 'uppercase' }}>
        India Association
      </span>
    </div>

    {/* Title */}
    <h1 style={{ ...css.display, fontWeight: 700, fontSize: 'clamp(3rem, 8vw, 6.5rem)', color: T.white, lineHeight: 1.0, marginBottom: '1.75rem', maxWidth: 800 }}>
      Every Child<br />
      <span style={{ color: T.gold, fontStyle: 'italic' }}>Deserves</span> a Future
    </h1>

    {/* Subtitle */}
    <p style={{ ...css.body, fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 520, lineHeight: 1.8, marginBottom: '3rem' }}>
      Har Hath Kalam works alongside street children — identifying, enrolling, and mentoring them toward a dignified life through education.
    </p>

    {/* CTAs */}
    <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
      <a href="#journey" style={{
        ...css.body, fontSize: 14, fontWeight: 600,
        background: T.gold, color: T.navy,
        padding: '14px 32px', borderRadius: 8, textDecoration: 'none',
        letterSpacing: 0.3, transition: 'background 0.2s',
      }}
        onMouseEnter={e => e.target.style.background = T.goldL}
        onMouseLeave={e => e.target.style.background = T.gold}
      >See Our Journey</a>
      <a href="#programs" style={{
        ...css.body, fontSize: 14, fontWeight: 500,
        background: 'transparent', color: T.white,
        padding: '14px 32px', borderRadius: 8, textDecoration: 'none',
        border: '1px solid rgba(255,255,255,0.2)', letterSpacing: 0.3,
        transition: 'border-color 0.2s',
      }}
        onMouseEnter={e => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
        onMouseLeave={e => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
      >Our Programs</a>
    </div>

    {/* Stats row */}
    <div style={{
      display: 'flex', gap: '3rem', marginTop: '5rem',
      borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2.5rem',
      flexWrap: 'wrap', justifyContent: 'center',
    }}>
      {[['2,400+','Children Reached'],['12','Active Centres'],['8','Years of Impact']].map(([n, l]) => (
        <div key={l} style={{ textAlign: 'center' }}>
          <div style={{ ...css.display, fontWeight: 700, fontSize: '2.2rem', color: T.gold, lineHeight: 1 }}>{n}</div>
          <div style={{ ...css.body, fontSize: 12, fontWeight: 400, color: 'rgba(255,255,255,0.4)', marginTop: 6, letterSpacing: 1, textTransform: 'uppercase' }}>{l}</div>
        </div>
      ))}
    </div>
  </section>
);

/* ═══════════════════════════════════════
   SNAKE ROADMAP
═══════════════════════════════════════ */
const steps = [
  { id: 1, tag: 'The Problem',   title: 'Kids on Streets',         detail: 'Thousands of children live on the streets, deprived of safety, dignity, and their basic right to education — trapped in a cycle of poverty.', col: 'left',  variant: 'default' },
  { id: 2, tag: 'Identifying',   title: 'The Missing Voices',      detail: 'Many have no identity — no names or birth certificates. Our first step is recognising them as individuals with potential and documenting their existence.', col: 'right', variant: 'default' },
  { id: 3, tag: 'Enrolling',     title: 'The School Bridge',       detail: 'We bridge the gap to formal education — navigating paperwork and preparing each child psychologically to transition into a structured classroom.', col: 'left',  variant: 'default' },
  { id: 4, tag: 'The Barriers',  title: 'Social Stigma',           detail: 'Schools and society judge children for their past. These barriers break their spirit at the gate, requiring our constant, sustained support.', col: 'right', variant: 'barrier' },
  { id: 5, tag: 'Our Pathways',  title: 'Sustainable Solutions',   detail: 'We mentor children, support families, and build communities where every child can grow. We don\'t just enrol — we walk beside them for the long haul.', col: 'full',  variant: 'solution' },
];

const StepCard = ({ step, index }) => {
  const [ref, visible] = useInView(0.1);
  const isBarrier  = step.variant === 'barrier';
  const isSolution = step.variant === 'solution';

  const bg      = isSolution ? T.gold   : isBarrier ? '#0d1f3c' : T.navy;
  const titleC  = isSolution ? T.navy   : T.white;
  const tagC    = isSolution ? T.navyD  : T.gold;
  const detailC = isSolution ? 'rgba(0,43,91,0.7)' : 'rgba(255,255,255,0.58)';
  const numBg   = isSolution ? T.navy   : isBarrier ? T.gold : T.gold;
  const numC    = isSolution ? T.gold   : T.navy;
  const borderC = isSolution ? 'transparent' : isBarrier ? 'rgba(232,184,0,0.12)' : 'rgba(232,184,0,0.15)';
  const topBar  = isSolution ? T.navy   : isBarrier ? '#c07010' : T.gold;

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.55s ease ${index * 0.12}s, transform 0.55s ease ${index * 0.12}s`,
      background: bg,
      border: `1px solid ${borderC}`,
      borderRadius: 16,
      padding: '1.75rem',
      position: 'relative',
      overflow: 'hidden',
      flex: step.col === 'full' ? '1' : '0 0 calc(50% - 1.5rem)',
      maxWidth: step.col === 'full' ? '100%' : 'calc(50% - 1.5rem)',
      cursor: 'default',
    }}>
      {/* top accent bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: topBar, borderRadius: '16px 16px 0 0' }} />

      {/* Large ghost number */}
      <div style={{
        position: 'absolute', bottom: -12, right: 16,
        ...css.display, fontSize: 88, fontWeight: 700, lineHeight: 1,
        color: isSolution ? 'rgba(0,43,91,0.08)' : 'rgba(255,255,255,0.04)',
        userSelect: 'none', pointerEvents: 'none',
      }}>{step.id}</div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: numBg, color: numC,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          ...css.display, fontWeight: 700, fontSize: 15,
          flexShrink: 0,
        }}>{step.id}</div>
        <div style={{ flex: 1 }}>
          <div style={{ ...css.body, fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: tagC, marginBottom: 5, opacity: 0.75 }}>{step.tag}</div>
          <div style={{ ...css.display, fontWeight: 700, fontSize: '1.15rem', color: titleC, marginBottom: 10, lineHeight: 1.2 }}>{step.title}</div>
          <p style={{ ...css.body, fontSize: 13.5, fontWeight: 300, color: detailC, lineHeight: 1.75, margin: 0 }}>{step.detail}</p>
        </div>
      </div>
    </div>
  );
};

/* Connector between rows */
const VConnector = ({ side = 'right' }) => (
  <div style={{ display: 'flex', justifyContent: side === 'right' ? 'flex-end' : 'flex-start', paddingRight: side === 'right' ? '25%' : 0, paddingLeft: side === 'left' ? '25%' : 0, margin: '0' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '4px 0' }}>
      {[...Array(5)].map((_, i) => (
        <div key={i} style={{ width: 2, height: 7, borderRadius: 2, background: T.gold, opacity: 0.3 - i * 0.02 }} />
      ))}
      <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: `7px solid rgba(232,184,0,0.35)` }} />
    </div>
  </div>
);

const HConnector = () => (
  <div style={{ flex: '0 0 3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ height: 2, width: '100%', background: `repeating-linear-gradient(to right, ${T.gold} 0, ${T.gold} 6px, transparent 6px, transparent 12px)`, opacity: 0.3 }} />
  </div>
);

const Journey = () => {
  const [titleRef, titleVisible] = useInView(0.1);
  return (
    <section id="journey" style={{ background: T.navyD, padding: '7rem 2rem', ...css.body }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Section header */}
        <div ref={titleRef} style={{
          textAlign: 'center', marginBottom: '4rem',
          opacity: titleVisible ? 1 : 0, transform: titleVisible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.5s, transform 0.5s',
        }}>
          <div style={{ ...css.body, fontSize: 11, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', color: T.gold, opacity: 0.6, marginBottom: 12 }}>Our Process</div>
          <h2 style={{ ...css.display, fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3rem)', color: T.white, margin: 0 }}>
            The Journey of <em style={{ color: T.gold }}>Change</em>
          </h2>
          <div style={{ width: 48, height: 2, background: T.gold, margin: '1.5rem auto 0', opacity: 0.5 }} />
        </div>

        {/* Row 1: steps 1 & 2 */}
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'stretch', marginBottom: 0 }}>
          <StepCard step={steps[0]} index={0} />
          <HConnector />
          <StepCard step={steps[1]} index={1} />
        </div>

        <VConnector side="right" />

        {/* Row 2: steps 3 & 4 — reversed */}
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'stretch', flexDirection: 'row-reverse', marginBottom: 0 }}>
          <StepCard step={steps[2]} index={2} />
          <HConnector />
          <StepCard step={steps[3]} index={3} />
        </div>

        <VConnector side="left" />

        {/* Row 3: step 5 full width */}
        <div style={{ display: 'flex' }}>
          <StepCard step={steps[4]} index={4} />
        </div>

      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   PROGRAMS
═══════════════════════════════════════ */
const programs = [
  {
    num: '01',
    name: 'Buniyaad',
    subtitle: 'Learning Centre Program',
    desc: 'A bridge education program for children unable to attend formal schools — establishing safe learning spaces and libraries right where the children are.',
    points: [
      'Bridge classes for out-of-school children',
      'Safe community learning spaces & libraries',
      'Holistic development toward meaningful careers',
    ],
  },
  {
    num: '02',
    name: 'Meri Kitab',
    subtitle: 'Community Learning Program',
    desc: 'Bringing education into the heart of communities through interactive readings, theatre, and parent engagement that empowers families.',
    points: [
      'Interactive readings & theatre workshops',
      'Parent engagement for home learning support',
      'Community ownership of educational journeys',
    ],
  },
];

const ProgramCard = ({ p, i }) => {
  const [cardRef, cardVisible] = useInView(0.1);
  return (
    <div ref={cardRef} style={{
      background: T.white,
      border: `1px solid ${T.border}`,
      borderRadius: 20,
      overflow: 'hidden',
      opacity: cardVisible ? 1 : 0,
      transform: cardVisible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`,
    }}>
      {/* Card top band */}
      <div style={{ background: T.navy, padding: '2rem 2rem 1.75rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -20, right: -10, ...css.display, fontSize: 100, fontWeight: 700, color: 'rgba(255,255,255,0.04)', userSelect: 'none' }}>{p.num}</div>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: T.gold, opacity: 0.6, marginBottom: 8 }}>Program {p.num}</div>
        <div style={{ ...css.display, fontWeight: 700, fontSize: '2rem', color: T.white, lineHeight: 1, marginBottom: 6 }}>{p.name}</div>
        <div style={{ fontSize: 12, fontWeight: 400, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{p.subtitle}</div>
      </div>
      {/* Card body */}
      <div style={{ padding: '1.75rem 2rem 2rem' }}>
        <p style={{ fontSize: 14, fontWeight: 300, color: T.muted, lineHeight: 1.8, marginBottom: '1.5rem' }}>{p.desc}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {p.points.map((pt, j) => (
            <div key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: T.goldDim, border: `1px solid rgba(232,184,0,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: T.gold }} />
              </div>
              <span style={{ fontSize: 13.5, fontWeight: 400, color: T.navy, lineHeight: 1.65, opacity: 0.8 }}>{pt}</span>
            </div>
          ))}
        </div>
        <a href="#" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          marginTop: '1.75rem', fontSize: 13, fontWeight: 600, color: T.navy,
          textDecoration: 'none', letterSpacing: 0.3,
          borderBottom: `1.5px solid ${T.gold}`, paddingBottom: 2,
        }}>Learn more →</a>
      </div>
    </div>
  );
};

const Programs = () => {
  const [ref, visible] = useInView(0.1);
  return (
    <section id="programs" style={{ background: T.cream, padding: '7rem 2rem', ...css.body }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div ref={ref} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem',
          opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.5s, transform 0.5s',
        }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', color: T.gold, opacity: 0.7, marginBottom: 10 }}>What We Do</div>
            <h2 style={{ ...css.display, fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: T.navy, margin: 0 }}>Our Core Programs</h2>
          </div>
          <a href="#" style={{
            fontSize: 13, fontWeight: 600, color: T.navy,
            padding: '11px 24px', borderRadius: 8,
            border: `1.5px solid ${T.navy}`,
            textDecoration: 'none', letterSpacing: 0.3,
            transition: 'background 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = T.navy; e.currentTarget.style.color = T.white; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.navy; }}
          >View All Programs →</a>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {programs.map((p, i) => (
            <ProgramCard key={p.num} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   FOOTER
═══════════════════════════════════════ */
const Footer = () => (
  <footer style={{ background: '#010f1f', padding: '3.5rem 2rem', ...css.body }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 7, background: T.gold, display: 'flex', alignItems: 'center', justifyContent: 'center', ...css.display, fontWeight: 700, fontSize: 14, color: T.navy }}>HK</div>
        <div>
          <div style={{ ...css.display, fontWeight: 600, fontSize: 15, color: T.white }}>Har Hath Kalam</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>India Association</div>
        </div>
      </div>
      <div style={{ fontSize: 11, fontWeight: 400, color: 'rgba(255,255,255,0.18)', letterSpacing: 2, textTransform: 'uppercase' }}>
        © 2026 HHK India. All rights reserved.
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {['Privacy','Terms','Contact'].map(l => (
          <a key={l} href="#" style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', letterSpacing: 0.5, transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = T.gold}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
          >{l}</a>
        ))}
      </div>
    </div>
  </footer>
);

/* ═══════════════════════════════════════
   ROOT APP
═══════════════════════════════════════ */
export default function App() {
  return (
    <>
      <FontLink />
      <div style={{ minHeight: '100vh', background: T.navyD }}>
        <Navbar />
        <Hero />
        <Journey />
        <Programs />
        <Footer />
      </div>
    </>
  );
}