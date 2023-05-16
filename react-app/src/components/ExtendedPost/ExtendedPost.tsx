import "./ExtendedPost.scss";
import { Link } from "react-router-dom";
import PostType from "../../types/PostType";
import { deletePost } from "../../api/requests";
import { useNavigate } from "react-router-dom";
import Comments from "../Comments/Comments";

interface PostTypeWithData extends PostType {
  postData: PostType;
}

type Props = Omit<PostTypeWithData, "comments">;

function ExtendedPost({ image, title, author, content, id, postData }: Props) {
  const navigate = useNavigate();

  const deletePage = (id: number) => {
    deletePost(id).then(() => {
      navigate("/posts");
    });
  };

  return (
    <div className="post-page">
      <div className="post">
        <div className="post__content">
          <div className="header">
            {!image.includes("placeholders/") && (
              <div
                className="header__image"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
            )}

            <div className="header__title">
              <h1 className="header__title__heading">{title}</h1>
              <h3 className="header__title__author">{author}</h3>
            </div>
          </div>

          <hr />

          <p className="post__content__text">{content}</p>

          <div className="post__content__actions">
            <Link to={`./edit`}>
              <button className="btn btn-warning ">EDIT</button>
            </Link>

            <button className="btn btn-danger " onClick={() => deletePage(id)}>
              DELETE
            </button>
          </div>
        </div>

        <Comments postData={postData} />
      </div>
    </div>
  );
}

export default ExtendedPost;
