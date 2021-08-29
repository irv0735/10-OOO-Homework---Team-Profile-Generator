const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing name, id, email, role and github properties when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect("name" in obj).toBe(true);
      expect("id" in obj).toBe(true);
      expect("email" in obj).toBe(true);
      expect("role" in obj).toBe(true);
      expect("officeNumber" in obj).toBe(true);
    });
  });

});