const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect("name" in obj).toEqual(true);
    });

    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect("id" in obj).toEqual(true);
    });

    it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect("email" in obj).toEqual(true);
    });

    it("should return an object containing an 'officeNumber' property when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect("officeNumber" in obj).toEqual(true);
    });
  });

  describe("getName", () => {
    it("should return the name property", () => {
      const ManagerName = "ManagerName";
      const obj = new Manager(ManagerName, '', '');

      const result = obj.getName();

      expect(result).toEqual(ManagerName);
    });
  });

  describe("getId", () => {
    it("should return the id property", () => {
      const ManagerId = "ManagerId";
      const obj = new Manager('', ManagerId, '');

      const result = obj.getId();

      expect(result).toEqual(ManagerId);
    });
  });

  describe("getEmail", () => {
    it("should return the email property", () => {
      const ManagerEmail = "ManagerEmail";
      const obj = new Manager('', '', ManagerEmail);

      const result = obj.getEmail();

      expect(result).toEqual(ManagerEmail);
    });
  });

  describe("getRole", () => {
    it("should return 'Manager'", () => {
      const ManagerRole = "Manager"
      const obj = new Manager();

      const result = obj.getRole();

      expect(result).toEqual(ManagerRole);
    });
  });

  describe("getOfficeNumber", () => {
    it("should return the officeNumber property", () => {
      const ManagerOfficeNumber = "ManagerOfficeNumber"
      const obj = new Manager('', '', '', ManagerOfficeNumber);

      const result = obj.getOfficeNumber();

      expect(result).toEqual(ManagerOfficeNumber);
    });
  });
});