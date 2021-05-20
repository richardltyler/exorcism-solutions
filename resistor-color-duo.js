const resistors = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

export const decodedValue = ([colorA, colorB]) => (resistors.indexOf(colorA) * 10) + resistors.indexOf(colorB);

