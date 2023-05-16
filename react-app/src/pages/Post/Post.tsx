import { getSinglePost } from "../../api/requests";
import PostType from "../../types/PostType";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ExtendedPost from "../../components/ExtendedPost/ExtendedPost";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../utils/toaster";

function Post() {
  const { id: searchID } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery<PostType>(["post", searchID], () =>
    getSinglePost(Number(searchID)!)
  );

  if (isLoading) {
    return (
      <div className="page-container">
        <LoadingSpinner />
      </div>
    );
  }

  if (!data) {
    notify("Oops, something went wrong");
    return (
      <div className="page-container not-found">
        <h1>404 not found...</h1>
      </div>
    );
  }

  const { image, title, author, content, id } = data;

  return (
    <div className="page-container">
      <ExtendedPost
        postData={data}
        id={id}
        image={image}
        title={title}
        author={author}
        content={content}
      />
    </div>
  );
}

export default Post;
