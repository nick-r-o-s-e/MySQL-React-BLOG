import { useState } from "react";
import "./Form.scss";
interface Props {
  submitForm: Function;
  postData: {
    id?: number;
    title: string;
    image: string;
    author: string;
    content: string;
  };
  setPostData: Function;
  formDisabled: boolean;
  setImageFile: Function;
}

export default function Form({
  submitForm,
  postData,
  setPostData,
  formDisabled,
  setImageFile,
}: Props) {
  const [image, setImage] = useState<string | ArrayBuffer | null>(
    postData.image
      ? postData.image
      : "http://127.0.0.1:3004/images/placeholders/image-placeholder.jpg"
  );

  const saveFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    formData.append("image", e.target.files![0]);
    formData.append("fileName", e.target.files![0].name);

    setImageFile(formData);

    const reader = new FileReader();
    reader.onload = function (event) {
      setImage(event.target!.result);
    };

    reader.readAsDataURL(e.target.files![0]);
  };

  const changeData = (
    target: HTMLInputElement,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (target.name == "image" && e) {
      saveFile(e);
    } else {
      setPostData(() => ({ ...postData, [target.name]: target.value }));
    }
  };

  return (
    <div className="new-post">
      <form
        encType="multipart/form-data"
        className="new-post__form"
        action="submit"
        method="post"
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <h1>{postData.id ? "Edit" : "New"} Post</h1>
        <hr />
        <div className="details">
          <div className="mb-3 detail title-div">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              value={postData.title}
              name="title"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              required
              placeholder=""
              onChange={(e) => {
                changeData(e.target);
              }}
            />
          </div>
          <div className="mb-3 detail author-div">
            <label htmlFor="FormControlInput2" className="form-label">
              Author
            </label>
            <input
              value={postData.author}
              name="author"
              type="text"
              id="FormControlInput2"
              className="form-control"
              placeholder=""
              required
              onChange={(e) => {
                changeData(e.target);
              }}
            />
          </div>
          <div className="mb-3  image-div">
            <div className="image-input-label">
              <label className="form-label">Image</label>
              <label className="file-upload">
                <input
                  name="image"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    changeData(e.target, e);
                  }}
                />
                Choose File
              </label>
            </div>
            <div
              className="image-placeholder"
              style={{ backgroundImage: `url(${String(image)})` }}
            ></div>
          </div>
        </div>

        <div className="mb-3 content-div">
          <label htmlFor="FormControlTextarea4" className="form-label">
            Text
          </label>
          <textarea
            id="FormControlTextarea4"
            value={postData.content}
            name="content"
            className="form-control"
            required
            onChange={(e) => {
              const target = e.target as unknown as HTMLInputElement;
              changeData(target);
            }}
          ></textarea>
        </div>
        <button disabled={formDisabled} className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
