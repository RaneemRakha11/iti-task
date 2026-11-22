
export class MathUtils {
  static PI = 3.14159; 

  static square(n) {
    return n * n;
  }

  static cube(n) {
    return n ** 3;
  }

  static isEven(n) {
    return n % 2 === 0;
  }
}
