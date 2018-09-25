class SimpleCalculator {
    constructor(value=0) {
        this.value = value;
    }

    add(n) {
        this.value += n;
        return this;
    }

    subtract(n) {
        this.value -= n;
        return this;
    }

    multiply(n) {
        this.value *= n;
        return this
    }

    divide(n) {
        this.value /= n;
        return this;
    }
}

const calc = new SimpleCalculator();

console.log(calc.add(12).multiply(2).divide(2));