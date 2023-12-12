import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addBlog, getName, getContent } from "../../redux/slices/blogSlice";
import Navbar from "../../components/Navbar";

const AddBlog = () => {
  const name = useSelector((state) => state.blog.name);
  const content = useSelector((state) => state.blog.content);
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{
          width: "50%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          justifyContent: "center",
          marginBottom: "300px",
        }}
      >
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
          style={{
            width: "70%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "300px",
          }}
        >
          <input
            type="text"
            placeholder="Enter new blog name"
            value={name}
            onChange={(e) => {
              dispatch(getName(e.target.value));
            }}
            style={{
              width: "50%",
              height: "30px",
              borderRadius: "7px",
              borderColor: "lightgray",
              marginBottom: "20px",
              padding: "10px",
            }}
          />
          <input
            type="text"
            placeholder="Enter new blog content"
            value={content}
            onChange={(e) => {
              dispatch(getContent(e.target.value));
            }}
            style={{
              width: "50%",
              height: "30px",
              borderRadius: "7px",
              borderColor: "lightgray",
              marginBottom: "20px",
              padding: "10px",
            }}
          />
          <button
            type="submit"
            onClick={() => {
              dispatch(addBlog());
              dispatch(getName(""));
              dispatch(getContent(""));
            }}
            style={{
              width: "15%",
              height: "40px",
              borderRadius: "7px",
              backgroundColor: "lightblue",
              borderColor: "lightblue",
              padding: "10px",
            }}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
