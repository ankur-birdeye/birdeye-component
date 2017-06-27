var fs = require("fs");
var resolve = require("path").resolve;
var join = require("path").join;
var cp = require("child_process");

// get library path
var lib = resolve(__dirname, "packages");

fs.readdirSync(lib).forEach(function(mod) {
  var modPath = join(lib, mod);
  // ensure path has package.json
  if (!fs.existsSync(join(modPath, "package.json"))) return;

  console.log("Runnig npm install on " + modPath);
  // install folder
  cp.execSync("npm install", {
    cwd: modPath,
    env: process.env,
    stdio: "inherit"
  });

  //cp.spawn('npm', ['i'], { env: process.env, cwd: modPath, stdio: 'inherit' })
});
