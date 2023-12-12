import React, { useEffect, useState } from "react";
import { Card, Button, Input } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const { Meta } = Card;
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBlog, editBlog, setBlog } from "../../redux/slices/blogSlice";
import Navbar from "../../components/Navbar";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editId, setEditId] = useState("");
  const [sortedPosts, setSortedPosts] = useState(blogs);
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");

  console.log(blogs);
  console.log(sortedPosts);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://65707df409586eff66418003.mockapi.io/api/blogs"
        );
        dispatch(setBlog(response.data));
      } catch (error) {
        console.error("Error posts", error);
      }
    };

    fetchPosts;
  }, [dispatch]);

  const sortBlogs = () => {
    const sorted = [...blogs].sort((a, b) => {
      if (sortOrder == "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    const filteredBlogs = sorted.filter((blog) =>
      blog.name.toLowerCase().includes(search.toLowerCase())
    );
    setSortedPosts(filteredBlogs);
  };

  useEffect(() => {
    sortBlogs();
  }, [sortOrder, blogs, search]);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>My Blog</h1>
      <div
        className="buttons"
        style={{
          margin: "20px auto",
          width: "60%",
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "20px",
          gap: "40px",
        }}
      >
        <Button
          onClick={() => {
            setSortOrder(sortOrder == "asc" ? "desc" : "asc");
          }}
        >
          Sort {sortOrder == "asc" ? "Z-A" : "A-Z"}
        </Button>
        <Input
          placeholder="Search Blog"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></Input>
      </div>
      <div
        className="containerr-form"
        style={{ display: edit ? "block" : "none" }}
      >
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <input
            type="text"
            placeholder="Edit blog name"
            value={editName}
            onChange={(e) => {
              setEditName(e.target.value);
            }}
            style={{
              width: "50%",
              height: "30px",
              borderRadius: "7px",
              borderColor: "lightgray",
              marginBottom: "20px",
            }}
          />
          <input
            type="text"
            placeholder="Edit content"
            value={editContent}
            onChange={(e) => {
              setEditContent(e.target.value);
            }}
            style={{
              width: "50%",
              height: "30px",
              borderRadius: "7px",
              borderColor: "lightgray",
              marginBottom: "20px",
            }}
          />
          <button
            type="submit"
            onClick={() => {
              try {
                setEdit(false);
                let obj = {
                  name: editName,
                  content: editContent,
                  id: editId,
                };
                dispatch(editBlog({ id: editId, obj: obj }));

                axios.put(
                  "https://65707df409586eff66418003.mockapi.io/api/blogs/" +
                    editId,
                  obj
                );
              } catch (error) {
                console.error("Error editing blog", error);
              }
            }}
            style={{
              width: "10%",
              height: "30px",
              borderRadius: "7px",
              backgroundColor: "lightblue",
              borderColor: "lightblue",
            }}
          >
            Edit
          </button>
        </form>
      </div>

      <div
        className="containerr"
        style={{
          width: "70%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-evenly",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {sortedPosts &&
          sortedPosts.map((blogItem) => {
            return (
              <Card
                key={uuidv4()}
                hoverable
                style={{
                  width: 240,
                }}
              >
                <h2>{blogItem.name} </h2>
                <p>{blogItem.content} </p>
                <div
                  className="btns"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                  }}
                >
                  <DeleteIcon
                    style={{ color: "red" }}
                    onClick={() => {
                      try {
                        axios.delete(
                          "https://65707df409586eff66418003.mockapi.io/api/blogs/" +
                            blogItem.id
                        );
                        dispatch(deleteBlog(blogItem.id));
                      } catch (error) {
                        console.error("Error deleting blog", error);
                      }
                    }}
                  />
                  <EditIcon
                    style={{ color: "green" }}
                    onClick={() => {
                      setEdit(true);
                      setEditId(blogItem.id);
                      setEditName(blogItem.name);
                      setEditContent(blogItem.content);
                    }}
                  />
                </div>
              </Card>
            );
          })}
      </div>
    </>
  );
};
export default Home;
