const { exec } = require("child_process");

exec("git reset --hard", (error) => {
  if (!error) {
    console.log("success");
  }
});
