import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LectureInfoState {
  title: string;
  videoFile: File | null;
}

const initialState: LectureInfoState = {
  title: "",
  videoFile: null,
};

const lectureInfoSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {
    lectureTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    lectureVideoFile: (state, action: PayloadAction<File | null>) => {
      state.videoFile = action.payload;
    },
    default: () => initialState,
  },
});

export const { lectureTitle, lectureVideoFile } = lectureInfoSlice.actions;
export default lectureInfoSlice.reducer;
