import React from 'react'

const Header = () => {
  let playIcon=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[black]">
  <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
</svg>

  return (
    <div className='pt-[5rem]'>
    <div className='flex justify-center'>
    <div className='flex justify-center items-center gap-[5px] border rounded-full px-[1rem] py-[.3rem]'>
        <div className=' border-[4px] border-[green] rounded-full mt-[3.5px]'></div>
        <span className='text-[#666666] font-medium'>Smart AI for Your Finances</span>
    </div>
    </div>
   
   <p className='text-center text-[2rem] sm:text-[3rem] font-medium mt-[.8rem]'>Your AI-Powered <br /> Financial Assistant</p>
   <p className='text-center px-[4vw] text-[1.1rem] sm:text-[1.3rem] font-medium text-[#666666] mt-[.5rem]'>From detailed budgeting to custom savings goals, Payble <br className='hidden sm:block' /> seamlessly automates every step of your financial journey, <br className='hidden sm:block' /> helping you achieve lasting financial freedom with ease.</p>
   
   <div className='flex items-center pt-[2rem] flex-col gap-[1rem] sm:flex-row sm:justify-center'>
    <button className='text-[#FFFFFF] capitalize bg-[black] text-[1.3rem] font-medium px-[2rem] py-[.5rem] rounded-md'>start saving now</button>
    <button className=' capitalize text-[1.2rem] font-medium px-[2rem] py-[.5rem] rounded-md flex items-center gap-[1rem] '>{playIcon} <span className='capitalize'>presentation</span></button>

   </div>
   <img src="./Images/port.avif" alt=""  className='transition-transform duration-500'/>
   <p>{}</p>







    </div>
  )
}

export default Header
