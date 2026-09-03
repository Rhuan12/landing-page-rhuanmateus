import { describe, expect, it } from "vitest";
import { isWebglAvailable } from "./webgl";

describe("isWebglAvailable", () => {
  it("does not throw and returns a boolean in an environment without WebGL", () => {
    expect(typeof isWebglAvailable()).toBe("boolean");
  });
});
