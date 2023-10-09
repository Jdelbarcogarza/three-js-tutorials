import { DirectionalLight, AmbientLight, HemisphereLight, LightProbe } from 'three';

function createLights() {
  // Create a directional light
  // const light = new DirectionalLight('white', 10);
  const light = new HemisphereLight("blue", "red", 8)
  

  // move the light right, up, and towards us
  light.position.set(10, 10, 10);

  return light;
}

export { createLights };
