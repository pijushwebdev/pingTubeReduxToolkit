import { FcSearch } from "react-icons/fc";

const Search = () => {
  return (
    <form className="flex items-center">
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
      />
      <FcSearch className="text-xl cursor-pointer"/>
    </form>
  );
};

export default Search;
