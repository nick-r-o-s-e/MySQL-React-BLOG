import "./PostPreviewCard.scss";
import { NavLink } from "react-router-dom";
interface Props {
  title: string;
  content: string;
  image: string;
  id: number;
}

function PostPreviewCard({ title, content, image, id }: Props) {
  return (
    <div className="card">
      <div
        className="image-div card-img-top"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content.slice(0, 150)}...</p>
        <NavLink className="btn btn-dark" to={`/posts/${id}`}>
          Read more
        </NavLink>
      </div>
    </div>
  );
}

export default PostPreviewCard;
