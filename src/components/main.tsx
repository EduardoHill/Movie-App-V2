import { Calendario } from '../images/Calendario'
import { Play } from '../images/play'
import { Star } from '../images/star'
import { Clock } from '../images/Time'

import FilmeCapa from '../images/Poster.png'

export function Main() {
  return (
    <div className=' h-full w-full flex  gap-4'>
      <div className='w-1/3'>
        <div className='flex flex-col items-center w-full h-full px-2 gap-2 '>
          <div className='flex items-center justify-between w-full'>
            <h1 className='font-medium text-[20px] text-white '>filme</h1>
            <div className='flex items-center w-fit '>
              <Star />
              <span className=' text-[16px] font-semibold ml-[-10px] text-[#FEEA35] '>
                4.9
              </span>
            </div>
          </div>
          <img src={FilmeCapa} alt='' />
          <div className='flex justify-between items-center w-full'>
            <div className='flex gap-0.5 text-[#8B8D9B] items-center '>
              <Clock />
              <span className=' text-[12px] '>01:59:00</span>
            </div>
            <div className='flex gap-0.5 text-[#8B8D9B] items-center '>
              <Calendario />
              <span className=' text-[12px] '>2023</span>
            </div>
          </div>
          <button className='flex w-full h-[44px] bg-[#2B2B37] rounded-[5px] items-center justify-center gap-1 cursor-pointer  '>
            <div className='w-[28px] h-[28px] rounded-2xl flex justify-center items-center bg-[#1E1E1E]'>
              <Play />
            </div>
            <span className=' text-white text-[16px] '>Assistir Tailer</span>
          </button>
        </div>
      </div>
      <div className='w-1/3'>
        <div className='flex flex-col items-center w-full h-full px-2 gap-2 '>
          <div className='flex items-center justify-between w-full'>
            <h1 className='font-medium text-[20px] text-white '>filme</h1>
            <div className='flex items-center w-fit '>
              <Star />
              <span className=' text-[16px] font-semibold ml-[-10px] text-[#FEEA35] '>
                4.9
              </span>
            </div>
          </div>
          <img src={FilmeCapa} alt='' />
          <div className='flex justify-between items-center w-full'>
            <div className='flex gap-0.5 text-[#8B8D9B] items-center '>
              <Clock />
              <span className=' text-[12px] '>01:59:00</span>
            </div>
            <div className='flex gap-0.5 text-[#8B8D9B] items-center '>
              <Calendario />
              <span className=' text-[12px] '>2023</span>
            </div>
          </div>
          <button className='flex w-full h-[44px] bg-[#2B2B37] rounded-[5px] items-center justify-center gap-1 cursor-pointer  '>
            <div className='w-[28px] h-[28px] rounded-2xl flex justify-center items-center bg-[#1E1E1E]'>
              <Play />
            </div>
            <span className=' text-white text-[16px] '>Assistir Tailer</span>
          </button>
        </div>
      </div>
      <div className='w-1/3'>
        <div className='flex flex-col items-center w-full h-full px-2 gap-2 '>
          <div className='flex items-center justify-between w-full'>
            <h1 className='font-medium text-[20px] text-white '>filme</h1>
            <div className='flex items-center w-fit '>
              <Star />
              <span className=' text-[16px] font-semibold ml-[-10px] text-[#FEEA35] '>
                4.9
              </span>
            </div>
          </div>
          <img src={FilmeCapa} alt='' />
          <div className='flex justify-between items-center w-full'>
            <div className='flex gap-0.5 text-[#8B8D9B] items-center '>
              <Clock />
              <span className=' text-[12px] '>01:59:00</span>
            </div>
            <div className='flex gap-0.5 text-[#8B8D9B] items-center '>
              <Calendario />
              <span className=' text-[12px] '>2023</span>
            </div>
          </div>
          <button className='flex w-full h-[44px] bg-[#2B2B37] rounded-[5px] items-center justify-center gap-1 cursor-pointer  '>
            <div className='w-[28px] h-[28px] rounded-2xl flex justify-center items-center bg-[#1E1E1E]'>
              <Play />
            </div>
            <span className=' text-white text-[16px] '>Assistir Tailer</span>
          </button>
        </div>
      </div>
    </div>
  )
}
