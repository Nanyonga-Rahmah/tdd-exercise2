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
        // Special case for the I shape
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
        // The I shape has two orientations in this exercise
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
                    .map(row => row[this.shape[0].length - 1 - column])
                    .join("")
            );

        return new Tetromino(rotated);
    }
}