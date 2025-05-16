import { Icon } from '../images/Icon'

import Log from '../images/image.png'

export function Header() {
  return (
    <div className='flex justify-between items-center  '>
      <img src={Log} alt='' className='w-[85px] h-[44px] ' />
      <button className='flex justify-between text-white items-center gap-1.5 bg-gradient-to-r from-[#8323FF] to-[#FF2DAF]  text-[16px] px-4 py-2 rounded-[10px]'>
        Nova recomendação
        <div className='bg-white/20 w-[32px] h-[32px] rounded-[50%] flex items-center justify-center '>
          <Icon />
        </div>
      </button>
    </div>
  )
}
