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

        <div className="max-w-[1200px] w-full mx-auto">
          <h1 className="text-5xl font-bold mb-6 dark:text-white">
            Resume Builder
          </h1>

          <div className='grid grid-cols-2'>
          {/* Tab Bar */}
          <div>
          <div className="flex gap-6 border-b-2 border-gray-300 dark:border-gray-600 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 text-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-[#393E46] p-6 rounded-xl shadow-md">
            {activeTab === "personal" && (
              <div>
                <h2 className="text-xl font-semibold dark:text-white">Personal Information</h2>
                <p className="mt-2 dark:text-gray-200">Name, Email, Phone...</p>
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
