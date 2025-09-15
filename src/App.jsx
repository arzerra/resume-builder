import React from 'react'
import Darkmode from './components/Darkmode.jsx';

function App() {
  return (
    <>
    <div className='w-full h-screen bg-[#E4E4E4] dark:bg-[#222831]'>
      <div className='flex items-center justify-end'>
        <Darkmode/>
      </div>

      <div className='max-w-[1200px] w-full mx-auto'>
      <div>
        <h1 className='text-5xl font-boldq    q     '>Resume Builder</h1>
      </div>

        <div className='grid grid-cols-2'>

          <div className='h-[150px] flex pt-[20px] pl-[20px] bg-white rounded-xl'>
            <h1 className='dark:text-white'>Personal Information</h1>
          </div>


          <div className='h-[150px] flex pt-[20px] pl-[20px] bg-white rounded-xl'>
            <h1 className='dark:text-white'>asdfasdfe</h1>
          </div>


        </div>
      </div>

    </div>
    </>
  )
}

export default App
