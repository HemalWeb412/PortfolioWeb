import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
   <h2 className='text-center mt-10'>Created with ❤️ by <Link target='_blank' href={'https://github.com/DhrishP'} className='font-bold'>Dhrish Parekh</Link> </h2>
   <h2 className='text-center mt-2 '>For more info , <Link className='font-semibold text-blue-400' href={'/about'}>Click here</Link> </h2>
   </>
  )
}

export default Footer