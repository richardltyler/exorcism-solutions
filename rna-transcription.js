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
