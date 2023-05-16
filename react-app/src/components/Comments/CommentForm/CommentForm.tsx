import "./CommentForm.scss";
import { useState } from "react";
import PostType from "../../../types/PostType";
import { addComment } from "../../../api/requests";

interface Props {
  postData: PostType;
  setCommentForm: Function;
  refetch: Function;
}

function CommentForm({ postData, setCommentForm, refetch }: Props) {
  const [commentData, setCommentData] = useState({
    username: "",
    image: "",
    text: "",
    post_id: String(postData.id),
  });
  const [formDisabled, setFormDisabled] = useState(false);

  const changeData = (target: HTMLInputElement) => {
    setCommentData(() => ({ ...commentData, [target.name]: target.value }));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    setFormDisabled(true);
    e.preventDefault();
    addComment(commentData).then(() => {
      setCommentForm(false);
      refetch();
    });
  };

  return (
    <form
      action="submit"
      className="comment-form"
      onSubmit={(e) => submitForm(e)}
    >
      <h1 className="comment-form__heading">New Comment</h1>

      <div className="comment-form__info">
        <div className="mb-3 comment-form__info__input">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Author
          </label>

          <input
            value={commentData.username}
            name="username"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=""
            required
            onChange={(e) => changeData(e.target)}
          />
        </div>

        <div className="mb-3 comment-form__info__input">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            User Image url (Not Required)
          </label>

          <input
            value={commentData.image}
            name="image"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=""
            onChange={(e) => changeData(e.target)}
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Comment
        </label>

        <input
          value={commentData.text}
          name="text"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=""
          required
          onChange={(e) => changeData(e.target)}
        />
      </div>

      <div className="comment-form__btns">
        <button
          className="btn btn-danger action-btn"
          onClick={() => {
            setCommentForm(false);
          }}
        >
          Cancel
        </button>

        <button
          disabled={formDisabled}
          type="submit"
          className="btn btn-dark action-btn"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
