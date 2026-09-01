export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.grid = Array.from(
      { length: height },
      () => Array(width).fill(".")
    );
  }
  toString() {
    return this.grid
      .map(row => row.join(""))
      .join("\n") + "\n";
  }

  drop(tetromino) {
    this.tetromino = tetromino;
    this.row = 0;
    this.col = Math.floor((this.width - tetromino.shape[0].length) / 2);
    this.draw();
  }

  draw() {
    this.grid = Array.from({ length: this.height }, () => Array(this.width).fill("."));
    this.tetromino.shape.forEach((row, r) => row.split("").forEach((cell, c) => { if (cell !== ".") this.grid[this.row + r][this.col + c] = cell; }));
  }
 canMoveDown() {
  return this.tetromino.shape.every((row, r) =>
    row.split("").every((cell, c) =>cell === "." || this.row + r + 1 < this.height
    ));}
  tick() {
    if (this.canMoveDown()) {
      this.row++;
      this.draw();
    }
  }
}
