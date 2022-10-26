---
sidebar_position: 1
---

# Getting Started

Below are the methods to get started using Espruino Tools

## NPX Tool

This is by far the easiest way to get started with espruino tools, start by running the code below in the terminal

```zsh
npx create-espruino-app {directory}
```

_where `directory` is where you want your app to be built, this could be `my-first-espruino-app` for example to create a new directory called my-first-espruino-app in the directory you are currently in, alternatively you could pass `.` in as the directory to build the app in the current directory._

From here you can navigate to the desired directory and run `npm start` to start your development server

### Additional optional NPX tags

You can follow your npx command with `--template {template}` to get started with a familar template, examples of the templates supported are:

- typescript
- react
- vue

### Example of usage

below is an example of creating a typescript espruino app called my-first-espruino-app

```
npx create-espruino-app my-first-espruino-app --template typescript
```

## NPM Package

If the NPX tool isnt suitable for your use case you can always just import the package with npm shown below.

```
npm install @espruino-tools/device-controller
```

### Importing the package

the npm package by default comes with 4 possible imports `DeviceController`, `Puck`, `Pixl` and `Bangle`

an example below imports the base DeviceController class, which can be used to build your own custom classes

```javascript
import { DeviceController } from "@espruino-tools/device-controller";
```
