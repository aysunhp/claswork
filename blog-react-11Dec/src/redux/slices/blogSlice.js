// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // export const getAllBlogs = createAsyncThunk("getAllBlogs", async () => {
// //   const response = await axios("https://northwind.vercel.app/api/products");
// //   return response.data;
// // });

// const initialState = {
//   name: "",
//   content: "",
//   blogs: [],
//   error: "",
//   loading: false,
// };

// export const blogSlice = createSlice({
//   name: "blog",
//   initialState,
//   reducers: {
//     addBlog: (state, action) => {
//       let obj = {
//         name: state.name,
//         content: state.content,
//       };

//       axios.post("https://65707df409586eff66418003.mockapi.io/api/blogs", obj);

//       state.name = " ";
//       state.content = "";
//     },
//     getName: (state, action) => {
//       state.name = action.payload;
//       console.log(action.payload);
//     },
//     getContent: (state, action) => {
//       state.content = action.payload;
//     },
//     deleteBlog: (state, action) => {
//       console.log(action.payload);
//       axios.delete(
//         "https://65707df409586eff66418003.mockapi.io/api/blogs/" +
//           action.payload
//       );
//     },
//     editBlog: (state, action) => {
//       // axios.delete(
//       //   "https://65707df409586eff66418003.mockapi.io/api/blogs/",
//       //   action.payload.id
//       // );
//     },
//   },

//   // extraReducers: (builder) => {
//   //   builder.addCase(getAllBlogs.pending, (state, action) => {
//   //     state.loading = true;
//   //   });
//   //   builder.addCase(getAllBlogs.fulfilled, (state, action) => {
//   //     state.loading = false;
//   //     state.blogs = action.payload;
//   //   });
//   //   builder.addCase(getAllBlogs.rejected, (state, action) => {
//   //     state.loading = false;
//   //     state.error = action.payload;
//   //   });

//   // post prod
//   // builder.addCase(postProduct.pending, (state, action) => {
//   //   state.loading = true;
//   // });
//   // builder.addCase(postProduct.fulfilled, (state, action) => {
//   //   state.loading = false;
//   //   state.postProd = action.payload;
//   // });
//   // builder.addCase(postProduct.rejected, (state, action) => {
//   //   state.loading = false;
//   //   state.error = action.payload;
//   // });
//   // },
// });

// export const { addBlog, getContent, getName, deleteBlog, editBlog } =
//   blogSlice.actions;

// export default blogSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    addBlog: async (state, action) => {
      try {
        let obj = {
          name: state.name,
          content: state.content,
        };

        await axios.post(
          "https://65707df409586eff66418003.mockapi.io/api/blogs",
          obj
        );

        state.name = " ";
        state.content = "";
      } catch (error) {
        console.error("Error adding blog:", error.message);
        // Handle error, you might want to update state.error here
      }
    },
    getName: (state, action) => {
      state.name = action.payload;
      console.log(action.payload);
    },
    getContent: (state, action) => {
      state.content = action.payload;
    },
    deleteBlog: (state, action) => {
      console.log(action.payload);
      axios.delete(
        "https://65707df409586eff66418003.mockapi.io/api/blogs/" +
          action.payload
      );
    },
    editBlog: (state, action) => {
      // axios.delete(
      //   "https://65707df409586eff66418003.mockapi.io/api/blogs/",
      //   action.payload.id
      // );
    },
  },
});

export const { addBlog, getContent, getName, deleteBlog, editBlog } =
  blogSlice.actions;

export default blogSlice.reducer;
