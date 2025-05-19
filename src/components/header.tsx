import { Icon } from '../images/Icon'

import Log from '../images/image.png'

type HeaderProps = {
  onClick: () => void
  buttonAni: boolean
}

export default function Header({ onClick, buttonAni }: HeaderProps) {
  return (
    <div className='flex justify-between items-center  '>
      <img src={Log} alt='' className='w-[85px] h-[44px] ' />
      <button
        onClick={onClick}
        disabled={buttonAni}
        className={`flex justify-between text-white items-center gap-1.5 bg-gradient-to-r from-[#8323FF] to-[#FF2DAF] text-[16px] px-4 py-2 rounded-[10px] cursor-pointer transition-all duration-300 hover:from-[#9F55FF] hover:to-[#FF46B9] ${
          buttonAni ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {buttonAni ? (
          <>
            Carregando...
            <div className='w-[24px] h-[24px] border-2 border-white border-t-transparent rounded-full animate-spin'></div>
          </>
        ) : (
          <>
            Nova recomendação
            <div className='bg-white/20 w-[32px] h-[32px] rounded-full flex items-center justify-center'>
              <Icon />
            </div>
          </>
        )}
      </button>
    </div>
  )
}
