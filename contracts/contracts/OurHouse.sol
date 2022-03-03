// Contract based on https://docs.openzeppelin.com/contracts/3.x/erc721
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

/**
 * OurHouse ERC721 contract.
 */
contract OurHouse is ERC721Enumerable, Ownable {
    using Strings for uint256;

    // sale configuration
    uint256 public constant MAX_PER_WALLET = 1;
    uint256 public constant PRICE = 0; // TODO: update final token price

    // Mapping owner address to number minted
    mapping(address => uint256) private _addressData;

    // states
    bool public saleActive = false;
    bool public locked;

    // TODO: update URI with membership token image
    string private _tokenBaseURI = '';

    constructor() ERC721('OurHouse', 'HOUSE') {}

    modifier unlocked() {
        require(!locked, 'Contract metadata modifier functions are locked.');
        _;
    }

    modifier userCall() {
        require(tx.origin == msg.sender, 'Calls from another contract are not supported.');
        _;
    }

    /**
     * Withdraw.
     */
    function withdraw() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    /**
     * Toggle public sale active state.
     */
    function toggleSaleActive() external onlyOwner {
        saleActive = !saleActive;
    }

    /**
     * Lock metadata so owner cannot call functions to set provenance hash or update base URI.
     */
    function lockMetadata() external onlyOwner {
        locked = true;
    }

    /**
     * Mints requested number of token.
     */
    function mint(uint256 numTokens) external payable userCall {
        require(msg.sender != address(0), 'ZERO_ADDRESS');
        require(saleActive, 'SALE_INACTIVE');
        require(PRICE * numTokens <= msg.value, 'INSUFFICIENT_VALUE');
        require(numberMinted(msg.sender) + numTokens <= MAX_PER_WALLET, "NUM_TOKENS_OVER_MAX_PER_WALLET");

        for (uint256 i = 0; i < numTokens; i++) {
            _safeMint(msg.sender, totalSupply() + 1);
            _addressData[msg.sender] += 1;

        }
    }

    /**
     * Set token base URI.
     */
    function setBaseURI(string calldata baseURI) external onlyOwner unlocked {
        _tokenBaseURI = baseURI;
    }

    /**
     * Returns the number of tokens minted by `owner`.
     */
    function numberMinted(address owner) internal view returns (uint256) {
        require(owner != address(0), 'ZERO_ADDRESS');
        return uint256(_addressData[owner]);
    }
}
