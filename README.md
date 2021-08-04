# FUN WITH ANAGRAMS

Given an array of strings, remove each string that is an anagram of an earlier string, then return the remaining array in sorted order.

## Example

str = ['code', 'doce', 'ecod', 'framer', 'frame']

code and doce are anagrams. Remove doce from the array and keep the first occurrence code in the array.

code and ecod are anagrams. Remove ecod from the array and keep the first occurrence code in the array.

code and framer are not anagrams. Keep both strings in the array.
framer and frame are not anagrams due to the extra r in framer. Keep both strings in the array.

Order the remaining strings in ascending order: ['code','frame','framer'].

## Check out my blog post about this problem!

https://thequeenbeebs.medium.com/cracking-the-code-challenge-fun-with-anagrams-31b8832d9d4e#350d-4daa3f9ce896