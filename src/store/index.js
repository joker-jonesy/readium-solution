import { configureStore } from "@reduxjs/toolkit";
import authorsSlice from "../features/authors/authorsSlice";
import singleAuthorSlice from "../features/singleAuthor/singleAuthorSlice";
import singleStorySlice from "../features/singleStory/singleStorySlice";
import storiesSlice from "../features/stories/storiesSlice";

const store = configureStore(
  {
  reducer: {
    authors: authorsSlice,
    stories: storiesSlice,
    singleStory: singleStorySlice,
    singleAuthor: singleAuthorSlice,
  },
}
);

export default store;
