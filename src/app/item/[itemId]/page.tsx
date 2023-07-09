'use client'
import Itemslider from '@/app/components/Itemslider'
import React from 'react'
import CardData from '../../../../lib/data.json'


type Props = {
  params: {
      itemId: number
  }
}
const page = ({ params: { itemId } }: Props) => {
    const data = CardData.filter(item => item.id == itemId )

 
  return (
    <>
    <div className='w-screen h-screen flex items-center justify-center'>
    <div className="flex md:flex-row flex-col md:m-[10vh] items-center justify-center h-[80vh] w-[80vw] bg-gray-white rounded-lg overflow-hidden shadow-lg">
    <Itemslider />
    {data.map(item =>(
      <>
        <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ultrices lacus.
        Phasellus id cursus nulla. Aliquam consequat interdum sem, vel euismod justo consectetur in. lorem32
      </p>
      <div className='space-y-1 text-md font-semibold'>
        <p>Price : <span>{item.price}</span></p>
        <p>GSM : <span>{item.gsm}</span></p>
        <p>Sheets : <span>{item.sheets}</span></p>
        </div>
    </div>

      </>

    ))}
  </div>
  </div>
  </>
  )
}

export default page