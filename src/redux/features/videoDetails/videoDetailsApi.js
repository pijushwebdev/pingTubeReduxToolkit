import axiosInstance from "../../../utils/axios";



export const getVideo = async (id) => {
    const video = await axiosInstance.get(`/videos/${id}`);

    return video.data;
}