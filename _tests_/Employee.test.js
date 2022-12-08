const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("name" in obj).toEqual(true);
    });

    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("id" in obj).toEqual(true);
    });

    it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("email" in obj).toEqual(true);
    });
  });

  describe("getName", () => {
    it("should return the name property", () => {
      const employeeName = "employeeName";
      const obj = new Employee(employeeName, '', '');

      const result = obj.getName();

      expect(result).toEqual(employeeName);
    });
  });

  describe("getId", () => {
    it("should return the id property", () => {
      const employeeId = "employeeId";
      const obj = new Employee('', employeeId, '');

      const result = obj.getId();

      expect(result).toEqual(employeeId);
    });
  });

  describe("getEmail", () => {
    it("should return the email property", () => {
      const employeeEmail = "employeeEmail";
      const obj = new Employee('', '', employeeEmail);

      const result = obj.getEmail();

      expect(result).toEqual(employeeEmail);
    });
  });

  describe("getRole", () => {
    it("should return 'Employee'", () => {
      const employeeRole = "Employee"
      const obj = new Employee();

      const result = obj.getRole();

      expect(result).toEqual(employeeRole);
    });
  });
});
