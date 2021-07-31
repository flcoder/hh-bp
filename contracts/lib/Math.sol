// SPDX-License-Identifier: MIT

pragma solidity >=0.8.4;

library Math {
	
	function summation(uint256 amount) external pure returns(uint) {
		return amount * (amount+1) / 2;
	}

	function sqrt(uint x) external pure returns (uint y) {
		uint z = (x + 1) / 2;
		y = x;
		while (z < y) {
				y = z;
				z = (x / z + z) / 2;
		}
	}

	function min(uint a, uint b) external pure returns(uint) {
		return a > b ? b : a;
	}
	
}