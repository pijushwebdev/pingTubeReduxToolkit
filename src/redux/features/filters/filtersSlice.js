import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [],
    search: ''
}

const filtersSlice = createSlice({
    name: 'filterTags',
    initialState,
    reducers: {
        selectedTags: (state, action) => {
            state.tags.push(action.payload)
        },
        removedTag: (state, action) => {
            const indexOfTag = state.tags.indexOf(action.payload);
            if(indexOfTag !== -1){
                state.tags.splice(indexOfTag, 1)
            }
        },
        searched: (state,action) => {
            state.search = action.payload;
        }
    },
})


export default filtersSlice.reducer;

export const { selectedTags, removedTag, searched } = filtersSlice.actions;
