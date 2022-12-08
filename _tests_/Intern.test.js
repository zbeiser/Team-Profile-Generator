const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
      const obj = new Intern();

      expect("name" in obj).toEqual(true);
    });

    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
      const obj = new Intern();

      expect("id" in obj).toEqual(true);
    });

    it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
      const obj = new Intern();

      expect("email" in obj).toEqual(true);
    });

    it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
      const obj = new Intern();

      expect("school" in obj).toEqual(true);
    });
  });

  describe("getName", () => {
    it("should return the name property", () => {
      const InternName = "InternName";
      const obj = new Intern(InternName, '', '');

      const result = obj.getName();

      expect(result).toEqual(InternName);
    });
  });

  describe("getId", () => {
    it("should return the id property", () => {
      const InternId = "InternId";
      const obj = new Intern('', InternId, '');

      const result = obj.getId();

      expect(result).toEqual(InternId);
    });
  });

  describe("getEmail", () => {
    it("should return the email property", () => {
      const InternEmail = "InternEmail";
      const obj = new Intern('', '', InternEmail);

      const result = obj.getEmail();

      expect(result).toEqual(InternEmail);
    });
  });

  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const InternRole = "Intern"
      const obj = new Intern();

      const result = obj.getRole();

      expect(result).toEqual(InternRole);
    });
  });

  describe("getSchool", () => {
    it("should return the school property", () => {
      const InternSchool = "InternSchool"
      const obj = new Intern('', '', '', InternSchool);

      const result = obj.getSchool();

      expect(result).toEqual(InternSchool);
    });
  });
});