class Rectangle {
    constructor(breadth, length) {
        this.breadth = breadth;
        this.length = length;
    }

    area() {
        return this.breadth * this.length;
    }

    perimeter() {
        return 2 * this.breadth + 2 * this.length;
    }
}

const rect1 = new Rectangle(2, 4);
const rect2 = new Rectangle(5, 10);
console.log(rect1.area());
console.log(rect1.perimeter())
console.log(rect2.area());
console.log(rect2.perimeter());
