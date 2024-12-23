# Subtle Bug in NaN Comparison in TypeScript

This repository demonstrates a subtle bug related to comparing NaN (Not a Number) values in TypeScript. The bug arises from the fact that NaN is not equal to itself according to the strict equality operator (===), but the provided comparison function incorrectly treats NaN as equal to NaN. 

## Bug Description:
The `compare` function attempts to compare two values and return -1, 0, or 1 depending on whether the first value is less than, equal to, or greater than the second value, respectively.  However, this function fails when comparing NaN with NaN.  It incorrectly returns 0.  The strict equality check (===) correctly identifies NaN != NaN.

## Bug Solution:
The solution uses `Number.isNaN` to explicitly check for NaN values before making a comparison. This ensures that the function behaves correctly in all cases.

## How to Reproduce:
1. Clone this repository.
2. Open the `bug.ts` file and run it with a TypeScript compiler (e.g., `tsc bug.ts` and then `node bug.js`).
3. Observe that `compare(NaN, NaN)` returns 0.
4. Open the `bugSolution.ts` file and run it with a TypeScript compiler (e.g., `tsc bugSolution.ts` and then `node bugSolution.js`).
5. Observe that `compare(NaN, NaN)` correctly returns `false`.
