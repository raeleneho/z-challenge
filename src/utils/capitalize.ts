export const capitalizeFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const extractFirstInitial = (fullName: string): string => {
  return fullName.split(" ")[0][0];
};
