import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideo } from "./videoDetailsApi";

const initialState = {
    loading: false,
    video: {},
    isError: false,
    error: ''
}

//create async thunk function for fetching data
export const fetchVideoDetails = createAsyncThunk('video/fetchVideoDetails', async (id) => {
    const video = await getVideo(id);
    return video;
})

const videoDetailsSlice = createSlice({
    name: 'videoDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchVideoDetails.pending, (state) => {
            state.loading = true;
            state.isError = false
        })
        .addCase(fetchVideoDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.video = action.payload
        })
        .addCase(fetchVideoDetails.rejected, (state,action) => {
            state.loading = false;
            state.isError = true;
            state.video = {};
            state.error = action.error?.message
        })
    }
})


export default videoDetailsSlice.reducer;
