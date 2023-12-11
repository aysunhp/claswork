import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const { Meta } = Card;
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBlog, editBlog } from "../../redux/slices/blogSlice";
import Navbar from "../../components/Navbar";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);
  const [fakeBlogs, setFakeBlogs] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editId, setEditId] = useState("");
  useEffect(() => {
    axios
      .get("https://65707df409586eff66418003.mockapi.io/api/blogs")
      .then((res) => {
        setBlogs(res.data);
        setFakeBlogs(res.data);
      });
  }, [blogs, clicked]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://65707df409586eff66418003.mockapi.io/api/blogs"
  //       );
  //       setBlogs(response.data);
  //       setFakeBlogs(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error.message);
  //     }
  //   };

  //   fetchData();
  // }, [blogs, clicked]);
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>My Blog</h1>
      {/* <div
        className="buttons"
        style={{
          margin: "20px auto",
          width: "60%",
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "20px",
        }}
      >
        <Button
          onClick={() => {
            let updated = fakeBlogs.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            setBlogs(updated);
          }}
        >
          Sort by Name
        </Button>
        <Button
          onClick={() => {
            let updated = fakeBlogs.sort((a, b) =>
              a.content.localeCompare(b.content)
            );
            setBlogs(updated);
          }}
        >
          Sort by Content
        </Button>
      </div> */}
      <div
        className="buttons"
        style={{
          margin: "20px auto",
          width: "60%",
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "20px",
        }}
      >
        <Button
          onClick={() => {
            let updated = fakeBlogs.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            setBlogs(updated);
          }}
        >
          Sort by Name
        </Button>
        <Button
          onClick={() => {
            let updated = fakeBlogs.sort((a, b) =>
              a.content.localeCompare(b.content)
            );
            setBlogs(updated);
          }}
        >
          Sort by Content
        </Button>
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
              setEdit(false);
              let obj = {
                name: editName,
                content: editContent,
                id: editId,
              };
              let updated = blogs.filter((item) => item.id != editId);
              updated.push(obj);

              setBlogs(updated);
              axios.put(
                "https://65707df409586eff66418003.mockapi.io/api/blogs/" +
                  editId,
                obj
              );
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
        {blogs &&
          blogs.map((blogItem) => {
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
                      setClicked(!clicked);
                      let updatedBlog = blogs.filter(
                        (item) => item.id != blogItem.id
                      );
                      setBlogs(updatedBlog);
                      // dispatch(deleteBlog(blogItem.id));
                      axios.delete(
                        "https://65707df409586eff66418003.mockapi.io/api/blogs/" +
                          blogItem.id
                      );
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
