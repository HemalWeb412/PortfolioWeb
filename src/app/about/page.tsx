import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="max-w-6xl h-[75vh] mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 flex flex-col items-center">
          <img  src="https://i.pinimg.com/originals/71/28/3b/71283bb49db55cfee5bb6acd1389c465.jpg" alt="About Us" className="md:w-full md:h-[550px] h-[350px] w-[75vw]" />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-4">
           ADDRESS
          </p>
          <p className="text-lg">
           WRITE DESCRIPTION HERE
          </p>
        </div>
      </div>
    </div>
  
    <div className="bg-gray-200 flex flex-wrap md:h-[25vh] items-center justify-center h-auto md:py-8">
      <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 py-4 text-center">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <p className="font-bold text-xl mb-2">8</p>
          <div className="text-xl mb-2">Years</div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 py-4 text-center">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <p className="font-bold text-xl mb-2">5000+</p>
          <div className="text-lg mb-2">Customers</div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 py-4 text-center">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <p className="font-bold text-xl mb-2">Competitive</p>
          <div className="text-xl mb-2">Prices</div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 py-4 text-center">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <p className="font-bold text-xl mb-2">20+</p>
          <div className="text-lg mb-2">A4 TYPES</div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default page
