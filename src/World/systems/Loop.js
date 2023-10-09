import { Clock } from "three"

// use clock to calculate duration of frame.
const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick();

      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {

    // NOTE: only call delta at once at the very start of a frame.
    // tells us how much time has passed since the last time we called `.getDelta()`
    const delta = clock.getDelta();

    // Code to update animations will go here
    for (const object of this.updatables) {
      // access the tick method (triggering animated behaviour) for the object that needs to be updated.
      object.tick(delta);
    }
  }
}

export { Loop };