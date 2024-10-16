/* In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

>>> let d = new Dictionary();

>>> d.newEntry("Apple", "A fruit that grows on trees");

>>> console.log(d.look("Apple"));
A fruit that grows on trees

>>> console.log(d.look("Banana"));
Can't find entry for Banana

*/

// solution

class Dictionary extends Map {
    newEntry = this.set;
    look(key) {
      return this.get(key) ?? `Can't find entry for ${key}`;
    }
  }