import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import certificates from "../data/Data";

function SeeCertificate() {
    const {id} = useParams()
   const certificate = certificates.filter((certificate) => certificate.id == id)
    console.log(certificate)
  return (
    <>
     <div className='mt-20'>
       <Link to={'/certificates'}> <p className='ml-2 rounded-md hover:scale-102 cursor-pointer fixed md:top-19 top-17  px-6 py-1 bg-[var(--textcolor)] text-[15px] font-bold text-[var(--background)]'>Back To Certificates</p></Link>
        {certificate.map((certificate) => (
            <div className='flex flex-col items-center gap-3.5 pb-4 justify-center'>
                <div className=" hover:transform hover:translate-y-[-2px]  gap-3 md:w-[70%] w-[95vw] pb-3  flex flex-col  ">
                <img src={certificate.image} alt="" className=" w-[100%] mt-12 md:mt-0 rounded-md" />
                {/* <h2 className="text-xl text-[var(--textcolor)] font-bold px-2 mb line-clamp-2">
                  {certificate.title}
                </h2> */}
                <div className=" ">{""}

                </div>
              </div>
            </div>
        ))}
     </div>
    </>
  )
}

export default SeeCertificate