// return trimmed string or null, can also return other if empty is set
export const stringFormatter = (str, empty = null) => {
  // only work on string
  if (typeof str === 'string' || str instanceof String) {
    if (str.trim() !== '') {
      return str.trim();
    }
    return empty;
  }
  return str;
};

export const phoneNumberFormatter = (number) => {
  let newNumber;
  if (number && !/^\s*$/.test(number)) {
    newNumber = number.trim().replace(/[^0-9]+/g, '');
    if (newNumber.length === 10) {
      newNumber = `${newNumber.slice(0, 3)}-${newNumber.slice(3, 6)}-${newNumber.slice(6, 10)}`;
    } else if (newNumber.length === 11 && newNumber[0] === '1') {
      newNumber = `${newNumber.slice(1, 4)}-${newNumber.slice(4, 7)}-${newNumber.slice(7, 11)}`;
    } else {
      newNumber = number;
    }
  } else {
    return number;
  }
  return newNumber;
};
