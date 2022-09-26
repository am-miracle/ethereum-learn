const FinancialContract = artifacts.require("FinancialContract");

contract("FinancialContract", () => {
    it("has been deployed successfully", async () => {
        const finance = await FinancialContract.deployed();
        assert(finance, "contract was not deployed");
    });
});