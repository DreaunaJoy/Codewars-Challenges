//A triangle is called an equable triangle if its area equals its perimeter. Return true, if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle. Happy Coding!

//solution

function equableTriangle(a,b,c) {
    var heron = (a+b+c)/2;
    return Math.sqrt(heron*(heron - a)*(heron - b)*(heron - c)) == heron*2;
  }