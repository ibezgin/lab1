const { exec } = require("child_process");

exec("git reset --hard", (e, o) => {
  console.log(o);
  console.log("running");
});
