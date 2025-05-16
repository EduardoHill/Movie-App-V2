import { Header } from './components/header'
import { Main } from './components/main'

export function App() {
  return (
    <div className=' rounded-2xl bg-gradient-to-r from-[#C497FF] to-[#9747FF] p-2  '>
      <div className='flex flex-col bg-[#1E1F28] w-[846px] h-[632px] rounded-2xl gap-9 px-[96px] py-[64px]  '>
        <Header />
        <Main />
      </div>
    </div>
  )
}
