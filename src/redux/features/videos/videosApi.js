import axios from "../../../utils/axios"


export const getVideos = async () => {
    const videos = await axios.get('/videos');

    return videos.data;
}