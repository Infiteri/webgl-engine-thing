import Buffer, { AttributeInfo } from "./code/Buffer.js";
import Color from "./code/Color.js";
import Matrix4x4 from "./code/Matrix4x4.js";
import Shader from "./code/Shader.js";
import { Vector3 } from "./code/Vector3.js";
import BasicGeometry from "./geometries/BasicGeometry.js";
import { gl } from "./Renderer.js";

export default class Mesh {
  constructor({
    shader = new Shader("BasicShader"),
    geometry = new BasicGeometry(),
    color = new Color(),
  }) {
    //Reference
    this.shader = shader;
    this.geometry = geometry;
    this.color = color;

    this.width = this.geometry.width;
    this.height = this.geometry.height;

    //Stuff
    this.buffer = new Buffer(3);
    this.buffer.PushBackData(this.geometry.data);

    //Positional data
    this.positionAttribute = new AttributeInfo(0, 0, 3);
    this.buffer.AddAttribute(this.positionAttribute);

    this.position = new Vector3(100, 100, 1);

    //Upload stuff
    this.buffer.Upload();
    this.buffer.Unbind();
  }

  Draw(view) {
    this.shader.Use();

    //Do stuff to color mesh
    gl.uniform4fv(this.shader.colorLocation, this.color.ToFloatArray());

    const projectionLocation = this.shader.GetUniformLocation("projection");
    gl.uniformMatrix4fv(projectionLocation, false, new Float32Array(view.data));

    const modelLocation = this.shader.GetUniformLocation("model");
    gl.uniformMatrix4fv(
      modelLocation,
      false,
      new Float32Array(Matrix4x4.translation(this.position).data)
    );

    //Work and stuff
    this.buffer.Bind();
    this.buffer.Draw();
  }
}
