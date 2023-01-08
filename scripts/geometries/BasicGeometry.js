export default class BasicGeometry {
  constructor(width = 500, height = 200) {
    this.width = width;
    this.height = height;

    this.data = [
      0,
      0,
      0,
      //
      0,
      this.height,
      0,
      //
      this.width,
      this.height,
      0,
      //
      this.width,
      this.height,
      0,
      //
      this.width,
      0,
      0,
      //
      0,
      0,
      0,
    ];
  }
}
