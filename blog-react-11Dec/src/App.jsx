import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { useDispatch } from "react-redux";
import { setBlog } from "./redux/slices/blogSlice";
import React, { useEffect } from "react";
import axios from "axios";

const router = createBrowserRouter(routes);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = () => {
      axios
        .get("https://65707df409586eff66418003.mockapi.io/api/blogs")
        .then((response) => {
          dispatch(setBlog(response.data));
        })
        .catch((error) => {
          console.log("Error posts", error);
        });
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;
