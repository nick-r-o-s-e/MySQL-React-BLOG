import "./Comments.scss";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCommentsForPost } from "../../api/requests";
import CommentForm from "./CommentForm/CommentForm";
import CommentType from "../../types/CommentType";
import PostType from "../../types/PostType";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

interface Props {
  postData: PostType;
}

function Comments({ postData }: Props) {
  const [commentForm, setCommentForm] = useState(false);

  const { data, isLoading, refetch } = useQuery<CommentType[]>(
    ["comments", postData.id],
    () => getCommentsForPost(postData.id),
    {
      refetchInterval: 7000,
    }
  );

  if (isLoading) {
    return (
      <div className="comments-wrapper">
        <LoadingSpinner />
      </div>
    );
  }

  if (!data) {
    return <h1>ERROR</h1>;
  }

  return (
    <div className="comments-wrapper">
      {commentForm ? (
        <CommentForm
          setCommentForm={setCommentForm}
          postData={postData}
          refetch={refetch}
        />
      ) : (
        <div className="comments">
          <div className="comments__header">
            <h1 className="heading-comments">Comments</h1>

            <button
              className="add-comment-btn btn btn-light"
              onClick={() => setCommentForm(true)}
            >
              Add
            </button>
          </div>

          <div className="comments__list">
            {[...data].reverse().map((comment, i) => {
              return (
                <div key={comment.id} className={`comment ${i == data.length-1 ? "comment-last" : ""}`}>
                  <div className="comment__image-wrapper">
                    <img
                      src={comment.image}
                      alt=""
                      className="comment__image"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src =
                          "http://127.0.0.1:3004/images/placeholders/user-image-placeholder.png";
                      }}
                    />
                  </div>

                  <div className="comment__content">
                    <h5 className="comment__content__author">
                      {comment.username}
                    </h5>

                    <p className="comment__content__text">{comment.text}</p>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Comments;
