const resistors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

export const colorCode = color => resistors[color];

export const COLORS = Object.keys(resistors);

// I thought of a different and better way to do this
// basically the resistors object above is an inverse of what an array really is so I used an actual array this time
// it also cuts down on memory by assigning fewer variables

// export const COLORS = [
//   'black',
//   'brown',
//   'red',
//   'orange',
//   'yellow',
//   'green',
//   'blue',
//   'violet',
//   'grey',
//   'white'
// ];

// export const colorCode = color => COLORS.indexOf(color);
