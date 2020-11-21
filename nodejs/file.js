const fs = require("fs");

const users = JSON.parse(fs.readFileSync("./users.json"));

users[0].name = "Lindsey Graham";

fs.writeFileSync("./users-modified.json", JSON.stringify(users));
