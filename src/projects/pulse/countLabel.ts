type CountNoun = "visit" | "appointment";

export function countNoun(count: number, noun: CountNoun) {
  return count === 1 ? noun : `${noun}s`;
}

export function countLabel(count: number, noun: CountNoun) {
  return `${count} ${countNoun(count, noun)}`;
}
