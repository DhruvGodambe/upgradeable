//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract BoxV2 is Initializable{
    uint val;
    string str;

    function initialize(uint _val, string memory _str) external initializer {
        val = _val;
        str = _str;
    }

    function getVal() external view returns(uint){
        return val;
    }

    function setVal(uint _val) external {
        val = _val;
    }

    function getStr() external view returns(string memory){
        return str;
    }

    function setStr(string memory _str) external {
        str = _str;
    }

    function getBoth() external view returns(uint, string memory) {
        return (val, str);
    }
}