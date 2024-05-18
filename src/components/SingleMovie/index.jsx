import { Link } from "react-router-dom";
import { movies } from "../Home/movies-data";
import HeaderHearo from "../HeaderHearo";
import { useParams } from "react-router-dom"

const SingleMovie = () => {
    const params = useParams()
    console.log(params);
    const movie = movies.find( mov => mov._id.$oid === params._id)
    const id_movie = movie?.id;
    console.log(movie);
    
  return (
    <HeaderHearo background_url = {movie?.backdrop_path}>
    
      <div className="backdrop-blur-[1px] bg-white/70 text-slate-700 w-full h-full max-w-[1024px] min-h-[700px] mx-auto top-[7rem] rounded-xl relative mt-0 mt-[-3rem] sm:mt-0 py-10 px-4 sm:px-5">
        <div className="flex flex-col items-center justify-center max-w-[700px]  mx-auto">
          <h1 className='text-4xl text-slate-700'>
            <Link to={`${movie?.url_movie}`}>
              {movie?.title} <span>({movie?.release_date.split('-')[0]})</span>
            </Link>
          </h1>
          <p className='tracking-wide flex itmes-center gap-4'>{movie?.release_date.split('-').join('/')}
            <span className='justify-self-auto '>&bull;</span>
            <span className='flex gap-0'>{movie?.genres[0].name} </span></p>
        </div>
        <div className='max-w-[848px] mx-auto'>
          <h2 className='text-center text-2xl leading-10 mt-3'>Sinopse</h2>
          <p className='text-justify'>
            {movie?.description}
          </p>
        </div>
        <div className='w-full h-[300px] mt-10'>
          <h2 className='text-center text-2xl leading-10 mb-2'>Casts</h2>
          <div className='w-full h-full flex gap-2  overflow-x-auto'>
            {
              movie?.casts.map((cast ) => (
                <div key={`${cast?.name}${Math.random() * 1000}`} className='flex-none w-36 h-48 rounded-lg shadow-lg'>

                  <img
                    src={cast?.profile_path}
        
                    alt={cast?.name}
                    className='w-full h-full object-cover rounded-lg' />

                  <div className="px-2 py-4">
                    <Link to={`/person/${id_movie}/${cast?.id}`}>
                      <p className="font-simibold text-md  hover:text-gray-500 font-medium">{cast?.name}</p>
                      <span className='text-xs leading-none font-light mt-[-1px]'>{cast?.character}</span>
                    </Link>
                  </div>

                </div>
              ))
            }
          </div>
        </div>
      </div>
    </HeaderHearo>

  )
}

export default SingleMovie