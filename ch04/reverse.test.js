import { expect, test } from "vitest";
import { reverseArray, reverseArrayInPlace } from "./reverse.mjs";

test("reverseArray()", () => {
  expect(reverseArray([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
});

test("reverseArrayInPlace()", () => {
  expect(reverseArrayInPlace([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
});
