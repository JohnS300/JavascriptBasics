//Need to understand better

// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return {value:n, done:false};
      }
    };
  }
  
  // Create Iterable
  const n = myNumbers();
  n.next(); // 10
  n.next(); // 20
  n.next(); // 30
  
  console.log(n.next());