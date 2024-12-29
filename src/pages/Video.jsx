import Player from "../components/videoDescription/Player";
import Description from "../components/videoDescription/Description";
import RelatedVideos from "../components/relatedVideos/relatedVideos";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoDetails } from "../redux/features/videoDetails/videoDetailsSlice";
import { useEffect } from "react";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";

const Video = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideoDetails(videoId));
  }, [dispatch, videoId]);

  const { video, loading, isError, error } = useSelector(
    (state) => state.video
  );

  const { id, title, link, tags } = video || {};

  let content = null;

  if (loading) content = <Loading />;
  if (!loading && isError) content = <Error error={error} />;
  if (!loading && !isError && !video.id)
    content = <p className="text-red-500">No Video Found</p>;

  if (!loading && !isError && video)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player link={link} title={title} />
          <Description video={video} />
        </div>

        <RelatedVideos currentVideoId={id} tags={tags} />
      </div>
    );

  return (
    <>
      {/* Videos part */}
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
};

export default Video;
