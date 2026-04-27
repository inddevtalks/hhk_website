import React from 'react';
import { Home, Info, Phone, Users, Handshake, Briefcase, Newspaper, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Contact', 'Team', 'Partners', 'Careers', 'Blogs'];
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#002B5B] text-white shadow-xl px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img 
          src="/logo.png" 
          alt="HHK" 
          className="h-9 w-auto brightness-200" 
          onError={(e) => e.target.src = "https://via.placeholder.com/40?text=HHK"} 
        />
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((name) => (
            <a 
              key={name} 
              href="#" 
              className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#FFD700] transition-colors"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const App = () => {
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

  return (
    <div className="min-h-screen bg-[#eaf426] font-sans pt-16 selection:bg-[#002B5B] selection:text-white">
      <Navbar />
      
      {/* HEADER */}
      <section className="text-center pt-24 pb-8 px-6">
        <h1 className="text-4xl md:text-6xl font-black text-[#002B5B] tracking-tighter uppercase leading-none">
          THE JOURNEY <br/> OF CHANGE
        </h1>
        <p className="mt-6 text-[11px] font-black text-[#002B5B] tracking-[0.5em] uppercase opacity-60">Har Hath Kalam India Association</p>
      </section>

      {/* THE DETAILED SNAKE JOURNEY */}
      <div className="max-w-6xl mx-auto py-20 px-8 relative">
        {/* The Bold Snake Connection Line */}
        <svg className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1500">
          <path 
            d="M 500 50 C 950 50, 950 300, 500 300 C 50 300, 50 550, 500 550 C 950 550, 950 800, 500 800 C 50 800, 50 1050, 500 1050 L 500 1250" 
            fill="none" 
            stroke="#002B5B" 
            strokeWidth="6" 
            strokeDasharray="20 20" 
            className="opacity-25"
          />
        </svg>

        {steps.map((step, index) => (
          <div key={step.id} className={`flex flex-col md:flex-row items-center mb-48 relative ${index % 2 !== 0 ? 'md:flex-row-reverse text-center md:text-right' : 'text-center md:text-left'}`}>
            
            {/* Step Icon Container */}
            <div className="relative group z-10 shrink-0">
              <div className="w-52 h-52 bg-white rounded-[3rem] shadow-2xl flex items-center justify-center transition-transform group-hover:scale-105 border-4 border-white">
                <img src={step.img} alt={step.title} className="w-36 h-36 object-contain" />
              </div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#002B5B] text-white rounded-full flex items-center justify-center font-black text-lg shadow-xl border-4 border-[#FFD700]">
                {step.id}
              </div>
            </div>

            {/* Expanded Content Text */}
            <div className="md:px-20 mt-12 md:mt-0 max-w-xl">
              <h3 className="text-3xl font-black text-[#002B5B] mb-2 leading-none uppercase tracking-tighter">{step.title}</h3>
              <p className="text-[11px] font-black uppercase text-white bg-[#002B5B] inline-block px-4 py-1 rounded-full mb-6 tracking-widest shadow-md">
                {step.desc}
              </p>
              <p className="text-[15px] text-[#002B5B] leading-relaxed font-bold opacity-90">
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* TRANSITION TO PROGRAMS */}
      <div className="flex flex-col items-center pb-24">
        <div className="w-1.5 h-32 bg-[#002B5B]/20 rounded-full mb-6"></div>
        <div className="bg-[#002B5B] p-5 rounded-full text-white shadow-2xl animate-bounce">
          <ChevronDown size={32} strokeWidth={3} />
        </div>
      </div>

      {/* PROGRAMS SECTION */}
      <section className="pb-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#002B5B] text-4xl font-black tracking-widest uppercase">OUR CORE PROGRAMS</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* BUNIYAAD */}
            <div className="bg-white p-14 rounded-[4rem] shadow-2xl border-b-8 border-[#002B5B]/10 hover:-translate-y-3 transition-transform">
              <h2 className="text-5xl font-black text-[#002B5B] mb-1">BUNIYAAD</h2>
              <p className="text-[11px] font-bold text-gray-400 tracking-[0.4em] mb-10 uppercase">Learning Centre Program</p>
              <ul className="space-y-6">
                {[
                  "Bridge education program specifically for children who are unable to attend formal schools.",
                  "Establishing safe learning spaces, libraries, and classrooms right where the children are.",
                  "Holistic development to prepare children for meaningful careers and social integration."
                ].map((li, i) => (
                  <li key={i} className="flex gap-5 text-[15px] font-bold text-gray-600 leading-snug">
                    <span className="text-[#FFD700] text-2xl">•</span> {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* MERI KITAB */}
            <div className="bg-white p-14 rounded-[4rem] shadow-2xl border-b-8 border-[#002B5B]/10 hover:-translate-y-3 transition-transform">
              <h2 className="text-5xl font-black text-[#002B5B] mb-1">MERI KITAB</h2>
              <p className="text-[11px] font-bold text-gray-400 tracking-[0.4em] mb-10 uppercase">Community Learning Program</p>
              <ul className="space-y-6">
                {[
                  "Bringing education to the heart of communities through interactive readings and theatre.",
                  "Working closely with parents to build a supportive home environment for learning.",
                  "Empowering the entire community to take ownership of their children's educational journey."
                ].map((li, i) => (
                  <li key={i} className="flex gap-5 text-[15px] font-bold text-gray-600 leading-snug">
                    <span className="text-[#FFD700] text-2xl">•</span> {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#002B5B] py-20 text-center">
        <p className="text-white/20 text-[11px] font-black tracking-[1em] uppercase">HHK INDIA • 2026</p>
      </footer>
    </div>
  );
};

export default App;