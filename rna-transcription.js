const nucleotides = {
  G: `C`,
  C: `G`,
  T: `A`,
  A: `U`
};

export const toRna = (DNA = '') => {
  let newRNA = '';

  for (const nucleotide of DNA) {
    newRNA = newRNA + nucleotides[nucleotide];
  };
  
  return newRNA;
};

// I've found a  solution using the array prototype method .reduce()
// I've heard that .reduce() is difficut to read 
// so use with caution 

// export const toRna = (DNA = '') => {
//   DNA = DNA.split('')

//   return DNA.reduce((acc, nucleotide) => {
  
//     acc = acc + nucleotides[nucleotide];
  
//     return acc;
//   }, '');
// };
