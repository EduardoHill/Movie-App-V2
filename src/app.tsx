import { Icon } from './images/Icon'
import Log from './images/image.png'
import { Calendario } from './images/Calendario'
import { Play } from './images/play'
import { Star } from './images/star'
import { Clock } from './images/Time'
import { useState } from 'react'
import Header from './components/header'

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
//Gerando os id das paginas
const id = Math.floor(Math.random() * 500) + 1
const id2 = Math.floor(Math.random() * 500) + 1
const id3 = Math.floor(Math.random() * 500) + 1

export function App() {
  //useState de filme, trailer, duraçao e ano de lançamento
  const [movie, setMovie] = useState<MovieProps>({} as MovieProps)
  const [video, setVideo] = useState<MovieProps>({} as MovieProps)
  const [duration, setDuration] = useState<string>('00:00:00')
  const [year, setYear] = useState<string>('0000')

  //useState de filme, trailer, duraçao e ano de lançamento
  const [movie2, setMovie2] = useState<MovieProps>({} as MovieProps)
  const [video2, setVideo2] = useState<MovieProps>({} as MovieProps)
  const [duration2, setDuration2] = useState<string>('00:00:00')
  const [year2, setYear2] = useState<string>('0000')

  //useState de filme, trailer, duraçao e ano de lançamento
  const [movie3, setMovie3] = useState<MovieProps>({} as MovieProps)
  const [video3, setVideo3] = useState<MovieProps>({} as MovieProps)
  const [duration3, setDuration3] = useState<string>('00:00:00')
  const [year3, setYear3] = useState<string>('0000')

  //useState para verificar se a pagina esta carregando para animação
  const [isLoading, setIsLoading] = useState(false)
  const [buttonAni, setButtonAni] = useState(false)

  //Funções para carregar os filmes
  async function handlegetMovie() {
    setIsLoading(true)
    setButtonAni(true)
    const response = await fetch(
      `${baseUrl}?api_key=${apiKey}&language=pt-BR&page=${id}`
    )
    const data = await response.json()
    const movies: MovieProps[] = data.results
    const randomMovie = movies[Math.floor(Math.random() * movies.length)]
    setMovie(randomMovie)

    //Função para carregar o video
    const videoResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${randomMovie.id}/videos?api_key=${apiKey}&language=pt-BR`
    )
    const videoData = await videoResponse.json()
    const trailer = videoData.results.find(
      (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
    )
    setVideo(trailer)

    //Função para pegar os detalhes do filme
    const detailsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${randomMovie.id}?api_key=${apiKey}&language=pt-BR`
    )
    const details = await detailsResponse.json()
    const ano = randomMovie.release_date
    const anoFormated = ano.split('-')[0]
    setYear(anoFormated)
    const hr1 = Math.floor(details.runtime / 60)
    const min1 = Math.floor(details.runtime % 60)
    const sec = 0
    const formatted = `${String(hr1).padStart(2, '0')}:${String(min1).padStart(
      2,
      '0'
    )}:${String(sec).padStart(2, '0')}`
    setDuration(formatted)

    //-----------------------------------------------

    const response2 = await fetch(
      `${baseUrl}?api_key=${apiKey}&language=pt-BR&page=${id2}`
    )
    const data2 = await response2.json()
    const movies2: MovieProps[] = data2.results
    const randomMovie2 = movies2[Math.floor(Math.random() * movies2.length)]
    setMovie2(randomMovie2)

    const videoResponse2 = await fetch(
      `https://api.themoviedb.org/3/movie/${randomMovie2.id}/videos?api_key=${apiKey}&language=pt-BR`
    )
    const videoData2 = await videoResponse2.json()
    const trailer2 = videoData2.results.find(
      (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
    )
    setVideo2(trailer2)

    const detailsResponse2 = await fetch(
      `https://api.themoviedb.org/3/movie/${randomMovie2.id}?api_key=${apiKey}&language=pt-BR`
    )
    const details2 = await detailsResponse2.json()
    const ano2 = randomMovie2.release_date
    const anoFormated2 = ano2.split('-')[0]
    setYear2(anoFormated2)
    const hr2 = Math.floor(details2.runtime / 60)
    const min2 = Math.floor(details2.runtime % 60)
    const formatted2 = `${String(hr2).padStart(2, '0')}:${String(min2).padStart(
      2,
      '0'
    )}:${String(sec).padStart(2, '0')}`
    setDuration2(formatted2)

    //----------------------------------------
    const response3 = await fetch(
      `${baseUrl}?api_key=${apiKey}&language=pt-BR&page=${id3}`
    )
    const data3 = await response3.json()
    const movies3: MovieProps[] = data3.results
    const randomMovie3 = movies3[Math.floor(Math.random() * movies3.length)]
    setMovie3(randomMovie3)

    const videoResponse3 = await fetch(
      `https://api.themoviedb.org/3/movie/${randomMovie3.id}/videos?api_key=${apiKey}&language=pt-BR`
    )
    const videoData3 = await videoResponse3.json()
    const trailer3 = videoData3.results.find(
      (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
    )
    setVideo3(trailer3)

    const detailsResponse3 = await fetch(
      `https://api.themoviedb.org/3/movie/${randomMovie3.id}?api_key=${apiKey}&language=pt-BR`
    )
    const details3 = await detailsResponse3.json()
    const ano3 = randomMovie3.release_date
    const anoFormated3 = ano3.split('-')[0]
    setYear3(anoFormated3)
    const hr3 = Math.floor(details3.runtime / 60)
    const min3 = Math.floor(details3.runtime % 60)
    const formatted3 = `${String(hr3).padStart(2, '0')}:${String(min3).padStart(
      2,
      '0'
    )}:${String(sec).padStart(2, '0')}`
    setDuration3(formatted3)

    setIsLoading(false)
    setButtonAni(false)
  }
  return (
    <div className=' rounded-2xl bg-gradient-to-r from-[#C497FF] to-[#9747FF] p-2  '>
      <div className='flex flex-col bg-[#1E1F28] w-[846px] h-[632px] rounded-2xl gap-9 px-[96px] py-[64px]  '>
        <Header onClick={handlegetMovie} buttonAni={buttonAni} />
        <div className=' h-full w-full flex  gap-4'>
          {isLoading || !movie || !movie2 || !movie3 ? (
            <div className='w-full flex justify-center items-center h-[300px]'>
              <h1 className='text-white text-xl animate-pulse'>
                Carregando...
              </h1>
            </div>
          ) : (
            <div className='h-full w-full flex  gap-4'>
              <div className='w-1/3'>
                <div className='flex flex-col items-center w-full h-full px-2 gap-2 '>
                  <div className='flex items-center justify-between w-full'>
                    <h1 className='font-medium text-[20px] text-white line-clamp-1 '>
                      {movie.title}
                    </h1>
                    <div className='flex items-center w-fit '>
                      <Star />
                      <span className=' text-[16px] font-semibold ml-[-10px] text-[#FEEA35] '>
                        {movie?.vote_average
                          ? movie.vote_average.toFixed(1)
                          : '00'}
                      </span>
                    </div>
                  </div>
                  <img src={imageURL + movie.poster_path} alt='' />
                  <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-0.5 text-[#8B8D9B] items-center '>
                      <Clock />
                      <span className=' text-[12px] '>{duration} </span>
                    </div>
                    <div className='flex gap-0.5 text-[#8B8D9B] items-center '>
                      <Calendario />
                      <span className=' text-[12px] '>{year} </span>
                    </div>
                  </div>
                  <a
                    href={video?.key ? trailerURL + video.key : '#'}
                    target='_blank'
                    className='flex w-full h-[44px] bg-[#2B2B37] rounded-[5px] items-center justify-center gap-1 cursor-pointer hover:bg-[#373745]  '
                  >
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
                  </a>
                </div>
              </div>

              <div className='w-1/3'>
                <div className='flex flex-col items-center w-full h-full px-2 gap-2 '>
                  <div className='flex items-center justify-between w-full'>
                    <h1 className='font-medium text-[20px] text-white line-clamp-1 '>
                      {movie2.title}
                    </h1>
                    <div className='flex items-center w-fit '>
                      <Star />
                      <span className=' text-[16px] font-semibold ml-[-10px] text-[#FEEA35] '>
                        {movie2?.vote_average
                          ? movie2.vote_average.toFixed(1)
                          : '00'}
                      </span>
                    </div>
                  </div>
                  <img src={imageURL + movie2.poster_path} alt='' />
                  <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-0.5 text-[#8B8D9B] items-center '>
                      <Clock />
                      <span className=' text-[12px] '>{duration2} </span>
                    </div>
                    <div className='flex gap-0.5 text-[#8B8D9B] items-center '>
                      <Calendario />
                      <span className=' text-[12px] '>{year2} </span>
                    </div>
                  </div>
                  <a
                    href={video2?.key ? trailerURL + video2.key : '#'}
                    target='_blank'
                    className='flex w-full h-[44px] bg-[#2B2B37] rounded-[5px] items-center justify-center gap-1 cursor-pointer hover:bg-[#373745]  '
                  >
                    <div className='w-[28px] h-[28px] rounded-2xl flex justify-center items-center bg-[#1E1E1E]'>
                      <Play />
                    </div>
                    <a
                      href={video2?.key ? trailerURL + video2.key : '#'}
                      target='_blank'
                      className='text-white text-[16px]'
                    >
                      Assistir Trailer
                    </a>
                  </a>
                </div>
              </div>

              <div className='w-1/3'>
                <div className='flex flex-col items-center w-full h-full px-2 gap-2 '>
                  <div className='flex items-center justify-between w-full'>
                    <h1 className='font-medium text-[20px] text-white line-clamp-1 '>
                      {movie3.title}
                    </h1>
                    <div className='flex items-center w-fit '>
                      <Star />
                      <span className=' text-[16px] font-semibold ml-[-10px] text-[#FEEA35] '>
                        {movie3?.vote_average
                          ? movie3.vote_average.toFixed(1)
                          : '00'}
                      </span>
                    </div>
                  </div>
                  <img src={imageURL + movie3.poster_path} alt='' />
                  <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-0.5 text-[#8B8D9B] items-center '>
                      <Clock />
                      <span className=' text-[12px] '>{duration3} </span>
                    </div>
                    <div className='flex gap-0.5 text-[#8B8D9B] items-center '>
                      <Calendario />
                      <span className=' text-[12px] '>{year3} </span>
                    </div>
                  </div>
                  <a
                    href={video?.key ? trailerURL + video.key : '#'}
                    target='_blank'
                    className='flex w-full h-[44px] bg-[#2B2B37] rounded-[5px] items-center justify-center gap-1 cursor-pointer hover:bg-[#373745]  '
                  >
                    <div className='w-[28px] h-[28px] rounded-2xl flex justify-center items-center bg-[#1E1E1E]'>
                      <Play />
                    </div>
                    <a
                      href={video3?.key ? trailerURL + video3.key : '#'}
                      target='_blank'
                      className='text-white text-[16px]'
                    >
                      Assistir Trailer
                    </a>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
