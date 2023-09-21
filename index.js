const { exec } = require("child_process");

exec("ls -la", (e, o) => {
  console.log(o);
  console.log("running");
});
