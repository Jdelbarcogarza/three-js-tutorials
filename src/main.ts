import { World } from './World/World.js'

function main() {
  const container = document.querySelector('#scene-container');

  const world = new World(container);

  // start animation loop
  world.start();

  // render a single frame
  // world.render();
}

main();