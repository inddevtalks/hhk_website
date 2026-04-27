import React from 'react';

const steps = [
  { id: 1, title: "THE PROBLEM", desc: "Kids on Streets", detail: "Thousands of children live and work on the streets." },
  { id: 2, title: "IDENTIFYING", desc: "The Children", detail: "We meet children on the streets who often have no identity." },
  { id: 3, title: "ENROLLING", desc: "In Schools", detail: "We try to enroll them in schools for a better future." },
  { id: 4, title: "BARRIERS", desc: "They Face", detail: "Schools often judge them for their clothes or lifestyle." },
  { id: 5, title: "PATHWAYS", desc: "Our Own", detail: "We created our own programs to walk beside them." },
];

const Roadmap = () => {
  return (
    <div className="py-12 px-6 bg-white">
      <h1 className="text-4xl font-black text-center text-[#002B5B] mb-2">HAR HATH KALAM JOURNEY</h1>
      <p className="text-center italic mb-12">— From Streets to Stories of Change —</p>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center text-center relative z-10">
            <div className="w-12 h-12 bg-[#002B5B] text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg">
              {step.id}
            </div>
            <h3 className="font-bold text-sm text-[#002B5B]">{step.title}</h3>
            <p className="text-xs font-semibold mb-4">{step.desc}</p>
            <p className="text-[11px] leading-tight text-gray-600 px-2">{step.detail}</p>
            
            {/* Dashed Line Connector (Desktop) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-[60%] w-full border-t-2 border-dashed border-[#002B5B] -z-10 opacity-30" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;