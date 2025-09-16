import React, { useState } from 'react'
import Darkmode from './components/Darkmode.jsx';

function App() {
  const [activeTab, setActiveTab] = useState("personal");

  const tabs = [
    { id: "personal", label: "Personal" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <>
      <div className="w-full h-screen bg-[#E4E4E4] dark:bg-[#222831]">
        {/* Dark mode toggle */}
        <div className="flex items-center justify-end p-4">
          <Darkmode />
        </div>

        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6">
          <div >
            <h1 className="text-3xl sm:text-5xl font-bold mb-2 dark:text-white">
              Resume Builder <span className='text-lg sm:text-2xl'>by Clark</span>
            </h1>
            <p className="text-sm sm:text-base dark:text-gray-300 mb-6">Create. Customize. Land the job.</p>
          </div>

          <div className="grid grid-rows-2 sm:grid-cols-2 gap-5">
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

            <div className="bg-white dark:bg-[#393E46] p-6 rounded-xl shadow-md">
              {activeTab === "personal" && (
                <div>
                  <h2 className="text-xl font-semibold dark:text-white">Personal Information</h2>
                  <p className="mt-2 dark:text-gray-200">Full Name:</p>
                  <input type="text" />
                  <p className="mt-2 dark:text-gray-200">Email Address:</p>
                  <input type="email" />
                  <p className="mt-2 dark:text-gray-200">Phone:</p>
                  <input type="tel" />
                </div>
              )}

              {activeTab === "experience" && (
                <div>
                  <h2 className="text-xl font-semibold dark:text-white">Experience</h2>
                  <p className="mt-2 dark:text-gray-200">Your work history goes here...</p>
                </div>
              )}

              {activeTab === "education" && (
                <div>
                  <h2 className="text-xl font-semibold dark:text-white">Education</h2>
                  <p className="mt-2 dark:text-gray-200">Schools, degrees, certifications...</p>
                </div>
              )}

              {activeTab === "skills" && (
                <div>
                  <h2 className="text-xl font-semibold dark:text-white">Skills</h2>
                  <p className="mt-2 dark:text-gray-200">List your skills...</p>
                </div>
              )}

              {activeTab === "projects" && (
                <div>
                  <h2 className="text-xl font-semibold dark:text-white">Projects</h2>
                  <p className="mt-2 dark:text-gray-200">Showcase your projects...</p>
                </div>
              )}
            </div>
          </div>

          <div className='h-[250px] bg-white rounded-xl'>

          </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
