/* eslint-disable no-undef */
import logErrors from "./errorService";

const Logger = require("js-logger");

describe("Error Service", () => {
  describe("logError ", () => {
    it("log an error", () => {
      // Arrange
      Logger.error = jest.fn();
      const message = "Something important to know";
      const file = "test.file";
      const line = 10;
      const col = 12;

      // Act
      logErrors(message, file, line, col);

      // Assert
      expect(Logger.error).toHaveBeenCalledTimes(1);
    });

    it("log an error without line and col", () => {
      // Arrange
      Logger.error = jest.fn();
      const message = "Something important to know";
      const file = "test.file";

      // Act
      logErrors(message, file);

      // Assert
      expect(Logger.error).toHaveBeenCalledTimes(1);
    });
  });

  describe("window error event", () => {
    it("should catch unhandled errors", () => {
      // Arrange
      Logger.error = jest.fn();

      // Act
      window.dispatchEvent(new Event("error"));

      // Assert
      expect(Logger.error).toHaveBeenCalledTimes(1);
    });
  });
});
