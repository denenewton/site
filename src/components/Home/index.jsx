import { movies } from "./movies-data";
import { Link } from "react-router-dom";
import "./styles.css";
import HeaderHearo from "../HeaderHearo";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";

const Home = () => {
  const { searchText} =  useContext(SearchContext)
  const [data, setData ] = useState(movies)

  useEffect(() => { 
    var text = searchText
    let expressaoReg = new RegExp(text.trim(), 'i')
    setData(movies.filter( elem => expressaoReg.test(elem.title )))
  }, [searchText])

  return (
   <HeaderHearo background_url={"https://image.tmdb.org/t/p/original/13UkK69iyMsB45H2p1WPXJPS87w.jpg"} > 
     <main className="w-full h-screen backdrop-blur-[1px] bg-white/90 rounded-2xl relative mt-[7rem] overflow-y-auto">
      <h1 className="text-3xl font-bold underline text-center py-5">Movies</h1>
      <section className="main-container p-5 ">
        {data.map((mov) => (
          <div key={mov._id.$oid} className="w-full h-min-42 overflow-hidden shadow-md rounded-lg">
            <img className="w-full   object-cover" src={mov.url_image} alt="kkk" />
            <Link to={`/movie/${mov._id.$oid}`}><h3 className='font-normal  pl-2 py-2 text-md'> {mov.title}</h3></Link>
          </div>
        ))}
      </section>
    </main>
   </HeaderHearo>
  );
};

export default Home;
