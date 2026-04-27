import React, { useEffect, useState } from 'react';

const ProgramSection = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/programs')
      .then(res => res.json())
      .then(data => setPrograms(data));
  }, []);

  return (
    <div className="bg-[#FFD700] p-8 rounded-xl mx-4 my-8">
      <div className="bg-[#002B5B] text-white py-2 px-6 rounded-full w-fit mx-auto mb-8 font-bold tracking-widest text-sm">
        TOWARDS OUR PROGRAMS
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {programs.map((p) => (
          <div key={p.id} className="bg-white p-6 rounded-2xl border-2 border-dashed border-[#002B5B]/30 shadow-sm">
            <h2 className="text-2xl font-black text-[#002B5B]">{p.title}</h2>
            <span className="inline-block bg-[#FFD700] text-[10px] font-bold px-2 py-1 rounded mb-4">
              {p.subtitle}
            </span>
            <p className="text-sm font-medium mb-4">{p.description}</p>
            <ul className="text-[12px] space-y-2 list-disc pl-4 text-gray-700">
              {p.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramSection;