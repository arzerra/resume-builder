import React from "react";

function ResumePreview({ data }) {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          transform origin-top
          scale-100 sm:scale-100
          w-[330px] h-[842px]
          sm:w-[595px] sm:h-[842px] 
          bg-white p-10 
          shadow-md rounded-xl
          font-serif  overflow-hidden
        "

      >
        {/* PERSONAL */}
        <h1 className="text-md sm:text-[18px] font-bold mb-2 text-center border-b-1 border-gray-300">
          {data.personal.name}
        </h1>
        <p className="text-center">  {[data.personal.phone, data.personal.email, data.personal.location]
        .filter(Boolean)
        .join(" • ")}</p>


        {/* EDUCATION */}
        <h2 className="text-sm sm:text-xl font-semibold mb-1 border-b-1 border-gray-300 mt-4">Education</h2>
        <div className="flex flex-row justify-between items-start">
          <div className="text-start">
            <p className="text-xl mb-1">
              {data.education.school}
            </p>
            <p className="mb-1">
              {data.education.course}
            </p>
          </div>
          <div className="text-end">
            <p className="text-xl mb-1">
              {data.education.year}
            </p>
          </div>
        </div>



        {/* EXPERIENCE */}
        <h2 className="text-sm sm:text-xl font-semibold mb-1 border-b-1 border-gray-300 mt-4">Experience</h2>
        <p className="mb-4">
          {data.experience}
        </p>

        {/* SKILLS */}
        <h2 className="text-sm sm:text-xl font-semibold mb-1 border-b-1 border-gray-300 mt-4">Skills</h2>
        <p className="mb-4">
          {data.skills}
        </p>

        {/* PROJECTS */}
        <h2 className="text-sm sm:text-xl font-semibold mb-1 border-b-1 border-gray-300 mt-4">Projects</h2>
        <p>{data.projects}</p>
      </div>
    </div>
  );
}

export default ResumePreview;
