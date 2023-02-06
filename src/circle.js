// A `Circle` class/function that can be invoked as :
// const c = new Circle();
// It should contain at least 3 hidden fields `x`, `y`, and `radius`.
export class Circle{
  #x;
  #y;
  #radius;
  
  constructor(x = 0, y = 0, radius = 1) {
    this.#x = x;
    this.#y = y;
    this.#radius = radius;
    
  }

  get coords() {
    return [this.#x, this.#y];
  }

  moveTo(x, y) {
    this.#x = x;
    this.#y = y;
  }

  get radius() {
    return this.#radius;
  }

  set radius(radius)
  {
    if(typeof radius !== 'number' || radius < 0){ 
      throw new Error('radius doit etre un nombre positif');
    }
    this.#radius = radius;
  }

  get area() {
    return Math.PI * this.#radius * this.#radius;
  }

  set area(area) {
    if (typeof area !== 'number' || area < 0) {
        throw  new Error(' Area doit etre un nombre positif');
    }
    this.radius = Math.sqrt(area / Math.PI);
  }

  static distance(circle1, circle2){
    const [x1, y1] = circle1.coords;
    const [x2, y2] = circle2.coords;
    const dx = x1- x2;
    const dy = y1- y2;

    return Math.sqrt(dx**2  +  dy**2);
  }
  
  static doIntersect(circle1, circle2) {
    return (circle1.radius + circle2.radius) > Circle.distance(circle1, circle2);
  }

}





