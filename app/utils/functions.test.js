import { completeAssign } from "./functions";

describe("functions file with utilities", () => {
  describe("complete assign ", () => {
    it("should clone an entire object", () => {
      // Arrange
      const source1 = {
        a: 1
      };
      const source2 = {
        b: 2
      };
      const expected = {
        a: 1,
        b: 2
      };

      // Act
      const result = completeAssign({}, source1, source2);

      // Assert
      expect(result).toEqual(expected);
    });

    it("should mutate the target object", () => {
      // Arrange
      const source1 = {
        a: 1
      };
      const source2 = {
        b: 2
      };

      // Act
      const result = completeAssign(source1, source2);

      // Assert
      expect(result === source1).toBe(true);
    });

    it("should overrite a property on the target object", () => {
      // Arrange
      const source1 = {
        a: 1
      };
      const source2 = {
        a: 2
      };

      // Act
      completeAssign(source1, source2);

      // Assert
      expect(source1.a).toBe(2);
    });

    it("should clone access methods", () => {
      // Arrange
      const source1 = {
        a: 1,
        get someValue() {
          return "foo";
        }
      };
      const source2 = {
        b: 2
      };
      const expected = {
        a: 1,
        get someValue() {
          return "foo";
        },
        b: 2
      };

      // Act
      const result = completeAssign(source1, source2);

      // Assert
      expect(result).toEqual(expected);
    });

    it("should clone symbol properties", () => {
      // Arrange
      const symb = Symbol("a");
      const source1 = {
        a: 1,
        [symb]: "symbol"
      };
      const source2 = {
        b: 2
      };
      const expected = {
        a: 1,
        [symb]: "symbol",
        b: 2
      };

      const symb2 = Symbol("b");
      Object.defineProperty(source2, symb2, {
        value: "not enumerabnle",
        writable: false,
        enumerable: false
      });

      // Act
      const result = completeAssign({}, source1, source2);

      // Assert
      expect(result).toEqual(expected);
    });
  });

  describe("omit", () => {
    it("should remove an object property", () => {});
  });
});
