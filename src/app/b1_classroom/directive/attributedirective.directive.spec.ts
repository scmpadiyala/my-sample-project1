import { AttributedirectiveDirective } from "./attributedirective.directive";

describe("AttributedirectiveDirective", () => {
  it("should create an instance", () => {
    const directive = new AttributedirectiveDirective("green");
    expect(directive).toBeTruthy();
  });
});
