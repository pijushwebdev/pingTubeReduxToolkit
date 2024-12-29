import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTags } from "./tagsApi";


const initialState = {
    loading: false,
    tags: [],
    isError: false,
    error: ''
}

//create async thunk function for fetching data
export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const tags = await getTags();
    return tags;
})

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTags.pending, (state) => {
            state.loading = true;
            state.isError = false
        })
        .addCase(fetchTags.fulfilled, (state, action) => {
            state.loading = false;
            state.tags = action.payload
        })
        .addCase(fetchTags.rejected, (state,action) => {
            state.loading = false;
            state.isError = true;
            state.tags = [];
            state.error = action.error?.message
        })
    }
})


export default tagsSlice.reducer;
