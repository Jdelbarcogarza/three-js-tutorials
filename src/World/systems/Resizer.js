
const setSize = (container, camera, renderer) => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  constructor(container, camera, renderer) {

    // set initial size on load
    setSize(container, camera, renderer)

    window.addEventListener("resize", () => {
      // call function when resize takes place
      setSize(container, camera, renderer);

      // custom actions
      this.onResize();
    })
  }

  // .onResize is an empty method that we can customize from outside the Resizer class.
  onResize() {}
}

export { Resizer };
