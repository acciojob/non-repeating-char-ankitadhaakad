function firstNonRepeatedChar(str) {
  const charCount = new Map();

  // Count frequency of each character
  for (let ch of str) {
    charCount.set(ch, (charCount.get(ch) || 0) + 1);
  }

  // Find first character with count 1
  for (let ch of str) {
    if (charCount.get(ch) === 1) {
      return ch;
    }
  }

  // If none found
  return null;
}

// Usage example (uncomment if running in browser):
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input));

