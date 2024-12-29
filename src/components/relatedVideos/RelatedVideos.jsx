import RelatedVideo from "./relatedVideo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchRelatedVideos} from '../../redux/features/relatedVideos/relatedVideosSlice'
import Loading from "../ui/Loading";
import Error from "../ui/Error";


const RelatedVideos = ({currentVideoId, tags = []}) => {
 
  const limit = 5;
  const queryUrl =tags.length > 0 ? tags.map(tag => `tag_like=${tag}`).join('&').concat(`&id_ne=${currentVideoId}&_limit=${limit}`) : `id_ne=${currentVideoId}&_limit=${limit}`;
  const dispatch = useDispatch()

  const {relatedVideos, isError, error, loading } = useSelector(state => state.relatedVideos);
  

  useEffect(() => {
    dispatch(fetchRelatedVideos(queryUrl))
  }, [dispatch, queryUrl])

  let content = null;

  if (loading) content = <Loading />;
  if (!loading && isError) content = <Error error={error} />;
  if (!loading && !isError && relatedVideos?.length === 0)
    content = <p className="text-red-500">No Video Found</p>;

  if (!loading && !isError && relatedVideos?.length > 0)
    content = relatedVideos?.map(video => <RelatedVideo key={video.id} video={video}/>)


  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      {content}
    </div>
  );
};

export default RelatedVideos;
