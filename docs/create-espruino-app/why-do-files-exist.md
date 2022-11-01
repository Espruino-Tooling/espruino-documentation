---
sidebar_position: 2
description: What are the files in my directory doing?
---

# File Structure explained

Sometimes file directories are confusing my hopes here are to clear any confusion up.

## node_modules

The node_modules folder is present in every nodejs application, it contains data relating to each library required to run your application.

## public

### index.html

This is your main html file, this is where you will add elements and structure your site.

## src

### styles

_This folder is not present when using `--clean-install` tag._

#### app.scss

if you dont know scss is a css preprocessor, in simple terms this just means css with added features.

You can write normal css in here or visit [here](here) to see the official scss documentation and start using it in your projects .

### espruino-template.js

_This file is not present when using `--clean-install` tag._

This is some basic javascript to show a splash screen with showing basic functionality of the package, this can be built on top of or completely removed from the directory

### index.js

This is the main javascript file that is given to the HTML file, any code you want to use in your HTML file should be exported in this file.

## configs

### .gitignore

.gitignore is a simple file that restricts certain files from going into your git repo, in this case we are removing `node_modules`, `lib`, `.DS_Store`, `test-env` & `.husky/pre-commit`.

This can be changed in any way you want without changing functionality. I will however recommend you leave node_modules in here or your git repository will have unnessesary files in it.

### package-lock.json & package.json

These files specify what packages, run commands and some basic configuration for your project.

If you dont know much about this file id recommend just leaving it as it.

### README.md

This includes a simple welcome message with some text explaining how to get started

### webpack.build.config.js

This file allows for your project to be compressed into a single js and html file,

In here you can change your apps name under `library`.

besides this you probably will never need to touch this file.

### webpack.config.js

This file allows for your project to be ran on localhost

In here you can change your apps name under `library`.

besides this you probably will never need to touch this file.
