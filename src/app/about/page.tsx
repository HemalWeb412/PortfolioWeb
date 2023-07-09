import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="max-w-6xl h-[75vh] mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <img src="/path/to/image.jpg" alt="About Us" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ultrices lacus.
            Phasellus id cursus nulla. Aliquam consequat interdum sem, vel euismod justo
            consectetur in. Donec lobortis sem non lacinia pellentesque.
          </p>
          <p className="text-lg">
            Fusce sagittis, leo ac sagittis facilisis, dui est hendrerit elit, vitae aliquet
            mi eros vitae nisl. Maecenas tincidunt urna sed lorem lacinia, ac vestibulum
            massa sollicitudin. Sed rutrum est in orci eleifend, sit amet sodales ante
            dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
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