import React, { useState } from 'react';
import { Play, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Contact', 'Team', 'Partners', 'Careers', 'Blogs'];
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#030fe0] text-[#ffb923] shadow-lg px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img 
          src="/logo.png" 
          alt="HHK" 
          className="h-8 w-auto brightness-200" 
          onError={(e) => e.target.src = "https://via.placeholder.com/40?text=HHK"} 
        />
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((name) => (
            <a key={name} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors">{name}</a>
          ))}
        </div>
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

  const partners = ["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6"];

  return (
    <div className="min-h-screen bg-[#ffb923] font-sans selection:bg-[#030fe0] selection:text-white text-[#030fe0]">
      <Navbar />

      {/* VIDEO SECTION - Full Width, Clean Overlay */}
      <section className="w-full h-[70vh] bg-black relative mt-16 overflow-hidden group">
        {!isPlaying ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
            <div className="absolute inset-0 bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" style={{ backgroundImage: `url('https://i.ytimg.com/vi/Y6aC43IODlg/maxresdefault.jpg')` }}></div>
            <div className="relative z-20 flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#030fe0] text-[#ffb923] rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                <Play size={32} fill="currentColor" />
              </div>
              <p className="font-black tracking-[0.4em] text-white uppercase text-[10px]">Play The Journey</p>
            </div>
          </div>
        ) : (
          <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/Y6aC43IODlg?autoplay=1" frameBorder="0" allowFullScreen></iframe>
        )}
      </section>
      
      {/* HEADER */}
      <section className="text-center pt-24 pb-12 px-6">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-none">
          THE JOURNEY <br/><span className="opacity-80">OF CHANGE</span>
        </h1>
        <p className="mt-6 text-[10px] font-black tracking-[0.5em] uppercase opacity-60">Har Hath Kalam India Association</p>
      </section>

      {/* SNAKE JOURNEY - Slimmer connection, cleaner text */}
      <div className="max-w-5xl mx-auto py-20 px-8 relative">
        <svg className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1500">
          <path d="M 500 50 C 950 50, 950 300, 500 300 C 50 300, 50 550, 500 550 C 950 550, 950 800, 500 800 C 50 800, 50 1050, 500 1050 L 500 1250" fill="none" stroke="#030fe0" strokeWidth="2" strokeDasharray="10 10" className="opacity-20" />
        </svg>

        {steps.map((step, index) => (
          <div key={step.id} className={`flex flex-col md:flex-row items-center mb-40 relative ${index % 2 !== 0 ? 'md:flex-row-reverse text-center md:text-right' : 'text-center md:text-left'}`}>
            <div className="relative z-10 shrink-0">
              <div className="w-44 h-44 bg-white rounded-[2.5rem] shadow-xl flex items-center justify-center border-2 border-[#030fe0]/10">
                <img src={step.img} alt={step.title} className="w-28 h-28 object-contain opacity-90" />
              </div>
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#030fe0] text-[#ffb923] rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                {step.id}
              </div>
            </div>

            <div className="md:px-16 mt-8 md:mt-0 max-w-lg">
              <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">{step.title}</h3>
              <p className="text-[9px] font-black uppercase text-[#ffb923] bg-[#030fe0] inline-block px-3 py-1 rounded-full mb-4 tracking-widest">
                {step.desc}
              </p>
              <p className="text-sm leading-relaxed font-medium text-[#030fe0]/80">
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CORE PROGRAMS - Light Cards */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-black tracking-widest uppercase mb-16">OUR CORE PROGRAMS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/60 backdrop-blur-sm p-12 rounded-[3rem] border border-white/40 shadow-sm hover:bg-white transition-all duration-300">
              <h2 className="text-4xl font-black mb-1">BUNIYAAD</h2>
              <p className="text-[10px] font-bold opacity-40 tracking-[0.3em] mb-8 uppercase">Learning Centre Program</p>
              <ul className="space-y-4">
                {[
                  "Bridge education program specifically for children who are unable to attend formal schools.",
                  "Establishing safe learning spaces, libraries, and classrooms right where the children are.",
                  "Holistic development to prepare children for meaningful careers and social integration."
                ].map((li, i) => (
                  <li key={i} className="flex gap-4 text-sm font-medium text-[#030fe0]/70 leading-relaxed">
                    <span className="text-[#030fe0]">•</span> {li}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-12 rounded-[3rem] border border-white/40 shadow-sm hover:bg-white transition-all duration-300">
              <h2 className="text-4xl font-black mb-1">MERI KITAB</h2>
              <p className="text-[10px] font-bold opacity-40 tracking-[0.3em] mb-8 uppercase">Community Learning Program</p>
              <ul className="space-y-4">
                {[
                  "Bringing education to the heart of communities through interactive readings and theatre.",
                  "Working closely with parents to build a supportive home environment for learning.",
                  "Empowering the entire community to take ownership of their children's educational journey."
                ].map((li, i) => (
                  <li key={i} className="flex gap-4 text-sm font-medium text-[#030fe0]/70 leading-relaxed">
                    <span className="text-[#030fe0]">•</span> {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION - Rightward Motion */}
      <section className="bg-[#030fe0] py-16 overflow-hidden">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex gap-20 animate-scroll-right items-center">
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <div key={i} className="flex items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-[#ffb923] rounded-xl flex items-center justify-center">
                   <span className="text-[#030fe0] font-black text-[8px]">HHK</span>
                </div>
                <span className="text-4xl font-black text-white italic">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#ffb923] py-16 text-center">
        <p className="text-[#ffb923] text-[9px] font-black tracking-[1em] uppercase opacity-40">HHK INDIA • 2026</p>
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