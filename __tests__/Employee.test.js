const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing name, id, email and role properties when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("name" in obj).toBe(true);
      expect("id" in obj).toBe(true);
      expect("email" in obj).toBe(true);
      expect("role" in obj).toBe(true);
    });
  });
});