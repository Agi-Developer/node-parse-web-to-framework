import { parse } from "node-html-parser";
const http = require("http");
//use fs module at first to read file
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 5000;
// simple code to read file using fs module
const files = fs.readFileSync("./1630047208204.site/index.html");

const server = http.createServer((req: any, res: any) => {
  res.statusCode = 200;
  // give correct input for html
  res.setHeader("Content-Type", "text/html");
  const root = parse(files);
  // console.log(root.toString());
  res.end(`<pre>${root.toString()}</pre>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log("Done");
});

// const root = parse('<ul id="list"><li>Hello World</li></ul>');

// console.log(root.firstChild.structure);
// // ul#list
// //   li
// //     #text

// console.log(root.querySelector("#list"));
// // { tagName: 'ul',
// //   rawAttrs: 'id="list"',
// //   childNodes:
// //    [ { tagName: 'li',
// //        rawAttrs: '',
// //        childNodes: [Object],
// //        classNames: [] } ],
// //   id: 'list',
// //   classNames: [] }
// console.log(root.toString());
// // <ul id="list"><li>Hello World</li></ul>
// root.set_content("<li>Hello World</li>");
// root.toString();
