import "./Form.scss";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    <div className="post-form__wrapper">
      <form
        encType="multipart/form-data"
        className="post-form"
        action="submit"
        method="post"
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <h1 className="post-form__heading">{postData.id ? "Edit" : "New"} Post</h1>

        <hr />

        <div className="post-form__details">
          <div className="post-form__details__header-info">
            <div className="mb-3 detail">
              <label htmlFor="exampleFormControlInput1" className="form-label detail__label">
                Title
              </label>

              <input 
                value={postData.title}
                name="title"
                type="text"
                className="form-control detail__input"
                id="exampleFormControlInput1"
                required
                placeholder=""
                onChange={(e) => {
                  changeData(e.target);
                }}
              />
            </div>

            <div className="mb-3 detail">
              <label htmlFor="FormControlInput2" className="form-label detail__label">
                Author
              </label>

              <input
                value={postData.author}
                name="author"
                type="text"
                id="FormControlInput2"
                className="form-control detail__input"
                placeholder=""
                required
                onChange={(e) => {
                  changeData(e.target);
                }}
              />
            </div>
          </div>

          <div className="mb-3  detail-image">
            <div className="detail-image__label">
              <label className="form-label detail__label">Image</label>

              <label className="file-upload">
                <input
                  name="image"
                  type="file"
                  className="detail__input"
                  placeholder=""
                  onChange={(e) => {
                    changeData(e.target, e);
                  }}
                />
                Upload
              </label>
            </div>

            <div
              className="detail-image__placeholder"
              style={{ backgroundImage: `url(${String(image)})` }}
            ></div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="FormControlTextarea4" className="form-label detail__label">
            Text
          </label>

          <textarea
            id="FormControlTextarea4"
            value={postData.content}
            name="content"
            className="form-control detail__input detail__input-text"
            required
            onChange={(e) => {
              const target = e.target as unknown as HTMLInputElement;
              changeData(target);
            }}
          ></textarea>
        </div>

        <button disabled={formDisabled} className="btn btn-dark submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
