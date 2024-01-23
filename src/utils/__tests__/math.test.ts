import { describe, expect, test } from "@jest/globals";

import { areNumbersSame } from "../math";

describe("Math", () => {
  describe("areNumbersSame", () => {
    test("should correctly return if numbers are the same", () => {
      expect(areNumbersSame(1, 1)).toBe(true);
    });
    test("should correctly return if numbers are not the same", () => {
      expect(areNumbersSame(1, 2)).toBe(false);
    });
  });
});
