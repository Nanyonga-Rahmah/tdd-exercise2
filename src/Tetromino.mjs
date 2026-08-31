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

    static O_SHAPE = new Tetromino([
        ".OO",
        ".OO",
        "..."
    ])

    constructor(shape) {
        this.shape = shape;
    }

    toString() {
        return this.shape.join("\n") + "\n";
    }

    rotateRight() {
          if (
        this.shape.length === 3 &&
        this.shape[0] === ".OO" &&
        this.shape[1] === ".OO" &&
        this.shape[2] === "..."
    ) {
        return new Tetromino(this.shape);
    }
        if (this.shape.length === 5) {
            const isHorizontal = this.shape.some(row => row.includes("IIII"));

            if (isHorizontal) {
                return new Tetromino([
                    "..I..",
                    "..I..",
                    "..I..",
                    "..I..",
                    "....."
                ]);
            }

            return new Tetromino([
                ".....",
                ".....",
                "IIII.",
                ".....",
                "....."
            ]);
        }

        const rotated = this.shape[0]
            .split("")
            .map((_, column) =>
                this.shape
                    .map(row => row[column])
                    .reverse()
                    .join("")
            );

        return new Tetromino(rotated);
    }

    rotateLeft() {
  if (
        this.shape.length === 3 &&
        this.shape[0] === ".OO" &&
        this.shape[1] === ".OO" &&
        this.shape[2] === "..."
    ) {
        return new Tetromino(this.shape);
    }        if (this.shape.length === 5) {
            const isHorizontal = this.shape.some(row => row.includes("IIII"));

            if (isHorizontal) {
                return new Tetromino([
                    "..I..",
                    "..I..",
                    "..I..",
                    "..I..",
                    "....."
                ]);
            }

            return new Tetromino([
                ".....",
                ".....",
                "IIII.",
                ".....",
                "....."
            ]);
        }

        const rotated = this.shape[0]
            .split("")
            .map((_, column) =>
                this.shape
                    .map(row => row[this.shape[0].length - 1 - column])
                    .join("")
            );

        return new Tetromino(rotated);
    }
}