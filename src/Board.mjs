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
    const shape = tetromino.shape;
    const col = Math.floor((this.width - shape[0].length) / 2);

    shape.forEach((row, r) => {
        row.split("").forEach((cell, c) => {
            if (cell !== ".") this.grid[r][col + c] = cell;
        });
    });
}
 
}
