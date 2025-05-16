const fs = require("fs");

const writereadStream = fs.createWriteStream("./stream/output.txt");
const readStream = fs.createReadStream("./stream/input.txt", {
  highWaterMark: 15,
  encoding: "utf-8",
});

readStream.on("readable", () => {
  let chunk;
  while ((chunk = readStream.read()) !== null) {
    process.stdout.write(`[${chunk}]\n`);
    writereadStream.write(`${chunk}\n`);
  }
});
