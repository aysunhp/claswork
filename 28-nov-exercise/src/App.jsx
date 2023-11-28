import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddCategory from "./pages/AddCategory";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Header from "./components/Header";
import CategoryDetail from "./pages/CategoryDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="categories">
          <Route index element={<Categories />} />
          <Route path=":id" element={<CategoryDetail />} />
        </Route>
        <Route path="add" element={<AddCategory />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
