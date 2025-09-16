import React, { useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ResumePDF from "./components/ResumePdf.jsx";
import Darkmode from "./components/Darkmode.jsx";
import ResumePreview from "./components/ResumePreview";


function App() {
  const [activeTab, setActiveTab] = useState("personal");

  // Store form data
  const [formData, setFormData] = useState({
    personal: { name: "", email: "", phone: "" },
    experience: "",
    education: "",
    skills: "",
    projects: ""
  });

  const tabs = [
    { id: "personal", label: "Personal" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" }
  ];

  // Handle text input changes
  const handleChange = (section, field, value) => {
    if (section === "personal") {
      setFormData({
        ...formData,
        personal: { ...formData.personal, [field]: value }
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

        <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-6">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-2 dark:text-white">
              Resume Builder <span className="text-lg sm:text-2xl">by Clark</span>
            </h1>
            <p className="text-sm sm:text-base dark:text-gray-300 mb-6">
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

              <div className="bg-[#F7F7F7] dark:bg-[#393E46] p-6 rounded-lg shadow-md">
                {activeTab === "personal" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">Personal Information</h2>
                    <p className="mt-2 dark:text-gray-200">Full Name:</p>
                    <input
                      type="text"
                      value={formData.personal.name}
                      onChange={(e) => handleChange("personal", "name", e.target.value)}
                      className="w-full p-2 rounded"
                    />
                    <p className="mt-2 dark:text-gray-200">Email Address:</p>
                    <input
                      type="email"
                      value={formData.personal.email}
                      onChange={(e) => handleChange("personal", "email", e.target.value)}
                      className="w-full p-2 rounded"
                    />
                    <p className="mt-2 dark:text-gray-200">Phone:</p>
                    <input
                      type="tel"
                      value={formData.personal.phone}
                      onChange={(e) => handleChange("personal", "phone", e.target.value)}
                      className="w-full p-2 rounded"
                    />
                  </div>
                )}

                {activeTab === "experience" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">Experience</h2>
                    <textarea
                      value={formData.experience}
                      onChange={(e) => handleChange("experience", null, e.target.value)}
                      className="w-full p-2 rounded"
                      rows="4"
                    />
                  </div>
                )}

                {activeTab === "education" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">Education</h2>
                    <textarea
                      value={formData.education}
                      onChange={(e) => handleChange("education", null, e.target.value)}
                      className="w-full p-2 rounded"
                      rows="3"
                    />
                  </div>
                )}

                {activeTab === "skills" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">Skills</h2>
                    <textarea
                      value={formData.skills}
                      onChange={(e) => handleChange("skills", null, e.target.value)}
                      className="w-full p-2 rounded"
                      rows="3"
                    />
                  </div>
                )}

                {activeTab === "projects" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">Projects</h2>
                    <textarea
                      value={formData.projects}
                      onChange={(e) => handleChange("projects", null, e.target.value)}
                      className="w-full p-2 rounded"
                      rows="3"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right Panel with PDF Preview + Download */}
            <div className="border flex flex-col items-center justify-center p-4">
            <div className="overflow-auto flex justify-center">
              <ResumePreview data={formData} />
            </div>

            <PDFDownloadLink
              document={<ResumePDF data={formData} />}
              fileName="resume.pdf"
            >
              {({ loading }) =>
                loading ? (
                  "Preparing PDF..."
                ) : (
                  <button className="px-6 py-3 mt-4 bg-blue-600 text-white rounded-md shadow-md">
                    Download PDF
                  </button>
                )
              }
            </PDFDownloadLink>
          </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;
