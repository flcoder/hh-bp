// SPDX-License-Identifier: MIT

pragma solidity >=0.8.4;

contract Ownable {

	address public owner;

	event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

	constructor() {
		owner = msg.sender;
		emit OwnershipTransferred(address(0), owner);
	}

	modifier onlyOwner() {
		require(owner == msg.sender, "Ownable: caller is not the owner");
		_;
	}

	function transferOwnership(address newOwner) public virtual onlyOwner {
		emit OwnershipTransferred(owner, newOwner);
		owner = newOwner;
	}
	
}