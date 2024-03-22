const Application = require("./app/server.js");
new Application();
const { init } = require('glitch-deploy-helper')

async function main() {
  await init()
}

main()