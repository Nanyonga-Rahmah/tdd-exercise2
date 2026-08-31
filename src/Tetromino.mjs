export class Tetromino {
    static T_SHAPE = new Tetromino([
        ".T.",
        "TTT",
        "..."
    ]);
      static I_SHAPE = new Tetromino([
        ".....",
        ".....",
        "IIII.",
        ".....",
        "....."
    ]);
  
    constructor(shape) {
        this.shape = shape;
    }
    toString() {
        return this.shape.join("\n") + "\n";
    }
    rotateRight() {
        const rotated = this.shape[0].split("").map((_, column) => this.shape.map(row => row[column]).reverse().join(""));
        return new Tetromino(rotated);
    }
    rotateLeft() {
        const rotated = this.shape[0].split("").map((_, column) => this.shape.map(row => row[this.shape[0].length - 1 - column]).join(""));
        return new Tetromino(rotated);
    }
}

