import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

// This is the equivalent of declaring private attributes to the World class;
let camera;
let scene;
let renderer;
let loop;

class World {
  
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    
    container.append(renderer.domElement);

    const cube = createCube();
    const light = createLights();

    loop.updatables.push(cube);

    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);
    
    // when onResize is triggered by the Resizer class, we trigger functionality for the World class.
    // CURRENTLY NOT USED BECAUSE OF ANIMATION LOOP.
    // resizer.onResize = () => {
    //   this.render();
    // }

  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }

}


export { World };