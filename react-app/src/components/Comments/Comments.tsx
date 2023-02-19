import { useState } from "react";
import CommentForm from "./CommentForm/CommentForm";
import CommentType from "../../types/CommentType";
import PostType from "../../types/PostType";
import "./Comments.scss";
import { useQuery } from "@tanstack/react-query";
import { getCommentsForPost } from "../../api/requests";
import { TailSpin } from "react-loader-spinner";
interface Props {
  comments: CommentType[];
  postData: PostType;
}

function Comments({ comments, postData }: Props) {
  const [commentForm, setCommentForm] = useState(false);

  const { data, isLoading, refetch } = useQuery<CommentType[]>(
    ["comments", postData.id],
    () => getCommentsForPost(postData.id),
    {
      refetchInterval: 7000,
    }
  );

  if (isLoading) {
    return <TailSpin />;
  }

  if (!data) {
    return <h1>ERROR</h1>;
  }
  {
    return commentForm ? (
      <CommentForm
        setCommentForm={setCommentForm}
        postData={postData}
        refetch={refetch}
      />
    ) : (
      <div
        className="comments-div-wrapper"
        style={{ display: `${commentForm ? "none" : "auto"}` }}
      >
        <div className="comments-div">
          <div className="heading">
            <h1>Comments</h1>
            <button
              className="btn btn-light"
              onClick={() => setCommentForm(true)}
            >
              Add Comment
            </button>
          </div>

          <div className="comments">
            {[...data].reverse().map((comment) => {
              return (
                <div key={comment.id} className="comment">
                  <div
                    className="comment__image"
                    style={{
                      backgroundImage: `url(${
                        comment.image
                          ? comment.image
                          : "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                      })`,
                    }}
                  ></div>
                  <div className="comment__content">
                    <h5>{comment.username}</h5>
                    <p>{comment.text}</p>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
