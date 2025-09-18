// src/components/ResumePreview.jsx
import React from "react";

function ResumePreview({ data }) {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          w-[330px] sm:w-[595px] h-[842px] 
          bg-white p-10 shadow-md rounded-md 
          leading-relaxed
        "
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        {/* PERSONAL */}
        <h1 className="text-[24px] font-bold text-center border-b border-gray-300 pb-1 mb-2">
          {data.personal.name || "Your Name"}
        </h1>
        <p className="text-[12px] text-center text-gray-600 mb-4">
          {[data.personal.phone, data.personal.email, data.personal.location]
            .filter(Boolean)
            .join(" • ")}
        </p>

        {/* EDUCATION */}
        <h2 className="text-[16px] font-bold border-b border-gray-300 pb-1 mb-2">
          Education
        </h2>
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-[14px] font-semibold">{data.education.school}</p>
            <p className="text-[13px]">{data.education.course}</p>
          </div>
          <p className="text-[13px]">{data.education.year}</p>
        </div>

        {/* EXPERIENCE */}
        <h2 className="text-[16px] font-bold border-b border-gray-300 pb-1 mb-2">
          Experience
        </h2>
        <p className="text-[13px] mb-3">{data.experience}</p>

        {/* SKILLS */}
        <h2 className="text-[16px] font-bold border-b border-gray-300 pb-1 mb-2">
          Skills
        </h2>
        <p className="text-[13px] mb-3">{data.skills}</p>

        {/* PROJECTS */}
        <h2 className="text-[16px] font-bold border-b border-gray-300 pb-1 mb-2">
          Projects
        </h2>
        <p className="text-[13px]">{data.projects}</p>
      </div>
    </div>
  );
}

export default ResumePreview;
