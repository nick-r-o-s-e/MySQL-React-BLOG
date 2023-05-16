import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import {
  getPosts,
  getPost,
  getPostComments,
  addComment,
  addPost,
  deletePost,
  editPost,
} from "./database.js";

import multer from "multer";
import * as path from "path";
import * as fs from "fs";

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));
app.use(express.static("./public"));

//! Use of Multer
const storage = multer.diskStorage({
  destination: (_, __, callBack) => {
    callBack(null, "./public/images/");
  },
  filename: (_, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});
/////

app.post("/upload", upload.single("image"), (req: Request, res: Response) => {
  res.send(req.file.filename);
});

app
  .route("/posts")
  .get((_: Request, res: Response) => {
    getPosts().then((posts) => {
      res.send(posts);
    });
  })
  .post((req: Request, res: Response) => {
    addPost(req.body).then(() => {
      res.sendStatus(201);
    });
  });

app
  .route("/posts/:id")
  .get((req: Request, res: Response) => {
    getPost(req.params.id).then((post) => {
      res.json(post);
    });
  })
  .put((req: Request, res: Response) => {
    editPost(req.body).then(() => {
      res.sendStatus(200);
    });
  })
  .delete((req: Request, res: Response) => {
    getPost(req.params.id).then((post) => {
      if (!post.image.includes("placeholders/")) {
        fs.unlink(
          `./public/images/${post.image.split("images/")[1]}`,
          (err) => {
            err && console.log(err);
          }
        );
      }
    });
    deletePost(req.params.id).then(() => {
      res.sendStatus(200);
    });
  });

app.post("/comments/", (req: Request, res: Response) => {
  addComment(req.body).then(() => {
    res.sendStatus(201);
  });
});

app.get("/comments/:id", (req: Request, res: Response) => {
  getPostComments(req.params.id).then((comments) => {
    res.json(comments);
  });
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
