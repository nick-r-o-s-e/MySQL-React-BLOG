import { getSinglePost } from "../../api/requests";
import PostType from "../../types/PostType";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ExtendedPost from "../../components/ExtendedPost/ExtendedPost";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function Post() {
  const { id: searchID } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery<PostType>(["post", searchID], () =>
    getSinglePost(Number(searchID)!)
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!data) {
    return <h1>something went wrong</h1>;
  }
  const { image, title, author, content, id, comments } = data;

  return (
    <div className="page-container">
      <ExtendedPost
        postData={data}
        comments={comments}
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
