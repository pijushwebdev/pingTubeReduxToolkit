import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/pagination/Pagination";
import VideoGrid from "../components/video_grid/VideoGrid";


const Home = () => {
    return (
        <>
            <Navbar/>
            <Tags/>
            <VideoGrid/>
            <Pagination/>
            <Footer/>
            
        </>
    );
};

export default Home;