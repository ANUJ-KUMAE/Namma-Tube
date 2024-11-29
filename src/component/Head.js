import React from 'react'

export const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
      <img className='h-7 pr-4' src='https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256' alt='hamburger'/>
      <img className='h-6' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png' alt='youtube-logo'/>
      </div>

      <div className='col-span-10'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' placeholder='Search'/>
        <button className='border border-gray-400 p-2 rounded-r-full'>🔎</button>
      </div>
      <div className='col-span-1'>
        <img className='h-10' src='https://static.thenounproject.com/png/363640-200.png' alt='avatar'/>
      </div>
    </div>
  )
}
