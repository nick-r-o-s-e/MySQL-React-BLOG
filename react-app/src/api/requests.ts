import axios from "axios";
import CommentType from "../types/CommentType";
import PostType from "../types/PostType";
import NewPost from "../types/NewPost";


export const getPosts = async () => {
  const { data } = await axios.get("http://localhost:3004/posts");
  return data;
};

export const getSinglePost = async (id: number) => {
  const { data: postData } = await axios.get(
    `http://localhost:3004/posts/${String(id)}`
  );
  const postComments = await getCommentsForPost(id);
  return { ...postData, comments: [...postComments] };
};

export const getCommentsForPost = async (id: number) => {
  const { data } = await axios.get(
    `http://localhost:3004/comments/${id}`
  );
  return data;
};
export const addComment = async (comment: CommentType) => {
  await axios.post(`http://localhost:3004/comments/`, comment);
};

export const addPost = async (post: NewPost) => {
  await axios.post(`http://localhost:3004/posts`, post);
};

export const editPost = async (id: number, post: PostType) => {
  await axios.put(`http://localhost:3004/posts/${String(id)}`, post);
};



export const deletePost = async (id: number) => {
  await axios.delete(`http://localhost:3004/posts/${id}`);
  
};
export const deletePostComments = async (id: string) => {
 const allComments = await getCommentsForPost(Number(id))
 await axios.delete(`http://localhost:3004/comments?postID=4`)
    
};


