import CommentType from "./types/CommentType";
import NewPost from "./types/NewPost";
import * as mysql from "mysql2";
import PostType from "./types/PostType";

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Blog",
  })
  .promise();

export const getPosts = async () => {
  const [posts] = await pool.query("SELECT * FROM Posts");
  return posts;
};

export const getPost = async (id: string) => {
  const [post] = await pool.query(
    `SELECT *
    FROM Posts
    WHERE id = ?`,
    [id]
  );
  return post[0];
};

export const getPostComments = async (id: string) => {
  const [comments] = await pool.query(
    `SELECT * FROM Comments WHERE post_id = ?`,
    [id]
  );
  return comments;
};

export const addPost = async (comment: NewPost) => {
  const { title, image, content, author } = comment;
  await pool.query(
    `
      INSERT INTO Posts (title, image, content, author)
      VALUES (?, ?, ?, ?)
    `,
    [title, image, content, author]
  );
};

export const addComment = async (comment: CommentType) => {
  const { username, image, text, post_id } = comment;
  await pool.query(
    `
      INSERT INTO Comments (username, image, text, post_id)
      VALUES (?, ?, ?, ?)
    `,
    [username, image, text, post_id]
  );
};

export const deletePost = async (id: string) => {
  await pool.query(
    `
    DELETE
    FROM Posts 
    WHERE id = ?`,
    [Number(id)]
  );
};

export const editPost = async (post: PostType) => {
  const { id, title, author, image, content } = post;
  await pool.query(
    `
    UPDATE Posts
    SET title = ?, author = ?, image = ?, content = ?
    WHERE id = ?;`,
    [title, author, image, content, id]
  );
};
