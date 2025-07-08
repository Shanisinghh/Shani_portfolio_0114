import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <>
    <div className=''>
        <div className='h-screen flex flex-col items-center justify-center'>
            <h1 className='text-8xl font-bold text-[var(--textcolor)] bg-[var(--background)]'>404</h1>
            <h2 className='text-3xl font-semibold text-[var(--textcolor)] bg-[var(--background)]'>Page Not Found</h2>
            <p className='text-xl text-[var(--textcolor)] bg-[var(--background)]'>The page you are looking for does not exist</p>
            <Link to="/"><button className="absolute md:top-19 left-3 rounded-md top-17 px-6 py-1 bg-[var(--textcolor)] text-[15px] hover:scale-102 cursor-pointer font-bold text-[var(--background)]">Go Back Home</button></Link>
        </div>
    </div>
    </>
  )
}

export default NotFound