import CommentType from "./CommentType";

interface PostType {
  id: number;
  image: string;
  title: string;
  author: string;
  content: string;
  comments: CommentType[];
}

export default PostType;
