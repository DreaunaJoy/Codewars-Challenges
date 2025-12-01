/* This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

Write a function calculating perimeter of a Triangle defined this way.

 */

//solution

function trianglePerimeter(ᐃ) {
    let ab = Math.hypot(ᐃ.a.x-ᐃ.b.x, ᐃ.a.y-ᐃ.b.y)
    let bc = Math.hypot(ᐃ.b.x-ᐃ.c.x, ᐃ.b.y-ᐃ.c.y)
    let ca = Math.hypot(ᐃ.c.x-ᐃ.a.x, ᐃ.c.y-ᐃ.a.y)
    return ab + bc + ca
  }
  