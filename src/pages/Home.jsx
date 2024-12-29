import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/pagination/Pagination";
import VideosGrid from "../components/videos_grid/VideosGrid";

const Home = () => {
  return (
    <>
      <Tags />
      <VideosGrid />
      <Pagination />
    </>
  );
};

export default Home;
