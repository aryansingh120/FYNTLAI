import React from 'react'

const Cards = ({cardArr,card2Arr}) => {
    let downIcon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-16">
    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>;
  
    

  return (
    <div className=' bg-[#f8f7f7]'>
     <div className='flex justify-center mt-[2rem]'>
    <div className='flex justify-center items-center gap-[5px] border rounded-full px-[1rem] py-[.3rem]'>
        <div className=' border-[4px] border-[green] rounded-full mt-[3.5px]'></div>
        <span className='text-[#666666] font-medium'>Smart AI for Your Finances</span>
    </div>
    </div>
    <p className='text-center text-[2rem] sm:text-[3rem] font-medium mt-[.8rem]'>Our Results in Numbers</p>
    <p className='text-center px-[4vw] text-[1.1rem] sm:text-[1.5rem] font-medium text-[#666666] mt-[.5rem]'>Discover the real impact Payble has made on budgeting, saving, <br className='sm:block hidden'/> and financial health across our growing community.</p>
    <div className='flex flex-col  space-y-[1rem] px-[1rem] sm:grid sm:grid-cols-2 sm:gap-[1rem] sm:space-y-0 sm:px-[4rem] pt-[4rem]'>
        {
            cardArr.map((item,index)=>{
                let textColor=()=>{
                    if(index===0)
                    return "text-[#0073FD]";
                    else if(index===1)
                        return "text-[#42AB3B]";
                    else if(index===2)
                        return "text-[#FF9900]";
                    else if(index===3)
                        return "text-[#B742BD]";
                }
                return (
                    <div className='flex flex-col bg-[#FFFFFF] items-start gap-[.6rem] text-[#666666] rounded-xl p-[1rem] ]'>
                        <span className={`${textColor()} text-[2rem] font-medium `}>{item.text1}</span>
                        <span className='text-[1.7rem]'>{item.text2}</span>
                        <span className='mt-[3rem] text-[14px] font-medium'>{item.text3}</span>
                    </div>
                )
            })
        }
    </div>
    <div className='bg-[#FFFFFF] '>
    <div className='flex justify-center mt-[2rem]'>
    <div className='flex justify-center items-center gap-[5px] border rounded-full px-[1rem] py-[.3rem]'>
        <div className=' border-[4px] border-[green] rounded-full mt-[3.5px]'></div>
        <span className='text-[#666666] font-medium'>Financial Roadblocks</span>
    </div>
    </div>
    <p className='text-center text-[2rem] sm:text-[3rem] font-medium mt-[.8rem]'>Struggle Financial Situations?</p>
    <p className='text-center px-[4vw] text-[1.1rem] sm:text-[1.5rem] font-medium text-[#666666] mt-[.5rem]'>We get it. Payble simplifies the process of tracking, <br className='sm:block hidden'/> budgeting, and saving, so you can stress less.</p>
    </div>

    <div className='flex flex-col gap-[1rem] px-[1rem] bg-[#FFFFFF] pt-[5rem] md:flex-row sm:px-[3rem]'>

          {
           card2Arr.map((item,index)=>{
            let liColor=()=>{
                                    if(index==0)
                                    return "marker:text-[red]";
                                    else if(index==1)
                                    return "marker:text-[dodgerblue]";
                                    else
                                    return "marker:text-[#42AB3B]";
                              }
                return (
                    <div key={index} className='bg-[#ffecc7] p-[1.5rem] rounded-md flex flex-col flex-1 flex-shrink-0 '>
                    <div className='flex justify-between'>
                        <p className='font-bold text-[1.3rem]'>{item.head}</p>
                        <div className='flex gap-[1rem]'>
                        {
                            item.logo.map((item)=>{
                             return <p>{item}</p>
                            })
                        }
                        </div>

                        
                    </div>
                    <ul className={`list-disc pl-[1.8rem] ${liColor()}  marker:text-[1.3rem] flex flex-col gap-[.7rem] pt-[1rem] text-[#666666] font-medium text-[12px]` }>
                    <li>{item.li1}</li>
                    <li>{item.li2}</li>
                    <li>{item.li3}</li>
                    </ul>
                  

                    </div>
                    
                )
            })
          }
          

    </div>
   
      
    </div>
  )
}

export default Cards


