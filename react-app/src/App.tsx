import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import PostPreviews from "./pages/PostPreviews/PostPreviews";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import NewPostForm from "./pages/NewPost/NewPostForm";
import EditPostForm from "./pages/EditPost/EditPostForm";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostPreviews />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts/:id/edit" element={<EditPostForm />} />
        <Route path="/new-post" element={<NewPostForm />} />
      </Routes>
    </div>
  );
}

export default App;
