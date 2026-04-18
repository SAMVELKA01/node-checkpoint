const fs = require("fs");

// 1️⃣ créer le fichier
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File created!");

  // 2️⃣ lire le fichier
  fs.readFile("welcome.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Content:", data);
  });
});