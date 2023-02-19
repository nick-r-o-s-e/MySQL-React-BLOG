import { useQuery } from "@tanstack/react-query";
import PostType from "../../types/PostType";
import PostPreviewCard from "../../components/PostPreviewCard/PostPreviewCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./PostPreviews.scss";
import { getPosts } from "../../api/requests";
function PostPreviews() {
  const { data, isLoading } = useQuery<PostType[]>(["posts"], getPosts);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!data) {
    return <h1>something went wrong</h1>;
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
