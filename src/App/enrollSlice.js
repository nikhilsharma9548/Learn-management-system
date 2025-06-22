import { createSlice } from "@reduxjs/toolkit";

const enrollSlice = createSlice({
  name: "enroll",
  initialState: {
    enrolledCourses: [],
  },
  reducers: {
    addCourse(state, action) {
  const exists = state.enrolledCourses.find(course => 
    course.id === action.payload.id || course._id === action.payload._id
  );

  if (!exists) {
    state.enrolledCourses.push(action.payload);
  }
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
