import { BoxGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);

  // Switch the old "basic" material to
  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: 'purple' });

  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  // We'll rotate our object this amount per frame
  const radiansPerSecond = MathUtils.degToRad(30);

  // this method will be called once per frame
  cube.tick = (delta) => {
    // With this multiplication, for every frame, we'll rotate 30 degrees.
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;

    // 
    // cube.rotation.z += 0.01;
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
  };

  return cube;
}

export { createCube };