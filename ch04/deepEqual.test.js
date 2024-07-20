import { expect, test } from "vitest";
import { deepEqual } from "./deepEqual.mjs";

test("deepEqual() compare equal strings", () => {
  expect(deepEqual("foo", "foo")).toBeTruthy();
});

test("deepEqual() compare equal numbers", () => {
  expect(deepEqual(1, 1)).toBeTruthy();
});

test("deepEqual() compare equal arrays", () => {
  expect(deepEqual([1, 2, 3], [1, 2, 3])).toBeTruthy();
});

test("deepEqual() compare equal objects", () => {
  const person = { name: "foo", age: 30 };
  expect(deepEqual(person, person)).toBeTruthy();
});

test("deepEqual() compare different types", () => {
  expect(deepEqual("1", 1)).toBeFalsy();
});
