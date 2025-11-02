/* Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.


Example:

[10,10,10,18,20,20] --> 12

 */

//solution

function passed (list) { 
    var c=0;
    var d=0;
    for (var i=0; i<list.length; ++i)
      if (list[i]<=18)
      {
        c++;
        d+=list[i];
      }
    return c==0?'No pass scores registered.':Math.round(d/c);
  } 