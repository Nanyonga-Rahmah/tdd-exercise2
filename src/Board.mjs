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
 
}
