import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./components/ResumePdf.jsx";
import Darkmode from "./components/Darkmode.jsx";
import ResumePreview from "./components/ResumePreview";
import { FaFacebook, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";

function App() {
  const [activeTab, setActiveTab] = useState("personal");
  const [showModal, setShowModal] = useState(false); // modal state

  // Store form data
  const [formData, setFormData] = useState({
    personal: { name: "", email: "", phone: "", location: "" },
    education: {school: "", course: "", year: "" },
    experience:"",
    skills: "",
    projects: "",
  });

  const tabs = [
    { id: "personal", label: "Personal" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  // Handle text input changes
  const handleChange = (section, field, value) => {
    if (section === "personal" || section === "education") {
      setFormData({
        ...formData,
        [section]: { ...formData[section], [field]: value },
      });
    } else {
      setFormData({ ...formData, [section]: value });
    }
  };
  
  return (
    <>
      <div className="w-full min-h-screen bg-[#E4E4E4] dark:bg-[#222831]">
        {/* Dark mode toggle */}
        <div className="flex items-center justify-end p-4">
          <Darkmode />
        </div>

        <div className="max-w-[1300px] w-full mx-auto px-4 sm:px-0">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-2 dark:text-white">
              Resume Builder
            </h1>
            <p className="text-sm sm:text-xl dark:text-gray-300 mb-6">
              Create. Customize. Land the job.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              {/* TAB BAR */}
              <div className="flex gap-4 sm:gap-6 border-b-2 border-gray-300 dark:border-gray-600 mb-6 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap pb-2 text-base sm:text-lg font-medium transition-colors ${
                      activeTab === tab.id
                        ? "text-gray-900 border-b-2 border-gray-600 dark:text-white"
                        : "text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* PERSONAL */}
              <div className="bg-[#F7F7F7] dark:bg-[#393E46] p-6 rounded-lg shadow-md">
                {activeTab === "personal" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">
                      Personal Information
                    </h2>
                    <p className="mt-2 dark:text-gray-200">Full Name:</p>
                    <input
                      type="text"
                      value={formData.personal.name}
                      onChange={(e) =>
                        handleChange("personal", "name", e.target.value)
                      }
                      className="w-full p-2 rounded"
                    />
                    <p className="mt-2 dark:text-gray-200">Phone:</p>
                    <input
                      type="tel"
                      maxLength={11}
                      value={formData.personal.phone}
                      onChange={(e) =>
                        handleChange("personal", "phone", e.target.value)
                      }
                      className="w-full p-2 rounded"
                    />
                    <p className="mt-2 dark:text-gray-200">Email Address:</p>
                    <input
                      type="email"
                      value={formData.personal.email}
                      onChange={(e) =>
                        handleChange("personal", "email", e.target.value)
                      }
                      className="w-full p-2 rounded"
                    />
                    <p className="mt-2 dark:text-gray-200">Location:</p>
                    <input
                      type="text"
                      value={formData.personal.location}
                      onChange={(e) =>
                        handleChange("personal", "location", e.target.value)
                      }
                      className="w-full p-2 rounded"
                    />
                  </div>
                )}

                {/* EDUCATION */}
                {activeTab === "education" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">Education</h2>
                    <p className="mt-2 dark:text-gray-200">School:</p>
                    <input
                      type="text"
                      value={formData.education.school}
                      onChange={(e) =>
                        handleChange("education", "school", e.target.value)
                      }
                      className="w-full p-2 rounded"
                    />
                    <p className="mt-2 dark:text-gray-200">Course:</p>
                    <input
                      type="text"
                      value={formData.education.course}
                      onChange={(e) =>
                        handleChange("education", "course", e.target.value)
                      }
                      className="w-full p-2 rounded"
                    />
                    <p className="mt-2 dark:text-gray-200">Year:</p>
                    <input
                      type="text"
                      value={formData.education.year}
                      onChange={(e) =>
                        handleChange("education", "year", e.target.value)
                      }
                      className="w-full p-2 rounded"
                    />
                  </div>
                )}


                {/* EXPERIENCE */}
                {activeTab === "experience" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">
                      Experience
                    </h2>
                    <textarea
                      value={formData.experience}
                      onChange={(e) =>
                        handleChange("experience", null, e.target.value)
                      }
                      className="w-full p-2 rounded"
                      rows="4"
                    />
                  </div>
                )}


                {/* SKILLS */}
                {activeTab === "skills" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">
                      Skills
                    </h2>
                    <textarea
                      value={formData.skills}
                      onChange={(e) =>
                        handleChange("skills", null, e.target.value)
                      }
                      className="w-full p-2 rounded"
                      rows="3"
                    />
                  </div>
                )}


                {/* PROJECTS */}
                {activeTab === "projects" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">
                      Projects
                    </h2>
                    <textarea
                      value={formData.projects}
                      onChange={(e) =>
                        handleChange("projects", null, e.target.value)
                      }
                      className="w-full p-2 rounded"
                      rows="3"
                    />
                  </div>
                )}
              </div>
            </div>



            {/* Right Panel */}
            <div className="flex flex-col items-center justify-center p-4">
              {/* Scrollable preview container */}
              <div className="flex justify-center w-full max-h-[550px] overflow-y-auto rounded-md bg-gray-50">
                <ResumePreview data={formData} />
              </div>

              {/* Button to open modal */}
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-3 mt-4 bg-blue-600 text-white rounded-md shadow-md"
              >
                Preview & Download
              </button>
            </div>

          </div>
          
          {/* FOOTER */}
          <div className="flex flex-col items-center justify-center py-5 dark:text-white">
              <h1>&copy; Ian Clark L. Cañete 2025 - All Rights Reserved</h1>
              <div className="flex flex-row gap-2 mt-2 sm:mt-2">
                <a href="https://www.facebook.com/Ic.0716" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-lg cursor-pointer" />
                </a>
                <a href="https://github.com/arzerra" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-lg cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/ianclarkcanete/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-lg cursor-pointer" />
                </a>
              </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/30 border backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >

          <div
            className="max-w-[595px] w-full relative border"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <div className="overflow-auto flex justify-center">
              <ResumePreview data={formData} />
            </div>

            {/* Confirm Download */}
            <PDFDownloadLink
              document={<ResumePDF data={formData} />}
              fileName="resume.pdf"
            >
              {({ loading }) =>
                loading ? (
                  <button
                    disabled
                    className="px-6 py-3 bg-gray-400 text-white rounded-md"
                  >
                    Preparing PDF...
                  </button>
                ) : (
                  <button className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md z-50">
                    Confirm & Download
                  </button>
                )
              }
            </PDFDownloadLink>
          </div>
        </div>
      )}

    </>
  );
}

export default App;
