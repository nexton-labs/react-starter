import mockAxios from "axios";
import Service from "./service";

jest.mock("../config/settings", () => ({
  SERVICE: {
    baseurl: "fakeurl"
  }
}));

xdescribe("Service Module", () => {
  describe("post verb", () => {
    beforeEach(() => {
      mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({
          statusCode: 200,
          statusText: "OK",
          data: ["foo", "bar"]
        })
      );
    });

    afterEach(() => {
      mockAxios.post.mockClear();
    });

    it("should be defined", () => {
      expect(Service.post).toBeDefined();
    });

    it("should be a function", () => {
      expect(mockAxios.post).toEqual(expect.any(Function));
    });

    it("should call the service Once", () => {
      Service.post();
      expect(mockAxios.post).toHaveBeenCalledTimes(1);
    });
  });

  describe("put verb", () => {
    beforeEach(() => {
      mockAxios.put.mockImplementationOnce(() =>
        Promise.resolve({
          statusCode: 200,
          statusText: "OK",
          data: ["foo", "bar"]
        })
      );
    });

    afterEach(() => {
      mockAxios.put.mockClear();
    });

    it("should be defined", () => {
      expect(Service.put).toBeDefined();
    });

    it("should be a function", () => {
      expect(mockAxios.put).toEqual(expect.any(Function));
    });

    it("should call the service Once", () => {
      Service.put();
      expect(mockAxios.put).toHaveBeenCalledTimes(1);
    });
  });

  describe("get verb", () => {
    beforeEach(() => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          statusCode: 200,
          statusText: "OK",
          data: ["foo", "bar"]
        })
      );
    });

    afterEach(() => {
      mockAxios.get.mockClear();
    });

    it("should be defined", () => {
      expect(Service.get).toBeDefined();
    });

    it("should be a function", () => {
      expect(mockAxios.get).toEqual(expect.any(Function));
    });

    it("should call the service Once", () => {
      Service.get();
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
  });

  describe("delete verb", () => {
    beforeEach(() => {
      mockAxios.delete.mockImplementationOnce(() =>
        Promise.resolve({
          statusCode: 200,
          statusText: "OK",
          data: ["foo", "bar"]
        })
      );
    });

    afterEach(() => {
      mockAxios.delete.mockClear();
    });

    it("should be defined", () => {
      expect(Service.delete).toBeDefined();
    });

    it("should be a function", () => {
      expect(mockAxios.delete).toEqual(expect.any(Function));
    });

    it("should call the service Once", () => {
      Service.delete();
      expect(mockAxios.delete).toHaveBeenCalledTimes(1);
    });
  });
});
