const express = require("express");
const simpleGit = require("simple-git");

const app = express();

// Replace with your GitHub repository URL
const gitUrl = "https://github.com/yopiangga/express-git-pull.git";

app.get("/update-github", async (req, res) => {
  try {
    const git = simpleGit(process.cwd()); // Initialize Git instance in current directory

    // Pull the latest changes from the remote repository
    await git.pull(gitUrl);

    console.log("Repository updated successfully!");
    res.send("Repository updated successfully!");
  } catch (error) {
    console.error("Error updating repository:", error);
    res.status(500).send("Error updating repository");
  }
});

app.listen(3000, () => console.log("Server listening on port 3000"));
