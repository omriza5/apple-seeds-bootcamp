const fs = require("fs");

/* Create file  */
fs.writeFileSync("newFile.txt", "Hello There");

/* Append to file */
fs.appendFileSync("newFile.txt", " Its Me");

/* Copy file */
fs.copyFileSync("./newFile.txt", "./copyFile.txt");

/** Rename Original File */
fs.rename("./newFile.txt", "./newName.txt", (err) => {
  if (err) throw err;

  console.log("Rename complete");
});

/** Get all files names in current directory */
fs.readdir("./", (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});

/** Read file */
fs.readFile("./newName.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
