import { Link } from "react-router-dom";
import PostType from "../../types/PostType";
import { deletePost } from "../../api/requests";
import "./ExtendedPost.scss";
import { useNavigate } from "react-router-dom";
import Comments from "../Comments/Comments";

interface Props extends PostType {
  postData: PostType;
}

function ExtendedPost({
  image,
  title,
  author,
  content,
  comments,
  id,
  postData,
}: Props) {
  const navigate = useNavigate();

  const deletePage = (id: number) => {
    deletePost(id).then(() => {
      navigate("/posts");
    });
  };

  return (
    <div className="post-page">
      <div className="post">
        <div className="post__image__comments">
          <img src={image} alt="" />
          <Comments comments={comments} postData={postData} />
        </div>
        <div className="post__content">
          <h1>{title}</h1>
          <h3>{author}</h3>
          <hr />
          <p>{content}</p>
          <div className="actions">
            <Link to={`./edit`}>
              <button className="btn btn-warning ">EDIT</button>
            </Link>
            <button className="btn btn-danger " onClick={() => deletePage(id)}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtendedPost;
