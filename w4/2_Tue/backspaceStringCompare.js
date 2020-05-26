/* 
  https://leetcode.com/problems/backspace-string-compare/

  Given two strings S and T containing only lowercase letters at "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus1: solve in O(N) time

  Examples:

    Input: S = "ab#c", T = "ad#c"
    Output: true
    Explanation: Both S and T become "ac".

    Input: S = "ab##", T = "c#d#"
    Output: true
    Explanation: Both S and T become "".

    Input: S = "a##c", T = "#a#c"
    Output: true
    Explanation: Both S and T become "c".
*/
