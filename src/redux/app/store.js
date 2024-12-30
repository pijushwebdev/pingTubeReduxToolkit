import { configureStore } from "@reduxjs/toolkit";
import videosReducer from '../features/videos/videosSlice'
import {createLogger} from 'redux-logger'
import tagsReducer from '../features/tags/tagsSlice'
import videoDetailsReducer from '../features/videoDetails/videoDetailsSlice'
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice'
import filtersReducer from '../features/filters/filtersSlice'

const logger = createLogger();

const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagsReducer,
        video: videoDetailsReducer,
        relatedVideos: relatedVideosReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;