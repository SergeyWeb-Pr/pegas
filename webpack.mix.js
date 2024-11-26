// webpack.mix.js
let mix = require("laravel-mix");
require("mix-html-builder");

mix.html({
  htmlRoot: "./src/*.html", // Your html root file(s)
  output: "/", // The html output folder
  partialRoot: "./src/partials", // default partial path
  layoutRoot: "./src/layouts", // default partial path
  inject: true,
});

mix.sass("src/styles/main.scss", "dist/css").options({
  processCssUrls: false,
});
mix.browserSync({
  watch: false,
  server: {
    baseDir: "./",
    index: "index.html",
  },
  notify: false,
  reloadOnRestart: false, 
});

mix.js("src/app.js", "js");
