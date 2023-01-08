export class Vector3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  ToArray() {
    return [this.x, this.y, this.z];
  }

  ToFloat32Array() {
    return new Float32Array(this.ToArray());
  }
}
