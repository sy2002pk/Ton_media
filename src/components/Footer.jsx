import React from 'react'

const footer =() =>{
  return (
    <div className='bg-blue-200 '>
      <div className='w-[90%] m-auto'>
        <h1 className='m-4 text-3xl'>Ton media</h1>
        <div className='w-full mb-6 bg-black border'></div>
        <div className="grid grid-cols-4 grid-rows-2 gap-3">
            <div >1</div>
            <div >2</div>
            <div className="row-span-2">3</div>
            <div className="row-span-2">4</div>
            <div >5</div>
            <div >6</div>
        </div>

      </div>
    </div>
  )
}

export default footer