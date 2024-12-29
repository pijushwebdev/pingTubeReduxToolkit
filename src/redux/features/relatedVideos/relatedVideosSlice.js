import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedVideos } from "./relatedVideosApi";



const initialState = {
    loading: false,
    relatedVideos: [],
    isError: false,
    error: ''
}

//create async thunk function for fetching data
export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchRelatedVideos', async (cUrl) => {
    const relatedVideos = await getRelatedVideos(cUrl);
    return relatedVideos;
})

const relatedVideosSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRelatedVideos.pending, (state) => {
            state.loading = true;
            state.isError = false
        })
        .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.relatedVideos = action.payload
        })
        .addCase(fetchRelatedVideos.rejected, (state,action) => {
            state.loading = false;
            state.isError = true;
            state.relatedVideos = [];
            state.error = action.error?.message
        })
    }
})


export default relatedVideosSlice.reducer;
