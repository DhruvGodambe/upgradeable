//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Proxy is ERC1967UpgradeUpgradeable {
    struct Val{
        uint val;
    }
    
    string owner;
    Val val;

    event GetImplementation(address impl);

    function initialize(uint _val, string memory _owner) public initializer {
        val.val = _val;
        owner = _owner;
    }

    fallback() external {
        (bool success, bytes memory data) = _getImplementation().delegatecall(msg.data);
    }

    function getImplementation() external {
        address impl = _getImplementation();
        emit GetImplementation(impl);
    }

    function upgradeImplementation(address newImplementation) external {
        _upgradeTo(newImplementation);
    }
}