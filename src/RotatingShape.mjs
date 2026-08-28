export class RotatingShape {
    constructor(shape) {
        this.shape = shape;
    }

    static fromString(input) {
        const rows = input
            .trim()
            .split("\n")
            .map((row) => row.trim());

        return new RotatingShape(rows);
    }

    toString() {
        return this.shape.join("\n") + "\n";
    }
    rotateLeft() {
        const rotated = this.shape[0]
            .split("")
            .map((_, column) =>
                this.shape.map(row => row[this.shape[0].length - 1 - column]).join("")
            );

        return new RotatingShape(rotated);
    }

}