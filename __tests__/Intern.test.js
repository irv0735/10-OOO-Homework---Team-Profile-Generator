const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing name, id, email, role and school properties when called with the 'new' keyword", () => {
      const obj = new Intern();

      expect("name" in obj).toBe(true);
      expect("id" in obj).toBe(true);
      expect("email" in obj).toBe(true);
      expect("role" in obj).toBe(true);
      expect("school" in obj).toBe(true);
    });
  });

});