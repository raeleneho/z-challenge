export const capitalizeFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const extractFirstInitial = (fullName: string): string => {
  const nameParts = fullName.split(" ");
  if (nameParts.length === 0 || nameParts[0].length === 0) {
    return "";
  }
  const firstInitial = nameParts[0][0].toUpperCase();
  return firstInitial;
};
