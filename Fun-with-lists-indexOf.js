/* Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

 */

//solution

function indexOf(node, value) {
    var i = 0;
    while (node !== null) {
      if (node.data === value) return i;
      node = node.next;
      ++i;
    }
    return -1;
  }