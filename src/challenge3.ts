abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number){
        super();
        this.width = width;
        this.height = height
    }

    area(): number {
        return this.width * this.height
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number){
        super();
        this.radius = radius
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Test the implementation
const r = new Rectangle(4, 5);
const c = new Circle(3);
console.log(r.area());      // Expected: 20
console.log(r.perimeter()); // Expected: 18
console.log(c.area());      // Expected: ~28.2743
console.log(c.perimeter()); // Expected: ~18.8496