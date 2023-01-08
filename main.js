import Color from "./scripts/code/Color.js";
import Mesh from "./scripts/Mesh.js";
import Renderer from "./scripts/Renderer.js";

const renderer = new Renderer();

//Creation
const mesh = new Mesh({
  color: Color.LightBlue(),
});
renderer.AddMesh(mesh);

renderer.Render();
