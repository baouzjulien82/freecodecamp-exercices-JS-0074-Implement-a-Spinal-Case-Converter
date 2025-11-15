// code initial
const spinalCase = (string) => {
  const regex = /(?=[A-Z])|\s+|_/;
  const words = string.split(regex).join("-").toLowerCase();
  console.log(words);
  return words;
};

spinalCase("This Is Spinal Tap");

// correction
const spinalCase = str =>
  str
    .split(/(?:\s+|_+|(?=[A-Z]))/)
    .filter(Boolean)
    .join("-")
    .toLowerCase();
