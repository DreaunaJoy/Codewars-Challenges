// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
 


// solution

function mergeArrays(a, b) {
    const out = Array.from(new Set(a.concat(b)))
    out.sort((a,b) => a - b)
    return out
  }