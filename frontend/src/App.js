import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  BookOpen, 
  ChevronRight, 
  ChevronLeft, 
  Users, 
  GraduationCap, 
  Heart,
  ArrowUpRight
} from 'lucide-react';

// Assets - Local image locations
import journeyImg1 from './web_media/prf_1.jpeg'; 
import journeyImg2 from './web_media/prf_2.jpeg';
import journeyImg3 from './web_media/prf_3.jpeg';
import journeyImg4 from './web_media/prf_4.jpeg'; 
import journeyImg5 from './web_media/prf_5.jpeg';

// Stories section images
import storyImg1 from './web_media/img_1.jpeg';
import storyImg2 from './web_media/img_2.jpeg';
import storyImg3 from './web_media/img_3.jpeg';
import storyImg4 from './web_media/img_4.jpeg'; 
import storyImg5 from './web_media/img_5.jpeg';

import profile_img1 from './web_media/img_1.jpeg';
import profile_img2 from './web_media/img_2.jpeg';
import profile_img3 from './web_media/img_3.jpeg';
import profile_img4 from './web_media/img_4.jpeg'; 

const Navbar = () => {
  const navLinks = ['Home', 'About Us', 'Our Programs', 'Stories of Change', 'Get Involved', 'Contact'];
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#002B5B] text-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-[#002B5B]">HK</div>
          <span className="font-bold text-sm hidden md:block">Har Hath Kalam</span>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((name) => (
            <a key={name} href="#" className="text-[11px] font-bold uppercase tracking-wider hover:text-[#FFB800] transition-colors">
              {name}
            </a>
          ))}
        </div>
        <button className="bg-[#FFB800] text-[#002B5B] px-6 py-2 rounded-lg font-black text-xs uppercase hover:bg-white transition-all">
          Donate Now
        </button>
      </div>
    </nav>
  );
};

/* 🔥 DYNAMIC JOURNEY COMPONENT */
const DynamicJourney = ({ roadmap }) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [pathD, setPathD] = useState("");

  useEffect(() => {
    const updatePath = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const points = itemRefs.current.map(el => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - rect.left,
          y: r.top + r.height / 2 - rect.top
        };
      }).filter(Boolean);

      if (points.length < 2) return;
      let d = `M ${points[0].x},${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const midX = (prev.x + curr.x) / 2;
        d += ` C ${midX},${prev.y} ${midX},${curr.y} ${curr.x},${curr.y}`;
      }
      setPathD(d);
    };

    setTimeout(updatePath, 200);
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [roadmap]);

  return (
    <div ref={containerRef} className="relative min-h-[600px] mt-8">
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <path
          d={pathD}
          stroke="#1409f1"
          strokeWidth="10"
          strokeDasharray="10 15"
          strokeLinecap="round"
          fill="none"
          className="opacity-40 animate-dash"
        />
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
        {roadmap.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col items-center text-center transition-all duration-700
            ${index % 2 === 0 ? 'md:-translate-y-4' : 'md:translate-y-40'}`}
          >
            <div
              ref={(el) => (itemRefs.current[index] = el)}
              className="relative w-32 h-32 bg-white border-4 border-[#FFB800] rounded-full overflow-hidden mb-6 shadow-2xl animate-pulse-slow group cursor-pointer hover:scale-110 transition-all"
            >
              <img 
                src={step.img} 
                alt={step.title} 
                className="w-full h-full object-cover transition-all duration-500" 
              />
              <div className="absolute -top-1 -right-1 w-9 h-9 bg-[#002B5B] text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg z-20">
                {step.id}
              </div>
            </div>

            <div className="max-w-[220px] bg-white border-2 border-[#002B5B]/10 p-5 rounded-3xl shadow-xl transform transition-transform hover:-translate-y-1">
              <h4 className="font-black text-[14px] uppercase mb-2 text-[#002B5B] tracking-wide border-b border-[#FFB800] pb-1 inline-block">
                {step.title}
              </h4>
              <p className="text-[13px] font-bold text-[#002B5B] leading-relaxed text-center">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoData = [
    { id: "Y6aC43IODlg", thumb: "https://i.ytimg.com/vi/Y6aC43IODlg/maxresdefault.jpg" },
    { id: "tEE_okAj26A", thumb: "https://i.ytimg.com/vi/tEE_okAj26A/maxresdefault.jpg" },
    { id: "fnP4417_Txo", thumb: "https://i.ytimg.com/vi/fnP4417_Txo/maxresdefault.jpg" },
    { id: "vviwUI3jiq4", thumb: "https://i.ytimg.com/vi/vviwUI3jiq4/maxresdefault.jpg" },
    { id: "uyb5FKGkV7A", thumb: "https://i.ytimg.com/vi/uyb5FKGkV7A/maxresdefault.jpg" }
  ];

  useEffect(() => {
    let interval;
    if (!isPlaying) {
      interval = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videoData.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, videoData.length]);

  const nextVideo = () => {
    setIsPlaying(false);
    setCurrentVideo((prev) => (prev + 1) % videoData.length);
  };

  const prevVideo = () => {
    setIsPlaying(false);
    setCurrentVideo((prev) => (prev - 1 + videoData.length) % videoData.length);
  };

  const roadmap = [
    { id: 1, title: "Found on the Streets", desc: "Children growing up without access to safety, education, or identity.", img: journeyImg1 },
    { id: 2, title: "Building Trust", desc: "We met children in underserved communities and built strong foundations of trust.", img: journeyImg2 },
    { id: 3, title: "Safe Learning Spaces", desc: "Through Buniyaad, children found permanent spaces to learn and belong.", img: journeyImg3 },
    { id: 4, title: "Growth & Confidence", desc: "Children began reading, writing, and dreaming bigger.", img: journeyImg4 },
    { id: 5, title: "Future Leaders", desc: "From learners to leaders—shaping a better future.", img: journeyImg5 },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF0] text-[#002B5B] overflow-x-hidden selection:bg-[#FFB800] selection:text-[#002B5B]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@800&family=Outfit:wght@400;600;800&display=swap');
        @keyframes dashMove { to { stroke-dashoffset: -1000; } }
        .animate-dash { animation: dashMove 40s linear infinite; }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulseSlow 5s ease-in-out infinite; }
      `}</style>

      <Navbar />

      {/* HERO VIDEO SLIDER SECTION */}
      <section className="w-full px-4 pt-28 pb-12 bg-transparent overflow-visible">
        <div className="max-w-6xl mx-auto relative flex items-center justify-center">
          <button onClick={prevVideo} className="hidden md:flex absolute -left-9 lg:-left-11 z-30 bg-[#002B5B] hover:bg-[#FFB800] text-white hover:text-[#002B5B] w-14 h-14 items-center justify-center rounded-full transition-all shadow-xl">
            <ChevronLeft size={30} />
          </button>
          <div className="w-full max-w-5xl relative group overflow-hidden rounded-[2.5rem] shadow-2xl bg-black aspect-video md:h-[450px]">
            <div className="flex transition-transform duration-1000 ease-in-out h-full" style={{ transform: `translateX(-${currentVideo * 100}%)` }}>
              {videoData.map((video, index) => (
                <div key={index} className="min-w-full h-full relative">
                  {!isPlaying || currentVideo !== index ? (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
                      <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-60 group-hover:opacity-80 scale-105 group-hover:scale-100" style={{ backgroundImage: `url('${video.thumb}')` }}></div>
                      <div className="relative z-20 flex flex-col items-center gap-4">
                        <div className="w-20 h-20 bg-[#002B5B] text-[#FFB800] rounded-full flex items-center justify-center border-4 border-[#FFB800] transform hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,184,0,0.4)]">
                          <Play size={32} className="ml-1" fill="currentColor" />
                        </div>
                        <p className="font-extrabold tracking-[0.4em] text-white uppercase text-[10px]">Play Story {index + 1}</p>
                      </div>
                    </div>
                  ) : (
                    <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${video.id}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
                  )}
                </div>
              ))}
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
              {videoData.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${currentVideo === i ? 'w-8 bg-[#FFB800]' : 'w-2 bg-white/50'}`} />
              ))}
            </div>
          </div>
          <button onClick={nextVideo} className="hidden md:flex absolute -right-10 lg:-right-12 z-30 bg-[#002B5B] hover:bg-[#FFB800] text-white hover:text-[#002B5B] w-14 h-14 items-center justify-center rounded-full transition-all shadow-xl">
            <ChevronRight size={30} />
          </button>
        </div>
      </section>

      {/* STORIES OF CHANGE SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 text-left space-y-6">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight text-[#002B5B]" style={{ fontFamily: "'Lexend', sans-serif" }}>
              STORIES OF <br/>
              <span className="text-[#FFB800]">CHANGE</span>
            </h2>
            <p className="text-lg font-bold uppercase tracking-[0.3em] text-[#002B5B] opacity-80">From The Communities</p>
            <p className="font-bold text-base md:text-lg leading-relaxed text-[#002B5B]">
              Children once left behind are now <span className="bg-[#FFB800]/20 px-1">educators, creators, and changemakers</span>—building identities and futures of their own.
            </p>
            <button className="bg-[#002B5B] text-white px-8 py-3 rounded-full font-bold uppercase text-xs hover:bg-[#FFB800] hover:text-[#002B5B] transition-all shadow-md">
              Explore More Stories
            </button>
          </div>
          <div className="lg:w-2/3 w-full relative h-[500px] md:h-[600px] mt-10 lg:mt-0">
            {[storyImg1, storyImg2, storyImg3, storyImg4, storyImg5].map((img, idx) => {
              const styles = ["top-0 left-0 w-1/2 h-56 -rotate-6", "top-10 right-0 w-1/2 h-64 rotate-3", "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-48 rotate-12 border-[#FFB800] border-2 z-40", "bottom-0 left-10 w-1/2 h-52 rotate-2", "bottom-10 right-10 w-2/5 h-44 -rotate-12"];
              return (
                <div key={idx} className={`absolute ${styles[idx]} shadow-2xl hover:rotate-0 hover:scale-105 transition-all duration-500 bg-white p-2 overflow-hidden`}>
                   <img src={img} alt="Story" className="w-full h-full object-cover" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* IMPACT ROADMAP SECTION (Updated Heading) */}
      <section className="pt-20 pb-5 px-6 relative max-w-7xl mx-auto bg-gradient-to-b from-white/40 to-transparent rounded-[4rem] mt-6 mb-0 border border-white/50">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#FFB800]"></div>
              <span className="text-[#002B5B] font-black text-sm tracking-[0.3em] uppercase">Impact Roadmap</span>
              <div className="h-[2px] w-12 bg-[#FFB800]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#002B5B] mb-6 leading-tight uppercase" style={{ fontFamily: "'Lexend', sans-serif" }}>
            FROM THE STREETS <br/> TO <span className="text-[#FFB800]">SELF-BELIEF</span>
          </h2>
          <div className="space-y-4">
            <p className="text-base md:text-lg font-bold text-[#002B5B]/80 leading-relaxed">
              India's slum population is larger than the entire population of Bhutan. In Punjab alone, lakhs of people live in informal settlements across cities like Ludhiana, Amritsar, Jalandhar and Bathinda.
            </p>
            <p className="text-lg md:text-xl font-black text-[#002B5B] italic">
              Behind these numbers are children growing up without safe access to education, identity, or opportunity. <span className="text-[#FFB800] not-italic">Har Hath Kalam exists to change that.</span>
            </p>
          </div>
        </div>
        <DynamicJourney roadmap={roadmap} />
      </section>

      {/* VOICES OF IMPACT */}
      <section className="pt-3 pb-16 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#002B5B] text-center mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
              VOICES OF <span className="text-[#FFB800]">IMPACT</span>
            </h2>
            <div className="flex items-center gap-2">
              <div className="h-[3px] w-8 bg-[#FFB800] rounded-full"></div>
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#002B5B]">Real Stories, Real Change</p>
              <div className="h-[3px] w-8 bg-[#FFB800] rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-24 gap-x-8">
            {[
              { name: "Nargis", role: "Educator Intern", tag: "MERI KITAB", theme: "dark", desc: "Once unable to identify alphabets, Nargis now writes her own stories and teaches girls in her community. She transformed from a learner into a role model.", quote: "From learner to storyteller.", img: profile_img1 },
              { name: "Tania", role: "Educator Intern", tag: "BUNIYAAD", theme: "dark", desc: "Tania once studied in the same learning spaces she now returns to as a mentor. Today, she inspires girls to continue learning despite barriers.", quote: "From student to mentor.", img: profile_img2 },
              { name: "Payal", role: "Community Leader", tag: "MERI KITAB", theme: "dark", desc: "Payal chose education in a space where girls were often expected to stay limited. Today she supports younger girls in pursuing learning with confidence.", quote: "From limitation to leadership.", img: profile_img3 },
              { name: "Reehan", role: "Digital Media", tag: "DIGITAL MEDIA", theme: "dark", desc: "Reehan discovered confidence through storytelling and photography. Today he documents community stories and dreams of building a career in media.", quote: "From curiosity to creativity.", img: profile_img4 }
            ].map((story, i) => (
              <div key={i} className={`group relative rounded-[2rem] pt-20 pb-10 px-8 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${story.theme === 'dark' ? 'bg-[#002B5B] text-white' : 'bg-[#F8F9FA] text-[#002B5B]'}`}>
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28">
                  <div className={`relative w-full h-full rounded-3xl overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl border-4 ${story.theme === 'dark' ? 'border-[#FFB800]' : 'border-white'}`}>
                    <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="mb-4">
                  <span className={`px-4 py-1 rounded-lg text-[9px] font-black tracking-widest uppercase ${story.theme === 'dark' ? 'bg-[#FFB800] text-[#002B5B]' : 'bg-[#002B5B] text-white'}`}>{story.tag}</span>
                </div>
                <h3 className={`text-2xl font-black leading-tight mb-1 ${story.theme === 'dark' ? 'text-[#FFB800]' : 'text-[#002B5B]'}`}>{story.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-60">{story.role}</p>
                <p className="text-[13px] font-extrabold leading-relaxed mb-6 px-2 italic">{story.desc}</p>
                <div className="relative">
                   <span className={`absolute -top-4 -left-2 text-4xl font-serif opacity-30 ${story.theme === 'dark' ? 'text-white' : 'text-[#FFB800]'}`}>“</span>
                   <p className="text-[15px] font-black leading-relaxed relative z-10">{story.quote}</p>
                   <span className={`absolute -bottom-6 -right-2 text-4xl font-serif opacity-30 ${story.theme === 'dark' ? 'text-white' : 'text-[#FFB800]'}`}>”</span>
                </div>
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1.5 rounded-t-full transition-all duration-500 ${story.theme === 'dark' ? 'bg-[#FFB800]' : 'bg-[#002B5B]'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MORE STORIES FROM COMMUNITIES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#FFB800]"></div>
            <span className="text-[#002B5B] font-black text-sm tracking-[0.3em] uppercase">Community Insights</span>
            <div className="h-[2px] w-12 bg-[#FFB800]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#002B5B] text-center" style={{ fontFamily: "'Lexend', sans-serif" }}>
            MORE STORIES FROM <span className="text-[#FFB800]">COMMUNITIES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Little Story of Change", desc: "A young girl quietly entered a learning room carrying her own notebook and began copying lessons from the board. Curiosity became confidence.", img: storyImg1 },
            { title: "Bangles on the Wrist, Freedom at Fingertips", desc: "When girls learn, they move forward with confidence. Education opens doors, creates choices and brings freedom.", img: storyImg2 },
            { title: "Story of Prajapat Community", desc: "What began with three girls attending Meri Kitab sessions grew into many children choosing joyful learning spaces within their own community.", img: storyImg3 }
          ].map((story, index) => (
            <div key={index} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-[#002B5B]/5">
              <div className="h-56 overflow-hidden relative">
                <img src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-[#002B5B] mb-4 leading-tight">{story.title}</h3>
                <p className="text-[#002B5B] text-[15px] font-bold leading-relaxed mb-6">{story.desc}</p>
                <button className="flex items-center gap-2 text-[#002B5B] font-black text-[10px] uppercase tracking-widest group/btn">
                  Read Full Story 
                  <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  <div className="h-[2px] w-8 bg-[#FFB800]"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPACT IMPACT STATS */}
      <section className="bg-[#002B5B] py-12 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            <div className="flex-1 flex flex-col items-center text-center group">
              <div className="mb-3 text-[#FFB800] opacity-80"><Users size={24} strokeWidth={1.5} /></div>
              <h3 className="text-5xl font-light tracking-tight text-[#FFB800] mb-1" style={{ fontFamily: "'Lexend', sans-serif" }}>1000<span className="text-2xl ml-0.5 font-normal">+</span></h3>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60">Children Reached</p>
            </div>
            <div className="hidden md:block h-16 border-l-2 border-dotted border-[#FFB800]/40"></div>
            <div className="md:hidden w-24 border-t-2 border-dotted border-[#FFB800]/40"></div>
            <div className="flex-1 flex flex-col items-center text-center group">
              <div className="mb-3 text-[#FFB800] opacity-80"><GraduationCap size={24} strokeWidth={1.5} /></div>
              <h3 className="text-5xl font-light tracking-tight text-[#FFB800] mb-1" style={{ fontFamily: "'Lexend', sans-serif" }}>02</h3>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60">Core Programs</p>
            </div>
            <div className="hidden md:block h-16 border-l-2 border-dotted border-[#FFB800]/40"></div>
            <div className="md:hidden w-24 border-t-2 border-dotted border-[#FFB800]/40"></div>
            <div className="flex-1 flex flex-col items-center text-center group">
              <div className="mb-3 text-[#FFB800] opacity-80"><Heart size={24} strokeWidth={1.5} /></div>
              <h3 className="text-5xl font-light tracking-tight text-[#FFB800] mb-1" style={{ fontFamily: "'Lexend', sans-serif" }}>∞</h3>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60">Stories of Hope</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center bg-[#FFFDF0]">
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <button className="bg-[#FFB800] text-[#002B5B] px-10 py-4 rounded-full font-black uppercase text-xs hover:bg-[#002B5B] hover:text-white transition-all shadow-lg border-2 border-[#FFB800]">Visit Our Programs</button>
            <button className="bg-[#002B5B] text-white px-10 py-4 rounded-full font-black uppercase text-xs hover:bg-[#FFB800] hover:text-[#002B5B] transition-all shadow-lg border-2 border-[#002B5B]">Read More Stories</button>
          </div>
          <p className="text-[10px] font-bold opacity-30 uppercase tracking-[1.5em]">The Journey Continues</p>
      </footer>
    </div>
  );
};

export default App;