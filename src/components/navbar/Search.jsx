import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { searched } from "../../redux/features/filters/filtersSlice";

const Search = () => {

  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleSubmit = (e)  => {
    e.preventDefault()
    dispatch(searched(input))
    setInput('')
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
