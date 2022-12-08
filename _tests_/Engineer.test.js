const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
      const obj = new Engineer();

      expect("name" in obj).toEqual(true);
    });

    it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
      const obj = new Engineer();

      expect("id" in obj).toEqual(true);
    });

    it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
      const obj = new Engineer();

      expect("email" in obj).toEqual(true);
    });

    it("should return an object containing a 'github' property when called with the 'new' keyword", () => {
      const obj = new Engineer();

      expect("github" in obj).toEqual(true);
    });
  });

  describe("getName", () => {
    it("should return the name property", () => {
      const EngineerName = "EngineerName";
      const obj = new Engineer(EngineerName, '', '');

      const result = obj.getName();

      expect(result).toEqual(EngineerName);
    });
  });

  describe("getId", () => {
    it("should return the id property", () => {
      const EngineerId = "EngineerId";
      const obj = new Engineer('', EngineerId, '');

      const result = obj.getId();

      expect(result).toEqual(EngineerId);
    });
  });

  describe("getEmail", () => {
    it("should return the email property", () => {
      const EngineerEmail = "EngineerEmail";
      const obj = new Engineer('', '', EngineerEmail);

      const result = obj.getEmail();

      expect(result).toEqual(EngineerEmail);
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const EngineerRole = "Engineer"
      const obj = new Engineer();

      const result = obj.getRole();

      expect(result).toEqual(EngineerRole);
    });
  });

  describe("getGithub", () => {
    it("should return the github property", () => {
      const EngineerGithub = "EngineerGithub"
      const obj = new Engineer('', '', '', EngineerGithub);

      const result = obj.getGithub();

      expect(result).toEqual(EngineerGithub);
    });
  });
});
