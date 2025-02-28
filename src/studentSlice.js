import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "students",
  initialState: ["강찬희", "강산", "허승이", "유경환", "김영화"],
  reducers: {
    addStudent: (state) => {
      return [...state, 새로운학생];
    },
  },
});

export const studentsSlice = slice.reducer;
export const { addStudent } = slice.actions;
