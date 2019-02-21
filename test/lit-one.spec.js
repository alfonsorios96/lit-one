/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../lit-one.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<lit-one></lit-one>");
    assert.strictEqual(_element.hello, 'Otra cosa');
  });
});
