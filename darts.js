// in its current iteration, this solution is one that passes all of the tests
// this solution has not been approved by an exercism mentor 

// pseudocode:

// input: 
// // (x, y) coordinates 
// // can be negative 

// output: 
// //a number that equals the score

// game rules: 
// // inner circle = 10 pts
// // middle circle = 5 pts
// // outer circle = 1 pt
// // off board = 0 pts

// circle widths:
// // inner circle = 1
// // middle circle = 5
// // outer circle = 10

// plan: 
// // get absolute values
// // sort by hishest to lowest 
// // return score based on highest number
// // // this plan was bad. circles don't work like that

// plan B: 
// // calculate distance from center
// // return score based on that distance 
// // found formula for distance from center of circle at this link:
// // https://www.whitman.edu/mathematics/calculus_online/section01.02.html


export const score = (x, y) => {
  const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  return ( 
    distance > 10 ? 0 : 
    distance > 5 ? 1 : 
    distance > 1 ? 5 : 
    10
  );
  // this is how I would write it but 
  // some people find ternary statements 
  // to be difficult to read.
  // I think you can get around that with 
  // the spacing that I've used here but
  // just in case, go to line 54 for 
  // a more readable return statement

  // if (distance > 10) {
  //   return 0;
  // } else if (distance > 5) {
  //   return 1;
  // } else if (distance > 1) {
  //   return 5;
  // } else {
  //   return 10;
  // }
};
