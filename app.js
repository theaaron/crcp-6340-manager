import express from "express";
import * as utils from "./utils/utils.js";
import { projectInfo } from "./build/1-project-bundle/projectMeta.js";

const app = express();
const port = 8081;

app.use(express.static("public"));

app.post("/build-sequence", async (req, res) => {
  await utils
    .completeBuildAndDeploySequence()
    .then(() => {
      res.send({ result: "full sequence completed" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: "failure running full sequence" });
    });
});
