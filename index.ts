const fs = require("fs");
const { exec } = require("child_process");
const websiteUrl = "https://www.google.com";

var directoryPath = `sites/${Date.now()}`;
exec(
  `node-site-downloader download -s ${websiteUrl} -d ${websiteUrl} -o ${directoryPath} -v --include-images`,
  (err: any, stdout: any, stderr: any) => {
    if (err) {
      console.log(err);
    }
  }
);
