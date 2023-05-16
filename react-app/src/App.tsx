import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import PostPreviews from "./pages/PostPreviews/PostPreviews";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import NewPostForm from "./pages/NewPost/NewPostForm";
import EditPostForm from "./pages/EditPost/EditPostForm";
import { ToastContainer } from "react-toastify";

const navs = [
  ["Home", "/"],
  ["Posts", "/posts"],
  ["New Post", "/new-post"],
];

function App() {
  return (
    <div className="main-container">
      <Navbar navs={navs} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostPreviews />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts/:id/edit" element={<EditPostForm />} />
        <Route path="/new-post" element={<NewPostForm />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
