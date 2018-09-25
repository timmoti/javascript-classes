class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.fround(Math.PI * this.radius ** 2).toFixed(1);
    }

    perimeter() {
        return Math.fround(2 * Math.PI * this.radius).toFixed(1);
    }
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);
const circle3 = new Circle(3);

console.log(circle1.area());
console.log(circle1.perimeter());
console.log(circle2.area());
console.log(circle2.perimeter());
console.log(circle3.area());
console.log(circle3.perimeter());
