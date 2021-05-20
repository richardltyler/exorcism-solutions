const amino = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
}; 

const getCodons = RNA => {
  const codons = [];

  for (let i = 0; i < RNA.length; i += 3) {
    codons.push(RNA.substring(i, (i + 3)))
  }

  return codons;
};

export const translate = (RNA = '') => {
  const codons = getCodons(RNA);
  const protein = []
  
  for (const codon of codons) {
    if (!amino[codon]) {
      throw new Error('Invalid codon');

    } else if (amino[codon] === 'STOP') {
      break;

    } else {
      protein.push(amino[codon]);
    }
  }

  return protein;
};