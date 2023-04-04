import * as init from "./pkg/demo_wasm.js";

const runScript = () => {
  init().then(() => {
    init.greet("Hello from JavaScript!");
  });
};

export default runScript;
