import axiosInstance from "../../../utils/axios";



export const getTags = async () => {
    const tags = await axiosInstance.get('/tags');

    return tags.data;
}