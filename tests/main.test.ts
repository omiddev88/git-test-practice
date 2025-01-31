import { describe, it } from "vitest";
import { db } from "./mocks/db";

describe("group", () => {
  it("we are on feature", () => {
    const product = db.product.create({ name: "Apple" });
    console.log(db.product.delete({ where: { id: { equals: product.id } } }));
  });
});
