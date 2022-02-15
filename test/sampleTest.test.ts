import { sampleUtil } from "../utils/sampleUtil";

describe("sample function", () => {
  it("should correctly add two integers", () => {
    const result = sampleUtil(1, 2);
    expect(result).toBe(3);
  });
});
