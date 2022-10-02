const FinancialContract = artifacts.require("FinancialContract");

contract("FinancialContract", () => {
    it("has been deployed successfully", async () => {
        const finance = await FinancialContract.deployed();
        assert(finance, "contract was not deployed");
    });

    describe("value()", () => {
        it("returns 10", async () => {
            const finance = await FinancialContract.deployed();
            const expected = 10;
            const actual = await finance.greet();
            assert.equal(actual, expected, "return a value of 10");
        });
    });
});