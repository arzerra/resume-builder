import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./components/ResumePdf.jsx";
import Darkmode from "./components/Darkmode.jsx";
import ResumePreview from "./components/ResumePreview";
import { FaFacebook, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";

function App() {
  const [activeTab, setActiveTab] = useState("personal");
  const [showModal, setShowModal] = useState(false); // modal state

  const tabs = [
    { id: "personal", label: "Personal" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Project" },
    { id: "certificates", label: "Certificate" },
  ];

const [formData, setFormData] = useState({
  personal: { name: "", email: "", phone: "", location: "" },
  education: [{ school: "", course: "", year: "" }],
  experience: [{ company: "", role: "", description: "", year: "" }],
  skills: [],
  projects: [{ name: "", description: "", tags: [] }],
  certificates: [{ name: "", issuer: "", year: "" }],
});


const handleChange = (section, field, value, index = null) => {
  if (section === "personal") {
    setFormData({
      ...formData,
      personal: { ...formData.personal, [field]: value },
    });
  } else if (
    ["education", "experience", "projects", "certificates"].includes(section) &&
    index !== null
  ) {
    const updatedArray = [...formData[section]];
    updatedArray[index][field] = value;
    setFormData({ ...formData, [section]: updatedArray });
  } else {
    setFormData({ ...formData, [section]: value });
  }
};


  
  return (
    <>
      <div className="w-full min-h-screen bg-[#E4E4E4] dark:bg-[#222831]">



        <div className="max-w-[1300px] w-full mx-auto px-4 sm:px-0">
          
          <div className="flex flex-row items-center justify-between pt-5 sm:pt-10 pb-5">

            <div className="flex items-center justify-start">
            <a href="/"><img src="/logo.png" alt="Logo" className="w-20 sm:w-30 cursor-pointer"/></a>
            </div>

            <div className="flex flex-col items-center justify-center text-center mt-8">
              <h1 className="text-3xl sm:text-5xl font-bold mb-2 dark:text-white">
                Resume Builder
              </h1>
              <p className="text-sm sm:text-xl dark:text-gray-300 mb-6">
                Create. Customize. Land the job.
              </p>
            </div>

            <div className="flex items-center justify-end">
              <Darkmode />
            </div>

          </div>



          <div className="grid sm:grid-cols-2 gap-5 items-start">
            <div>
              {/* TAB BAR */}
              <div className="flex items-center justify-between gap-2 sm:gap-6 dark:border-gray-600 mb-3 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap pb-2 text-sm sm:text-lg font-medium transition-colors ${
                      activeTab === tab.id
                        ? "text-gray-900 border-b-2 dark:border-white border-gray-600 dark:text-white"
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

                    {formData.education.map((edu, index) => (
                      <div key={index} className="mb-4 border-b border-gray-300 pb-2">
                        <p className="mt-2 dark:text-gray-200">School:</p>
                        <input
                          type="text"
                          value={edu.school}
                          onChange={(e) =>
                            handleChange("education", "school", e.target.value, index)
                          }
                          className="w-full p-2 rounded"
                        />

                        <p className="mt-2 dark:text-gray-200">Course:</p>
                        <input
                          type="text"
                          value={edu.course}
                          onChange={(e) =>
                            handleChange("education", "course", e.target.value, index)
                          }
                          className="w-full p-2 rounded"
                        />

                        <p className="mt-2 dark:text-gray-200">Year:</p>
                        <input
                          type="text"
                          value={edu.year}
                          onChange={(e) =>
                            handleChange("education", "year", e.target.value, index)
                          }
                          className="w-full p-2 rounded"
                        />
                      </div>
                    ))}

                    {/* Add More Button */}
                    <button
                      onClick={() =>
                        setFormData({
                          ...formData,
                          education: [...formData.education, { school: "", course: "", year: "" }],
                        })
                      }
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
                    >
                      + Add More
                    </button>
                  </div>
                )}



                {/* EXPERIENCE */}
                {activeTab === "experience" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">Experience</h2>

                    {formData.experience.map((exp, index) => (
                      <div key={index} className="mb-4 border-b border-gray-300 pb-2">
                        <p className="mt-2 dark:text-gray-200">Company:</p>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) =>
                            handleChange("experience", "company", e.target.value, index)
                          }
                          className="w-full p-2 rounded"
                        />

                        <p className="mt-2 dark:text-gray-200">Role/Title:</p>
                        <input
                          type="text"
                          value={exp.role}
                          onChange={(e) =>
                            handleChange("experience", "role", e.target.value, index)
                          }
                          className="w-full p-2 rounded"
                        />

                        <p className="mt-2 dark:text-gray-200">Year:</p>
                        <input
                          type="text"
                          value={exp.year}
                          onChange={(e) =>
                            handleChange("experience", "year", e.target.value, index)
                          }
                          className="w-full p-2 rounded"
                        />

                        <p className="mt-2 dark:text-gray-200">Description:</p>
                        <textarea
                          value={exp.description}
                          onChange={(e) =>
                            handleChange("experience", "description", e.target.value, index)
                          }
                          className="w-full p-2 rounded"
                          rows="3"
                        />
                      </div>
                    ))}

                    {/* Add More Button */}
                    <button
                      onClick={() =>
                        setFormData({
                          ...formData,
                          experience: [
                            ...formData.experience,
                            { company: "", role: "", year: "", description: "" },
                          ],
                        })
                      }
                      className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                      Add More
                    </button>
                  </div>
                )}



                {/* SKILLS */}
                {activeTab === "skills" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">Skills</h2>

                    {/* Predefined tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["NodeJS", "Express", "Laravel", "TailwindCSS", "JSON", "jQuery"].map(
                        (tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => {
                              if (!formData.skills.includes(tag)) {
                                setFormData({
                                  ...formData,
                                  skills: [...formData.skills, tag],
                                });
                              }
                            }}
                            className={`px-3 py-1 rounded-full border ${
                              formData.skills.includes(tag)
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 dark:bg-gray-600 dark:text-white"
                            }`}
                          >
                            {tag}
                          </button>
                        )
                      )}
                    </div>

                    {/* Show selected skills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {formData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-600 text-white rounded-full text-sm flex items-center gap-2"
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({
                                ...formData,
                                skills: formData.skills.filter((s) => s !== skill),
                              });
                            }}
                            className="text-xs bg-red-500 px-2 rounded-full"
                          >
                            ✕
                          </button>
                        </span>
                      ))}
                    </div>

                    {/* Custom skill input */}
                    <input
                      type="text"
                      placeholder="Add custom skill"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && e.target.value.trim()) {
                          e.preventDefault();
                          const newSkill = e.target.value.trim();
                          if (!formData.skills.includes(newSkill)) {
                            setFormData({
                              ...formData,
                              skills: [...formData.skills, newSkill],
                            });
                          }
                          e.target.value = "";
                        }
                      }}
                      className="w-full mt-4 p-2 rounded border"
                    />
                  </div>
                )}



                {/* PROJECTS */}
                {activeTab === "projects" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">Projects</h2>

                    {formData.projects.map((proj, index) => (
                      <div key={index} className="mb-4 border-b border-gray-300 pb-2">
                        <p className="mt-2 dark:text-gray-200">Project Name:</p>
                        <input
                          type="text"
                          value={proj.name}
                          onChange={(e) =>
                            handleChange("projects", "name", e.target.value, index)
                          }
                          className="w-full p-2 rounded"
                        />

                        <p className="mt-2 dark:text-gray-200">Description:</p>
                        <textarea
                          value={proj.description}
                          onChange={(e) =>
                            handleChange("projects", "description", e.target.value, index)
                          }
                          className="w-full p-2 rounded"
                          rows="3"
                        />

                        <p className="mt-2 dark:text-gray-200">Tags (comma-separated):</p>
                        <input
                          type="text"
                          value={proj.tags.join(", ")}
                          onChange={(e) =>
                            handleChange(
                              "projects",
                              "tags",
                              e.target.value.split(",").map((tag) => tag.trim()),
                              index
                            )
                          }
                          className="w-full p-2 rounded"
                        />
                      </div>
                    ))}

                    {/* Add More Button */}
                    <button
                      onClick={() =>
                        setFormData({
                          ...formData,
                          projects: [
                            ...formData.projects,
                            { name: "", description: "", tags: [] },
                          ],
                        })
                      }
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
                    >
                      + Add More
                    </button>
                  </div>
                )}

                {/* CERTIFICATES */}
                {activeTab === "certificates" && (
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">Certificates</h2>

                    {formData.certificates.map((cert, index) => (
                      <div key={index} className="mb-4 border-b border-gray-300 pb-2">
                        <p className="mt-2 dark:text-gray-200">Certificate Name:</p>
                        <input
                          type="text"
                          value={cert.name}
                          onChange={(e) =>
                            handleChange("certificates", "name", e.target.value, index)
                          }
                          className="w-full p-2 rounded"
                        />

                        <p className="mt-2 dark:text-gray-200">Issued By:</p>
                        <input
                          type="text"
                          value={cert.issuer}
                          onChange={(e) =>
                            handleChange("certificates", "issuer", e.target.value, index)
                          }
                          className="w-full p-2 rounded"
                        />

                        <p className="mt-2 dark:text-gray-200">Year:</p>
                        <input
                          type="text"
                          value={cert.year}
                          onChange={(e) =>
                            handleChange("certificates", "year", e.target.value, index)
                          }
                          className="w-full p-2 rounded"
                        />
                      </div>
                    ))}

                    {/* Add More Button */}
                    <button
                      onClick={() =>
                        setFormData({
                          ...formData,
                          certificates: [
                            ...formData.certificates,
                            { name: "", issuer: "", year: "" },
                          ],
                        })
                      }
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
                    >
                      + Add More
                    </button>
                  </div>
                )}




              </div>
            </div>

            {/* Right Panel */}
            <div className="flex flex-col items-center p-0 sm:p-4 w-full">
              {/* Scrollable preview container */}
              <div className="w-full overflow-x-auto flex justify-center max-h-[550px] overflow-y-auto rounded-md bg-gray-50">
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
            <div className="flex gap-4 mt-4">
              <PDFDownloadLink
                document={<ResumePDF data={formData} />}
                fileName="resume.pdf"
                className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md inline-block text-center"
              >
                {({ loading }) =>
                  loading ? "Preparing PDF..." : "Confirm & Download"
                }
              </PDFDownloadLink>

              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 bg-gray-500 text-white rounded-md shadow-md"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </>
  );
}

export default App;
