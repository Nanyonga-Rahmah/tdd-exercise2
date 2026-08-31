
export class Tetromino {
    static T_SHAPE = new Tetromino([
        ".T.",
        "TTT",
        "..."
    ]);

    constructor(shape) {
        this.shape = shape;
    }

    toString() {

    return this.shape.join("\n") + "\n";
   }
}

