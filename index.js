const { exec } = require("child_process");

exec("git reset --hard", (error) => {
  if (!error) {
    console.log("success reseted");
  }
});

exec("git checkout production", (error) => {
  if (!error) {
    console.log("success checkout");
  }
  exec("git merge development", (error) => {
    if (!error) {
      console.log("success merged");
    }
  });
});
