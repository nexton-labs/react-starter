import * as LocalStorageHelper from "./localStorageHelper";

describe("LocalStorageHelper", () => {
  it(`should set a value  in the local storage when call to setItem() and get it using getItem()`, () => {
    // arrange.
    const item = [{ id: 1234 }, { id: 4321 }];

    // act.
    LocalStorageHelper.setItem("testList", JSON.stringify(item));

    // assert.
    expect(LocalStorageHelper.getParsedItem("testList").length).toEqual(2);
  });

  describe("getParsedItem", () => {
    xit("should be able to parse a valid JSON when object sample", () => {
      // Arrange
      LocalStorageHelper.setItem("item", "{'id': 1, 'name': 'John'}");

      // Act
      const parsedItem = LocalStorageHelper.getParsedItem("item");

      // Assert
      expect(parsedItem).toEqual({
        id: 1,
        name: "John"
      });
    });

    it("should be able to parse a valid JSON when array sample", () => {
      // Arrange
      LocalStorageHelper.setItem("numbers", "[1, 2, 3, 4]");

      // Act
      const parsedItem = LocalStorageHelper.getParsedItem("numbers");

      // Assert
      expect(parsedItem).toEqual([1, 2, 3, 4]);
    });

    it("should be able to handle an invalid JSON when invalid text", () => {
      // Arrange
      LocalStorageHelper.setItem("test", "invalid json");

      // Act
      const parsedItem = LocalStorageHelper.getParsedItem("test");

      // Assert
      expect(parsedItem).toEqual(null);
    });

    it("should be able to handle an invalid JSON when invalid array", () => {
      // Arrange
      LocalStorageHelper.setItem("test", "[1, 2, ]");

      // Act
      const parsedItem = LocalStorageHelper.getParsedItem("test");

      // Assert
      expect(parsedItem).toEqual(null);
    });

    it("should be able to handle an invalid JSON when invalid object", () => {
      // Arrange
      LocalStorageHelper.setItem("test", "{'foo' : 1, }");

      // Act
      const parsedItem = LocalStorageHelper.getParsedItem("test");

      // Assert
      expect(parsedItem).toEqual(null);
    });
  });
});
