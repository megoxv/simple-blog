import React from 'react'
import Image from 'next/image'
import abdelmjid from '../assets/images/abdelmjid.jpg'
const Author = () => {
  return (
    <div className="bg-gray-50 dark:bg-secondary-dark p-6 mt-8 rounded-2xl  box-shadow">
      <div className="flex items-center">
        <Image src={abdelmjid} alt="abdelmjid" width={80} height={80} className="rounded-full  " />
        <span className="mx-4 dark:text-white" >Abdelmjid Saber</span>
      </div>
      <div className="pt-3 flex flex-col items-center">

        <p className="text-sm text-gray-600 pt-2 dark:text-gray-300">The following Image Optimization cloud providers are included</p>
      </div>
    </div>
  )
}

export default Author