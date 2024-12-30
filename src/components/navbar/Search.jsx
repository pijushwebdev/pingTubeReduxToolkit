import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { searched } from "../../redux/features/filters/filtersSlice";
import { useMatch, useNavigate } from "react-router";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const match = useMatch('/')

  const handleSubmit = (e)  => {
    e.preventDefault()
    dispatch(searched(input))
    setInput('');
    if(!match){
      navigate('/');
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit"><FcSearch className="text-xl cursor-pointer"/></button>
    </form>
  );
};

export default Search;
