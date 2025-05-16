const fs = require("fs");

// const readFile = (error, data) => {
//   if (error) {
//     console.log("ERROR membaca data");
//     return;
//   }
//   console.log(data);
// };

// fs.readFile("./filesystem/notes.txt", "utf-8", readFile);

//versi 2

// const readFileAsy = fs.readFileSync("./filesystem/notes.txt","utf-8");
// console.log(readFileAsy);

const readableStream = fs.createReadStream("./filesystem/notes.txt", () => {
  highWaterMark: 10;
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    console.log("Erorr:", error);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
