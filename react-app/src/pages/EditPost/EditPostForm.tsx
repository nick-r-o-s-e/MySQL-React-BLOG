import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PostType from "../../types/PostType";
import { getSinglePost } from "../../api/requests";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import axios from "axios";
import { editPost } from "../../api/requests";

function EditPostForm() {
  const [formDisabled, setFormDisabled] = useState(false);
  const [imageFile, setImageFile] = useState<FormData>();
  const { id: searchID } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<PostType>(["post", searchID], () =>
    getSinglePost(Number(searchID)!)
  );
  const [postData, setPostData] = useState<PostType>(data!);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!data) {
    return <h1>something went wrong</h1>;
  }

  const { id } = data;

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    setFormDisabled(true);
    e.preventDefault();

    if (imageFile) {
      axios.post("http://localhost:3004/upload", imageFile).then(({ data }) => {
        editPost(id, {
          ...(postData || data),
          image: `http://127.0.0.1:3004/images/${data}`,
        }).then(() => {
          navigate(`/posts/${id}`);
        });
      });
    } else {
      editPost(id, {
        ...(postData || data),
      }).then(() => {
        navigate(`/posts/${id}`);
      });
    }
  };
  return (
    <div className="page-container">
      <Form
        setImageFile={setImageFile}
        formDisabled={formDisabled}
        submitForm={submitForm}
        postData={postData || data}
        setPostData={setPostData}
      />
    </div>
  );
}

export default EditPostForm;
