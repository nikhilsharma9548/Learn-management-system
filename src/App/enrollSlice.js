import { createSlice } from "@reduxjs/toolkit";

const enrollSlice = createSlice({
  name: "enroll",
  initialState: {
    enrolledCourses: [],
  },
  reducers: {
    addCourse(state, action) {
      state.enrolledCourses.push(action.payload);
    },
    removeCourse(state, action) {
      state.enrolledCourses = state.enrolledCourses.filter(
        course => course.id !== action.payload
      );
    },
  },
});

export const { addCourse, removeCourse } = enrollSlice.actions;
export default enrollSlice.reducer;
