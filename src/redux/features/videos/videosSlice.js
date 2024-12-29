import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosApi"



const initialState = {
    loading: false,
    videos: [],
    isError: false,
    error: ''
}

//create async thunk function for fetching data
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
    const videos = await getVideos();
    return videos;
})

const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchVideos.pending, (state) => {
            state.loading = true;
            state.isError = false
        })
        .addCase(fetchVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.videos = action.payload
        })
        .addCase(fetchVideos.rejected, (state,action) => {
            state.loading = false;
            state.isError = true;
            state.videos = [];
            state.error = action.error?.message
        })
    }
})


export default videosSlice.reducer;
