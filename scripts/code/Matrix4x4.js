export default class Matrix4x4 {
  data = [
    1, 0, 0, 0,
    //
    0, 1, 0, 0,
    //
    0, 0, 1, 0,
    //
    0, 0, 0, 1,
  ];

  static identity() {
    return new Matrix4x4();
  }

  static orthoGraphic(left, right, bottom, top, far, near) {
    let m = new Matrix4x4();

    let lr = 1.0 / (left - right);
    let bt = 1.0 / (bottom - top);
    let nf = 1.0 / (far - near);

    m.data[0] = -2.0 * lr;
    m.data[5] = -2.0 * bt;
    m.data[10] = 2.0 * nf;

    m.data[12] = (left + right) * lr;
    m.data[13] = (top + bottom) * bt;
    m.data[14] = (far + near) * nf;

    return m;
  }

  static translation(vector) {
    const m = new Matrix4x4();

    m.data[12] = vector.x;
    m.data[13] = vector.y;
    m.data[14] = vector.z;

    return m;
  }

  get data() {
    return this.data;
  }
}
