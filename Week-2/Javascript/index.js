class Circle{
    constructor(radius)
    {
        this.radius=radius;
    }

    area()
    {
        return (3.14)*(this.radius)*(this.radius);
    }
}

const circle1=new Circle(2);

console.log(circle1.area());