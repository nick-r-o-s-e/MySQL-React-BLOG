import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import { addPost } from "../../api/requests";
import axios from "axios";
function NewPostForm() {
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    title: "",
    author: "",
    image: "",
    content: "",
  });

  const [imageFile, setImageFile] = useState<FormData>();

  const [formDisabled, setFormDisabled] = useState(false);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormDisabled(true);
    
    if (imageFile) {
      axios.post("http://localhost:3004/upload", imageFile).then(({ data }) => {
        addPost({
          ...postData,
          image: `http://127.0.0.1:3004/images/${data}`,
        }).then(() => {
          navigate("/posts");
        });
      });
    } else {
      addPost({
        ...postData,
        image: `http://127.0.0.1:3004/images/placeholders/image-placeholder.jpg`,
      }).then(() => {
        navigate("/posts");
      });
    }
  };

  return (
    <div className="page-container">
      <Form
        formDisabled={formDisabled}
        submitForm={submitForm}
        postData={postData}
        setPostData={setPostData}
        setImageFile={setImageFile}
      />
    </div>
  );
}

export default NewPostForm;
