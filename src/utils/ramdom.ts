export const generateThreeDigitNumber = (): number => {
  return Math.floor(Math.random() * 900) + 100;
};

export const generateMonthNumber = (): string => {
  const month = Math.floor(Math.random() * 12) + 1;
  return month.toString().padStart(2, '0');
};

export const generateNumberBetween26And30 = (): number => {
  return Math.floor(Math.random() * 5) + 26;
};

export const generate16DigitCardNumber = (): string => {
  let cardNumber = '';
  for (let i = 0; i < 16; i++) {
    cardNumber += Math.floor(Math.random() * 10).toString();
  }
  return cardNumber;
};

export const generateRandomName = (): string => {
  const firstNames = [
    "Arpit", "Olivia", "Liam", "Emma", "Noah", "Ava", "Sophia", "Elijah", "Mia", "Lucas"
  ];

  const lastNames = [
    "Anand", "Smith", "Johnson", "Brown", "Taylor", "Anderson", "Thomas", "Moore", "Martin", "Clark"
  ];

  const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirst} ${randomLast}`;
};
