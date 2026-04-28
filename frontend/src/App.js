import React, { useState } from 'react';
import { Play, Menu } from 'lucide-react';

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Contact', 'Team', 'Partners', 'Careers', 'Blogs'];
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#030fe0] text-[#ffb923] shadow-lg px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="HHK" 
            className="h-8 w-auto brightness-200" 
            onError={(e) => e.target.src = "https://via.placeholder.com/40?text=HHK"} 
          />
        </div>
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((name) => (
            <a key={name} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors">{name}</a>
          ))}
        </div>
        <Menu className="lg:hidden w-6 h-6 text-[#ffb923]" />
      </div>
    </nav>
  );
};

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    { 
      id: 1, 
      title: "THE PROBLEM", 
      desc: "KIDS ON STREETS", 
      detail: "Thousands of children live and work on the streets, deprived of safety, dignity, and their basic right to education. They are often trapped in a cycle of poverty that seems impossible to break without external intervention.", 
      img: "https://cdn-icons-png.flaticon.com/512/4295/4295903.png" 
    },
    { 
      id: 2, 
      title: "IDENTIFYING", 
      desc: "THE MISSING VOICES", 
      detail: "We meet children on the streets who often have no identity—some don't even have names or birth certificates. Our first step is recognizing them as individuals with potential and documenting their existence.", 
      img: "https://cdn-icons-png.flaticon.com/512/3521/3521101.png" 
    },
    { 
      id: 3, 
      title: "ENROLLING", 
      desc: "THE SCHOOL BRIDGE", 
      detail: "We bridge the gap to enroll them in formal education systems. This involves navigating complex paperwork and preparing the child psychologically to transition from the street to a structured classroom environment.", 
      img: "https://cdn-icons-png.flaticon.com/512/2855/2855260.png" 
    },
    { 
      id: 4, 
      title: "THE BARRIERS", 
      desc: "SOCIAL STIGMA", 
      detail: "Schools and society often judge them for their past, their clothes, or their lifestyle. These barriers often break their spirit at the school gates, making it difficult for them to stay enrolled without our constant support.", 
      img: "https://cdn-icons-png.flaticon.com/512/6254/6254441.png" 
    },
    { 
      id: 5, 
      title: "OUR PATHWAYS", 
      desc: "THE SUSTAINABLE SOLUTION", 
      detail: "We created unique programs to walk beside them. We don't just enroll them; we mentor them, support their families, and ensure the community becomes a safe space for their growth and long-term success.", 
      img: "https://cdn-icons-png.flaticon.com/512/3233/3233486.png" 
    },
  ];

  const partners = ["UNICEF", "TATA TRUSTS", "HDFC BANK", "RELIANCE", "INFOSYS", "GIVE INDIA"];

  return (
    <div className="min-h-screen bg-[#ffb923] font-sans selection:bg-[#030fe0] selection:text-white text-[#030fe0] overflow-x-hidden">
      <Navbar />

      {/* HERO VIDEO SECTION */}
      <section className="w-full h-[50vh] md:h-[75vh] bg-black relative mt-16 overflow-hidden group border-b-2 border-[#030fe0]/10">
        {!isPlaying ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer px-4" onClick={() => setIsPlaying(true)}>
            <div className="absolute inset-0 bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105" 
                 style={{ backgroundImage: `url('https://i.ytimg.com/vi/Y6aC43IODlg/maxresdefault.jpg')` }}></div>
            <div className="relative z-20 flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-[#030fe0] text-[#ffb923] rounded-full flex items-center justify-center shadow-2xl border-2 border-[#ffb923]/30 transform group-hover:scale-110 transition-transform">
                <Play size={32} className="ml-1" fill="currentColor" />
              </div>
              <p className="font-extrabold tracking-[0.4em] text-white uppercase text-[10px]">Watch Impact</p>
            </div>
          </div>
        ) : (
          <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/Y6aC43IODlg?autoplay=1" frameBorder="0" allowFullScreen></iframe>
        )}
      </section>
      
      {/* HEADER */}
      <section className="text-center py-20 md:py-28 px-6">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
          THE JOURNEY <br/><span className="opacity-70">OF CHANGE</span>
        </h1>
        <p className="mt-6 text-[10px] font-bold tracking-[0.5em] uppercase opacity-60">Har Hath Kalam India Association</p>
      </section>

      {/* SNAKE ROADMAP */}
      <div className="max-w-5xl mx-auto py-12 md:py-20 px-8 relative">
        <svg className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1500" preserveAspectRatio="none">
          <path 
            d="M 500 50 C 950 50, 950 300, 500 300 C 50 300, 50 550, 500 550 C 950 550, 950 800, 500 800 C 50 800, 50 1050, 500 1050 L 500 1250" 
            fill="none" 
            stroke="#030fe0" 
            strokeWidth="4" 
            strokeDasharray="15 15" 
            className="opacity-20"
          />
        </svg>

        {steps.map((step, index) => (
          <div key={step.id} className={`flex flex-col md:flex-row items-center mb-28 md:mb-44 relative ${index % 2 !== 0 ? 'md:flex-row-reverse text-center md:text-right' : 'text-center md:text-left'}`}>
            <div className="relative z-10 shrink-0">
              <div className="w-40 h-40 md:w-52 md:h-52 bg-white rounded-[3rem] shadow-xl flex items-center justify-center border-2 border-[#030fe0]/10">
                <img src={step.img} alt={step.title} className="w-24 h-24 md:w-32 md:h-32 object-contain" />
              </div>
              <div className="absolute -top-3 -left-3 w-10 h-10 md:w-12 md:h-12 bg-[#030fe0] text-[#ffb923] rounded-full flex items-center justify-center font-black text-sm md:text-lg shadow-lg">
                {step.id}
              </div>
            </div>

            <div className="md:px-16 mt-10 md:mt-0 max-w-xl">
              <h3 className="text-3xl md:text-5xl font-extrabold mb-3 leading-none uppercase tracking-tighter">{step.title}</h3>
              <div className="mb-6">
                <span className="text-[10px] md:text-[11px] font-bold uppercase text-[#ffb923] bg-[#030fe0] px-4 py-1.5 rounded-full tracking-widest inline-block">
                  {step.desc}
                </span>
              </div>
              <p className="text-sm md:text-lg leading-relaxed font-semibold opacity-90">
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CORE PROGRAMS */}
      <section className="pb-32 md:pb-40 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-black tracking-widest uppercase mb-16 underline decoration-4 underline-offset-8">OUR CORE PROGRAMS</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {[
              { 
                name: "BUNIYAAD", 
                sub: "Learning Centre Program", 
                items: [
                  "Bridge education program specifically for children who are unable to attend formal schools.",
                  "Establishing safe learning spaces, libraries, and classrooms right where the children are.",
                  "Holistic development to prepare children for meaningful careers and social integration."
                ] 
              },
              { 
                name: "MERI KITAB", 
                sub: "Community Learning Program", 
                items: [
                  "Bringing education to the heart of communities through interactive readings and theatre.",
                  "Working closely with parents to build a supportive home environment for learning.",
                  "Empowering the entire community to take ownership of their children's educational journey."
                ] 
              }
            ].map((prog, idx) => (
              <div key={idx} className="bg-white p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] border-[3px] border-[#030fe0] shadow-2xl hover:-translate-y-3 transition-transform duration-500">
                <h2 className="text-4xl md:text-5xl font-black mb-1">{prog.name}</h2>
                <p className="text-[10px] font-bold opacity-30 tracking-[0.4em] mb-10 uppercase">{prog.sub}</p>
                <ul className="space-y-6">
                  {prog.items.map((li, i) => (
                    <li key={i} className="flex gap-5 text-sm md:text-lg font-bold leading-tight items-start">
                      <span className="text-[#030fe0]">•</span> {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-[#030fe0] py-16 md:py-24 overflow-hidden border-y border-white/10">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex gap-20 md:gap-40 animate-scroll-right items-center">
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <div key={i} className="flex items-center gap-8 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#ffb923] rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                   <span className="text-[#030fe0] font-black text-xs">HHK</span>
                </div>
                <span className="text-4xl md:text-6xl font-black text-white/10 group-hover:text-[#ffb923] transition-colors duration-500 uppercase italic">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#ffb923] py-20 text-center border-t border-[#030fe0]/10">
        <p className="text-[#030fe0] text-[10px] font-extrabold tracking-[1.5em] uppercase">HHK INDIA • 2026</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default App;