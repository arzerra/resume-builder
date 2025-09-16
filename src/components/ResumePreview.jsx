import React from "react";

function ResumePreview({ data }) {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          transform origin-top
          scale-100 sm:scale-100
          w-[330px] h-[842px]
          sm:w-[695px] sm:h-[842px] 
          bg-white p-10 
          shadow-md rounded-xl
          font-sans overflow-hidden
        "

      >
        <h1 className="text-md sm:text-2xl font-bold mb-2">
          {data.personal.name || "Your Name"}
        </h1>
        <p>{data.personal.email || "your@email.com"}</p>
        <p>{data.personal.phone || "123-456-7890"}</p>

        <hr className="my-5 border-gray-300" />

        <h2 className="text-sm sm:text-xl font-semibold mb-1">Experience</h2>
        <p className="mb-4">
          {data.experience || "Your experience will appear here..."}
        </p>

        <h2 className="text-sm sm:text-xl font-semibold mb-1">Education</h2>
        <p className="mb-4">
          {data.education || "Your education details..."}
        </p>

        <h2 className="text-sm sm:text-xl font-semibold mb-1">Skills</h2>
        <p className="mb-4">
          {data.skills || "List your skills here..."}
        </p>

        <h2 className="text-sm sm:text-xl font-semibold mb-1">Projects</h2>
        <p>{data.projects || "Showcase your projects here..."}</p>
      </div>
    </div>
  );
}

export default ResumePreview;
