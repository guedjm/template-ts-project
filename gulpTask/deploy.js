"use strict";

const fs = require("fs");
const gulp = require("gulp");
const runSequence = require("run-sequence");

gulp.task("push-success", function (cb) {
  const pkg = JSON.parse(fs.readFileSync("./package.json"));
  console.log("Version " + pkg.version + " successfully pushed !");
});

gulp.task("push", function (cb) {
  runSequence(
    "format",
    "lint",
    "clean",
    "build",
    "test",
    "bump",
    "exec-commit",
    "exec-push",
    "push-success",
    cb);
});