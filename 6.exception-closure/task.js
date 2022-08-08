function parseCount(number) {
    let result = Number.parseInt(number);
    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch(error){
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (b + c) < a || (a + c) < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

getPerimeter() { 
    return this.a + this.b + this.c;
    }

getArea() {
    const p = this.getPerimeter() / 2;
    return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
}
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
      return {
        getArea: () => "Ошибка! Треугольник не существует",
        getPerimeter: () => "Ошибка! Треугольник не существует"
      }
    }
}





       

