//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

library ImplementationV1 {
    struct Val {
        uint val;
    }

    function incVal(uint _val) external returns(Val storage val) {
        val.val = _val+1;
    }
}