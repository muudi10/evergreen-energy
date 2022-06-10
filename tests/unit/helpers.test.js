const { heatLoss, suitablePump, totalCost } = require("../../helpers/helpers");
const pumps = require("../../dummy_data/pump");
describe("testing heat loss  functions", () => {
  describe("heatloss functtion", () => {
    it("should return the heatloss function", () => {
      expect(typeof heatLoss).toBe("function");
    });
    it("should return the heatloss ", () => {
      expect(heatLoss(100, 1, 1)).toBe(100);
    });
    it("should check for negative numbers are not supplied ", () => {
      expect(heatLoss(-100, 1, 1)).toBe("Please enter a positive number");
    });
  }),
    describe("suitable pump function", () => {
      // it('should return the suitable pump function',()=>{
      //     expect(typeof suitablePump).toBe("function")
      // })
      it("should return the suitable pump given an an array of pumps and heatloss", () => {
        expect(suitablePump(pumps, 5)).toMatchObject({ outputCapacity: 5 });
      });
      it("should check the returned pump size  that is not less than heatloss", () => {
        expect(suitablePump(pumps, 15).outputCapacity).toBeGreaterThanOrEqual(
          15
        );
      });
    });
  describe("total cost function", () => {
    it("should return the total cost function", () => {
      expect(typeof totalCost).toBe("function");
    });
    it("should return the total cost ", () => {
      expect(totalCost(pumps[0].costs)).toBe(9214);
    });
    it("check cost array lenght", () => {
      expect(pumps[0].costs.length).toBe(5);
    });
    it("should check the cost array is not empty", () => {
      expect(pumps[0].costs.length).not.toBe(0);
    });
  });
});
