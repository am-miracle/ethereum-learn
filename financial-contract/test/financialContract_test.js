const FinancialContract = artifacts.require("FinancialContract");

contract("FinancialContract", () => {
    it("has been deployed successfully", async () => {
        const finance = await FinancialContract.deployed();
        assert(finance, "contract was not deployed");
    });
    describe("value()", () => {
        it("returns 10 ether", async () => {
            const finance = await FinancialContract.deployed();
            const expected = 10;
            const actual = await finance.value();
            assert.equal(actual, expected, "return a value of 10 ether'");
        });
    });
});

contract("FinancialContract: update value", () => {
    describe("setValue(uint256)", () => {
        it("the passed-in uint256 value is set", async () => {
            const finance = await FinancialContract.deployed()
            const expected = 15;
            await finance.setValue(expected);
            const actual = await finance.value();
            assert.equal(actual, expected, "value was not updated");
        });
    });
});