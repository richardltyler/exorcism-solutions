const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export const isPangram = (str = '') => {
   str = str.toLowerCase();
   const alphaArr = alphabet.split('');

   for (const i of Object.keys(str)) {
    const index = alphaArr.indexOf(str[i]);

    index !== -1 && alphaArr.splice(index, 1);
   };

   return !alphaArr.length;
};


