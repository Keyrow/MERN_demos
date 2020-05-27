// https://www.hackerrank.com/challenges/the-time-in-words/problem

/**
 * timeInWords(hours, minutes)
 * 5:00 -> five o' clock
 * 5:01 -> one minute past five
 * 5:10 -> ten minutes past five
 * 5:15 -> quarter past five
 * 5:30 -> half past five
 * 5:40 -> twenty minutes to six
 * 5:45 -> quarter to six
 * 5:47 -> thirteen minutes to six
 * 5:28 -> twenty eight minutes past five
 * 12:45 -> quarter to one
 * 12:00 -> twelve o' clock
 *
 * note the pattern of using 'past' or 'to'
 */

const timeWords = [
  "o' clock",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "quarter",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty one",
  "twenty two",
  "twenty three",
  "twenty four",
  "twenty five",
  "twenty six",
  "twenty seven",
  "twenty eight",
  "twenty nine",
  "half",
];

// Time: O(1) constant
// Space: O(1)
function timeInWords(h, m) {
  let hour = h,
    min = m,
    temporalPreposition = "past",
    minuteNoun = "minutes ";

  // calc minutes til next hour and increment hour
  if (min > 30) {
    min = 60 - m;
    // increment from 12 to 1, otherwise increment by 1
    hour = h === 12 ? 1 : h + 1;
    temporalPreposition = "to";
  }

  if (min == 15 || min == 30) {
    minuteNoun = "";
  } else if (min == 1) {
    minuteNoun = "minute ";
  }

  const hourWord = timeWords[hour],
    minWord = timeWords[min];
  return min === 0
    ? `${hourWord} ${minWord}`
    : `${minWord} ${minuteNoun}${temporalPreposition} ${hourWord}`;
}
