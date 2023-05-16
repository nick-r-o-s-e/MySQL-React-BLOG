import "./PostPreviews.scss";
import { useQuery } from "@tanstack/react-query";
import PostType from "../../types/PostType";
import PostPreviewCard from "../../components/PostPreviewCard/PostPreviewCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getPosts } from "../../api/requests";
import notify from "../../utils/toaster";

function PostPreviews() {
  const { data, isLoading } = useQuery<PostType[]>(["posts"], getPosts);

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

  return (
    <div className="page-container">
      <div className="posts">
        <div className="post-previews">
          {data.map((post) => {
            const { id, image, title, author, content } = post;
            return (
              <PostPreviewCard
                image={image}
                key={id}
                id={id}
                title={title}
                content={content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PostPreviews;
