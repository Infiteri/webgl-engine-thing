import Matrix4x4 from "./code/Matrix4x4.js";

export const gl = document.querySelector("canvas").getContext("webgl2");

export default class Renderer {
  constructor() {
    this.canvas = document.querySelector("canvas");

    this.elements = [];

    this.view = Matrix4x4.orthoGraphic(
      0,
      this.canvas.width,
      this.canvas.height,
      0,
      1000,
      -1000.0
    );

    this.color = [0, 0, 0];
  }

  AddMesh(m) {
    this.elements.push(m);
  }

  Render() {
    requestAnimationFrame(this.Render.bind(this));

    //color
    gl.clearColor(this.color[0], this.color[1], this.color[2], 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    //Render elements
    this.elements.forEach(e => {
      e.Draw(this.view);
    });
  }
}
