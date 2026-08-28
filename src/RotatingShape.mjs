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
}