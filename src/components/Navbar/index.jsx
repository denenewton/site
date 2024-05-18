import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const index = () => {
  const { setSearchText } = useContext(SearchContext);
  const searchRef = useRef(null);

  return (
   
      <div className="w-full flex items-center backdrop-blur-[1px] bg-black/12  text-white justify-between px-5 absolute z-50">
       
        <nav className="h-16 flex gap-5 items-center place-content-center  text-slate-50">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (searchRef.current) {
              setSearchText(searchRef.current.value);
            }
          }}
          className="w-[170px]"
        >
          <div className="flex items-center gap-1">
            <input
              ref={searchRef}
              placeholder="Search movies"
              className="w-full rounded-full text-gray-50 hover:text-gray-500 bg-transparent hover:bg-slate-50 focus:outline-none focus:ring focus:ring-slate-50 hover:ring hover:ring-slate-50 pl-7 py-[6px]"
            />
          </div>
        </form>
      </div>

  );
};

export default index;
