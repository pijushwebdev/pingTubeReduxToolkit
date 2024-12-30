import axios from "../../../utils/axios"


export const getVideos = async (tags, search) => {

    let queryStr = '';
    if(tags?.length > 0){
        queryStr += tags?.map(tag => `tags_like=${tag}`).join('&');
    }

    if(search !== ''){
        queryStr += `&q=${search}`
    }

    const videos = await axios.get(`/videos?${queryStr}`);

    return videos.data;
}