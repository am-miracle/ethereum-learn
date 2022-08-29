//SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import './Fundraiser.sol';

//The FundraiserFactory’s primary job is to create new instances of Fundraisers.

contract FundraiserFactory {
    Fundraiser[] private _fundraisers;

    // most items that can be returned from the fundraisers function
    uint256 constant maxlimit = 20;

    event FundraiserCreated(Fundraiser indexed fundraiser);
    // event FundraiserCreated(Fundraiser indexed fundraiser, address indexed owner);


    function createFundraiser(
        string memory name,
        string memory url,
        string memory imageURL,
        string memory description,
        address payable beneficiary
    ) public {
        Fundraiser fundraiser = new Fundraiser(
            name,
            url,
            imageURL,
            description,
            beneficiary,
            msg.sender
        );
        _fundraisers.push(fundraiser);

        emit FundraiserCreated(fundraiser);
    }
    function fundraisersCount() public view returns(uint256) {
        return _fundraisers.length;
    }

    function fundraisers(uint256 limit, uint256 offset) public view returns(Fundraiser[] memory coll) {
        // size should be the smaller of the count or the limit
        uint256 size = fundraisersCount() < limit ? fundraisersCount() : limit;

        // size should not exceed the maxlimit
        size = size < maxlimit ? size : maxlimit;
        
        coll = new Fundraiser[](size);
        return coll;
    }
}