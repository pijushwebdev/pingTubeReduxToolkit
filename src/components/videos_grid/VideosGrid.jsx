import { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/features/videos/videosSlice";
import Loading from "../ui/Loading";
import Error from "../ui/Error";


const VideosGrid = () => {
    const dispatch = useDispatch();
    const {tags, search} = useSelector(state => state.filters);

    useEffect(() => {
        dispatch(fetchVideos({tags, search}))
    }, [dispatch, tags, search])

    const {videos, loading, isError, error } = useSelector(state => state.videos);

    let content = null;

    if(loading) content = <Loading/>

    if(!loading && !isError) content = <Error error={error}/>

    if(!loading && !isError && videos?.length === 0) content = <div className="col-span-12">some error happened</div>

    if(!loading && !isError && videos?.length > 0) content = videos?.map(video => <VideoCard key={video.id} video={video}/>)

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {content}
                    
                </div>
            </section>
        </section>
    );
};

export default VideosGrid;