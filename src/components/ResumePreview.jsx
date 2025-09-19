import React from "react";

function ResumePreview({ data }) {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          transform origin-top
          scale-100 sm:scale-100
          w-full h-[631.5px]
          sm:w-[595px] sm:h-[842px] 
          bg-white p-10 
          dark:bg-[#393E46]
          dark:text-white
          shadow-md rounded-xl
          overflow-y-auto 
          scrollbar-hide
        "
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >

        {/* PERSONAL */}
        <h1 className="text-[20px] sm:text-[24px] font-bold mb-1 text-center border-b border-gray-300 ">
          {data.personal.name || "Your Name"}
        </h1>
        <p className="text-center text-[10px] sm:text-[12px] mb-4 text-[#444] dark:text-white">
          {[data.personal.phone, data.personal.email, data.personal.location]
            .filter(Boolean)
            .join(" • ")}
        </p>

        {/* EDUCATION */}
        <h2 className="text-[14px] sm:text-[16px] font-bold mb-1 border-b border-gray-300 mt-4">
          Education
        </h2>
        {data.education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-start mb-2"
          >
            <div className="text-start">
              <p className="text-[12px] sm:text-[14px] font-semibold">{edu.school}</p>
              <p className="text-[11px] sm:text-[13px] mb-1">{edu.course}</p>
            </div>
            <div className="text-end">
              <p className="text-[11px] sm:text-[13px]">{edu.year}</p>
            </div>
          </div>
        ))}

        {/* EXPERIENCE */}
        <h2 className="text-[14px] sm:text-[16px] font-bold mb-1 border-b border-gray-300 mt-4">
          Experience
        </h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-3">
            <div className="flex flex-row justify-between items-start">
              <div>
                <p className="text-[12px] sm:text-[14px] font-semibold">{exp.company}</p>
                <p className="text-[11px] sm:text-[13px] italic">{exp.role}</p>
              </div>
              <p className="text-[11px] sm:text-[13px]">{exp.year}</p>
            </div>
            {exp.description && (
              <p className="text-[10px] sm:text-[12px] text-gray-700 mt-1 text-justify break-words whitespace-normal max-w-full dark:text-white">
              {exp.description}
              </p>
            )}
          </div>
        ))}

        {/* SKILLS */}
        <h2 className="text-[14px] sm:text-[16px] font-bold mb-1 border-b border-gray-300 mt-4">
          Skills
        </h2>
        <div className="mb-4 text-justify">
          {data.skills.length > 0 && (
            <p className="text-[11px] sm:text-[13px]">
              {data.skills.join(", ")}
            </p>
          )}
        </div>

        {/* PROJECTS */}
        <h2 className="text-[14px] sm:text-[16px] font-bold mb-1 border-b border-gray-300 mt-4">
          Projects
        </h2>
        {data.projects && data.projects.length > 0 ? (
          data.projects.map((proj, index) => (
            <div key={index} className="mb-3">
              <div className="flex flex-row justify-between items-start">
                <div>
                  <p className="text-[12px] sm:text-[14px] font-semibold">{proj.name}</p>
                </div>

                <div className="text-end text-[12px] text-gray-600 break-words whitespace-normal max-w-[200px] dark:text-white">
                  {proj.tags && proj.tags.length > 0 ? proj.tags.join(", ") : ""}
                </div>
              </div>

              {proj.description && (
                <p className="text-[10px] sm:text-[12px] text-gray-700 mt-1 text-justify break-words whitespace-normal max-w-full dark:text-white">
                  {proj.description}
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-[11px] sm:text-[13px] text-gray-500">No projects added</p>
        )}

         {/* CERTIFICATES */}
        <h2 className="text-[14px] sm:text-[16px] font-bold mb-1 border-b border-gray-300 mt-4">
          Certificates
        </h2>
        {data.certificates && data.certificates.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 mt-2">
            {data.certificates.map((cert, index) => (
              <div key={index} className="mb-3">
                <div className="flex flex-row justify-between items-start">
                  <div>
                    <p className="text-[12px] sm:text-[14px] font-semibold">{cert.name}</p>
                    <p className="text-[11px] sm:text-[13px] italic">{cert.issuer}</p>
                  </div>
                  <p className="text-[11px] sm:text-[13px]">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[11px] sm:text-[13px] text-gray-500">No certificates added</p>
        )}

      </div>
    </div>
  );
}

export default ResumePreview;
