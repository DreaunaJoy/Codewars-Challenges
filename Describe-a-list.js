// Write function describeList which returns "empty" if the list is empty or "singleton" if it contains only one element or "longer"" if more.

//solution

function describeList(x) {
    if (x.length === 0) return "empty"
    if (x.length > 1) return "longer"
    else return "singleton"
  
  }