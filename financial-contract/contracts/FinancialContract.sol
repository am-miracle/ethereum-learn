// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.16;

contract FinancialContract {

    uint256 private amount = 10;

    function value() external view returns(uint256) {
        return amount;
    }

    function setValue(uint256 newValue) external {
        amount = newValue;
    }
}
