import { useState } from "react";
import PostType from "../../../types/PostType";
import "./CommentForm.scss";
import { useNavigate } from "react-router-dom";
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

  const changeData = (target: HTMLInputElement) => {
    setCommentData(() => ({ ...commentData, [target.name]: target.value }));
  };

  const [formDisabled, setFormDisabled] = useState(false);

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
      <h1>New Comment</h1>
      <div className="mb-3 title-div">
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
      <div className="mb-3 title-div">
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
      <div className="mb-3 title-div">
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
      <div className="buttons">
        <button disabled={formDisabled} type="submit" className="btn btn-dark">
          Submit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            setCommentForm(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
