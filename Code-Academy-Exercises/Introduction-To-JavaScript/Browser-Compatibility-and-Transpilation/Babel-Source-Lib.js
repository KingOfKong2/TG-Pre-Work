{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1";
    "build":"babel src -d lib";
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}

/* This lesson taught us to specify the build script inside our package.json
We can target the src directory, the output type, and location.
*/
