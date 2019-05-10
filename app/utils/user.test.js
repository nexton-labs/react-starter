import getUserId from "./user";

describe("User Util", () => {
  describe("getUserId", () => {
    it("should be defined", () => {
      // Assert
      expect(getUserId).toBeDefined();
    });

    it("should be a function", () => {
      // Assert
      expect(getUserId).toEqual(expect.any(Function));
    });

    describe("User id property fallback", () => {
      it("should return `_id` value, if `_id` exists", () => {
        // Arrange
        const user = { _id: "foo" };

        // Act
        const result = getUserId(user);

        // Assert
        expect(result).toBe("foo");
      });

      it("should return `id` value, when `id` exists and theres no `_id`", () => {
        // Arrange
        const user = { id: "bar" };
        // act
        const result = getUserId(user);

        // Assert
        expect(result).toBe("bar");
      });

      it("should return `undefined` if neither `_id` nor `id` exist", () => {
        // Arrange
        const user = {};

        // Act
        const result = getUserId(user);

        // Assert
        expect(result).toBe(undefined);
      });

      it("should user default parameter", () => {
        // Act
        const result = getUserId();

        // Assert
        expect(result).toBe(undefined);
      });
    });
  });
});
