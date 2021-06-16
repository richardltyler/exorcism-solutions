// in its current iteration, this solution is one that passes all of the tests
// this solution has not been approved by an exercism mentor 

export class Matrix {
  constructor(str) {
    this.rows = this.getRows(str);
    this.columns = this.getColumns();
  };

  getRows(str) {
    const arr = str.split('\n');
    const arrOfArrs = arr.map(group => group.split(' '));

    return arrOfArrs.map(arr => arr.map(num => parseInt(num)));
  };

  getColumns() {
    return this.rows[0].map((num, i) => {
      return this.rows.map(row => row[i]);
    });

    // this method solves at o(n^2)
    // I **think** that is possible to solve this for o(1) by using a recursive function 
  };
};