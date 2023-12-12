import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  name: "",
  content: "",
  blogs: [],
  error: "",
  loading: false,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlog: (state, action) => {
      state.blogs = action.payload;
    },
    addBlog: async (state, action) => {
      try {
        let obj = {
          name: state.name,
          content: state.content,
        };

        state.blogs.push(obj);

        await axios.post(
          "https://65707df409586eff66418003.mockapi.io/api/blogs",
          obj
        );


      } catch (error) {
        console.error("Error adding blog:", error.message);

      }

      // state.name = "";
      // state.content = "";
    },
    getName: (state, action) => {
      state.name = action.payload;
    },
    getContent: (state, action) => {
      state.content = action.payload;
    },
    deleteBlog: (state, action) => {
      console.log(action.payload);
      state.blogs = [...state.blogs].filter(item => item.id != action.payload)
      // axios.delete(
      //   "https://65707df409586eff66418003.mockapi.io/api/blogs/" +
      //     action.payload
      // );
    },
    editBlog: (state, action) => {

      let updated = [...state.blogs].filter((item) => item.id != action.payload.id);
      updated.push(action.payload.obj);
      state.blogs = [...updated]

    },
  },


});

export const { addBlog, getContent, getName, deleteBlog, editBlog, setBlog } =
  blogSlice.actions;

export default blogSlice.reducer;

