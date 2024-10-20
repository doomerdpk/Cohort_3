//Parent Class 

class Shape{
 
    constructor(color)
    {
        //common property in the child class. uncommon properties should be defined in the child class itself.
        this.color=color;
    }

    //All uncommon methods(functions) should be defined in the child class itself
    //Only common methods should be defined in the parent class
    whichColor()
    {
        console.log("Color of this Shape is: " + this.color)
    }
}

//Child Class 1
class Rectangle extends Shape{

    constructor(height,width,color)
    {
        //Inherited from the parent class
        //Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(color);
        this.height=height;
        this.width=width;
        
    }

    area()
    {
        return this.height*this.width;
    }
}

//Child Class 2
class Circle extends Shape{
    constructor(radius,color)
    {
        super(color);
        this.radius= radius;   
    }

    area()
    {
        return (3.14)*(this.radius)*(this.radius);
    }
}

//This will not work as it will blue color to object 1
//const shape1=new Shape("Blue");
const rect = new Rectangle(2,3,"Blue");
console.log(rect.area());
rect.whichColor();

const circ = new Circle(7,"red");
console.log(circ.area());
circ.whichColor();
