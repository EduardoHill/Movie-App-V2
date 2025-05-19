import { Icon } from './images/Icon'
import Log from './images/image.png'
import { Calendario } from './images/Calendario'
import { Play } from './images/play'
import { Star } from './images/star'
import { Clock } from './images/Time'
import FilmeCapa from './images/Poster.png'
import { useState } from 'react'

const apiKey = import.meta.env.VITE_API_KEY_TMDB
const baseUrl = 'https://api.themoviedb.org/3/movie/popular'
const imageURL = 'https://image.tmdb.org/t/p/w500/'
const trailerURL = 'https://www.youtube.com/watch?v='

type MovieProps = {
  id: number
  title: string
  poster_path: string
  release_date: string
  runtime: number
  vote_average: number
  key: string
}

const id = Math.floor(Math.random() * 10) + 1
export function App() {
  const [movie, setMovie] = useState<MovieProps>({} as MovieProps)
  const [time, setTime] = useState<MovieProps>({} as MovieProps)
  const [video, setVideo] = useState<MovieProps>({} as MovieProps)

  async function handlegetMovie() {
    const response = await fetch(
      `${baseUrl}?api_key=${apiKey}&language=pt-BR&page=${id}`
    )
    const data = await response.json()
    const movies: MovieProps[] = data.results
    const randomMovie = movies[Math.floor(Math.random() * movies.length)]
    console.log(randomMovie)
    setMovie(randomMovie)

    const videoResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${randomMovie.id}/videos?api_key=${apiKey}&language=pt-BR`
    )
    const videoData = await videoResponse.json()
    const trailer = videoData.results.find(
      (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
    )
    setVideo(trailer)

    const detailsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${randomMovie.id}?api_key=${apiKey}&language=pt-BR`
    )
    const details = await detailsResponse.json()
    console.log(details)
    setTime(details)
  }
  return (
    <div className=' rounded-2xl bg-gradient-to-r from-[#C497FF] to-[#9747FF] p-2  '>
      <div className='flex flex-col bg-[#1E1F28] w-[846px] h-[632px] rounded-2xl gap-9 px-[96px] py-[64px]  '>
        <div className='flex justify-between items-center  '>
          <img src={Log} alt='' className='w-[85px] h-[44px] ' />
          <button
            onClick={handlegetMovie}
            className='flex justify-between text-white items-center gap-1.5 bg-gradient-to-r from-[#8323FF] to-[#FF2DAF]  text-[16px] px-4 py-2 rounded-[10px] cursor-pointer'
          >
            Nova recomendação
            <div className='bg-white/20 w-[32px] h-[32px] rounded-[50%] flex items-center justify-center '>
              <Icon />
            </div>
          </button>
        </div>
        <div className=' h-full w-full flex  gap-4'>
          <div className='w-1/3'>
            <div className='flex flex-col items-center w-full h-full px-2 gap-2 '>
              <div className='flex items-center justify-between w-full'>
                <h1 className='font-medium text-[20px] text-white line-clamp-1 '>
                  {movie.title}
                </h1>
                <div className='flex items-center w-fit '>
                  <Star />
                  <span className=' text-[16px] font-semibold ml-[-10px] text-[#FEEA35] '>
                    {movie.vote_average}
                  </span>
                </div>
              </div>
              <img src={imageURL + movie.poster_path} alt='' />
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
                <a
                  href={video?.key ? trailerURL + video.key : '#'}
                  target='_blank'
                  className='text-white text-[16px]'
                >
                  Assistir Trailer
                </a>
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
                <span className=' text-white text-[16px] '>
                  Assistir Tailer
                </span>
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
                <span className=' text-white text-[16px] '>
                  Assistir Tailer
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
