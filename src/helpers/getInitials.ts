export const getInitials = (name: string): string => {
  const splitedName = name.split(' ');
  if (splitedName.length > 0)
    return `${splitedName[0][0]}${splitedName.length > 1 ? splitedName[1][0] : splitedName[1][1]}`;
  return '';
};
