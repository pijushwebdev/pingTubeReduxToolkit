import axiosInstance from "../../../utils/axios";


export const getRelatedVideos = async (cUrl) => {
    const tags = await axiosInstance.get(`/videos?${cUrl}`);

    return tags.data;
}