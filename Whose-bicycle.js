/* I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

{
  'algebra': 6,
  'history': 8,
  'physics': 9,
  'geography': 2,
  'chemistry': 9
}
Return please :

'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
If two or three sons have the same highest marks, you need to choose the younger one. Use the ageTable object which is preloaded:

ageTable = {
            'firstSonAge': 14,
            'secondSonAge': 9,
            'thirdSonAge': 8
}

*/

//solution

function whoseBicycle(diary1, diary2, diary3) {
    const total1 = Object.values(diary1).reduce((total, currentValue) => total + currentValue);
    const total2 = Object.values(diary2).reduce((total, currentValue) => total + currentValue);
    const total3 = Object.values(diary3).reduce((total, currentValue) => total + currentValue);
  
    if (total1 > total2 && total1 > total3) {
      return 'I need to buy a bicycle for my first son.';
    } else if (total2 >= total1 && total2 > total3) {
      return 'I need to buy a bicycle for my second son.';
    } else if (total3 >= total1 && total3 >= total2) {
      return 'I need to buy a bicycle for my third son.';
    }
  }