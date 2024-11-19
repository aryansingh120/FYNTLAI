import React, { useState } from 'react'

const PricePlans = ({priceArr,qArr,ansArr}) => {
    let plusIcon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
let [ansDisplay,setAnsDisplay]=useState(false);
let [arr,setarr]=useState(null);
  let show=(index)=>{
    setarr(arr===index?null:index)


    
    
  }
  
  return (
    <div className='px-[1rem]'>
       {/* <div className='flex justify-start'>
    <div className='flex justify-center items-center gap-[5px] border rounded-full px-[1rem] py-[.3rem]'>
        <div className=' border-[4px] border-[green] rounded-full mt-[3.5px]'></div>
        <span className='text-[#666666] font-medium'>Pricing Plans</span>
    </div>
    </div>
   
   <p className='text-start text-[2rem] sm:text-[3rem] font-medium mt-[.8rem]'>Flexible Pricing for Every Lifestyle</p>
   <p className='text-start  text-[1.1rem] sm:text-[1.3rem] font-medium text-[#666666] mt-[.5rem]'>Payble’s plans offer you everything you need to manage your finances effortlessly, <br className='sm:block hidden' /> with options tailored to your unique needs.</p>
   <div className='flex items-center gap-[5px] mt-[4rem]'>
      <div className='flex gap-[16px] border border-[#d8d8d8] rounded-md p-[.3rem] bg-[#FAFAFA]'>
        <button className='capitalize text-[#FFFFFF] font-bold bg-[black] py-[.2rem] rounded-md px-[.7rem]'>monthly</button>
        <button className='capitalize font-medium text-[#666666]  py-[.2rem] rounded-md px-[.6rem]'>yearly</button>

      </div>
      <span className='font-medium'>- save 20%</span>
   </div> */}
   {/* ************************************************* */}
   {/* <div className='md:flex-row gap-[1rem] mt-[3rem] md:justify-between  flex flex-col'>
    
        {
            priceArr.map((item,index)=>{
                let btnColor=()=>{
                    if(index==0)
                        return  "bg-[#0083FD]";
                    else if(index==1)
                    return  "bg-[#42AB3B]";
                    else
                    return  "bg-[#FF9900]";

                }
                let liColor=()=>{
                                    if(index==0)
                                    return "marker:text-[#0083FD]";
                                    else if(index==1)
                                    return "marker:text-[#42AB3B]";
                                    else
                                    return "marker:text-[#FF9900]";
                              }
                return (
                    <div className=' md:w-[33.33%] bg-[#f7f6f6] p-[.2rem]'>
                    <div className='bg-[#FFFFFF] p-[1.3rem] rounded-md'>
                        <button className={`${btnColor()} text-[#FFFFFF] font-bold rounded-md py-[.4rem] px-[1rem]`}>{item.btn}</button>
                        <div className='flex justify-between items-end'>
                            <p className='font-bold text-[3rem]'>{item.income} <span className='text-[1rem] font-normal text-[#666666]'>{item.month}</span></p>
                            <p className='text-[1rem] font-normal text-[#666666] pb-[9px]'>{item.time}</p>

                        </div>
                        <p className={`text-[1rem] font-medium text-[#666666] pb-[9px] ${(index==2)? "pr-[3vw]": ""}`}>{item.text}</p>
                        <button className='capitalize font-bold text-[#FFFFFF] bg-black w-[100%] text-[1.1rem] py-[.8rem] rounded-md'>{item.btn2}</button>
                        </div>
                        <ul className={`list-disc pl-[3rem] flex flex-col gap-[1rem] text-[#666666] font-medium ${liColor()} pt-[1rem]`}>
                            {
                                item.list.map((item,index)=>{

                                 return <li className={``}>{item}</li>
                                })
                            }
                        </ul>
                    </div>
                )

            })
        }
    
   </div> */}
{/* ********************************************************************** */}
<div className='mt-[5rem] bg-[#f7f6f6] p-[2rem] flex justify-between'>
<div className='w-[23%] border flex flex-col gap-[1rem] items-start'>
<div className='flex justify-start'>
    <div className='flex justify-center items-center gap-[5px] border rounded-full px-[1rem] py-[.3rem]'>
        <div className=' border-[4px] border-[green] rounded-full mt-[3.5px]'></div>
        <span className='text-[#666666] font-medium uppercase'>faq</span>
    </div>
    </div>
    <p className='text-[2rem] font-bold'>Common Questions & Answers</p>
    <p className='text-[#666666] font-medium text-[1.3rem]'>Here’s everything you need to know about Payble, from features to getting started.</p>
    <p className='text-[#666666] font-medium'>Got any specific questions?</p>
    <button className='bg-black text-[#FFFFFF] font-bold px-[2rem] py-[.6rem] capitalize rounded-md'>Contact us</button>
    </div>
    <div className='flex flex-col gap-[2rem] w-[65%]'>
    {
        qArr.map((item,index)=>{
            return (
                <div className='flex bg-[white] pl-[1rem] gap-[2rem] cursor-pointer rounded-md' onClick={()=>show(index)}>
                <span>{plusIcon}</span>
               <div>
               <p className='font-bold'>{item}</p>
                <p className={`${(arr===index)? "block":"hidden"} font-medium text-[#666666]`}>{ansArr[index]}</p>

               </div>
                </div>
            )
        })
    }

    </div>

</div>



   
    </div>
  )
}

export default PricePlans
