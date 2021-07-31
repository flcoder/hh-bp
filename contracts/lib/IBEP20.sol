// SPDX-License-Identifier: MIT

pragma solidity >=0.8.4;

interface IBEP20 {
	function totalSupply() external view returns (uint);
	function decimals() external view returns (uint8);
	function symbol() external view returns (string memory);
	function name() external view returns (string memory);
	function getOwner() external view returns (address);
	function balanceOf(address account) external view returns (uint);
	function transfer(address to, uint amount) external returns (bool);
	function allowance(address account, address proxy) external view returns (uint);
	function approve(address proxy, uint amount) external returns (bool);
	function transferFrom(address from, address to, uint amount) external returns (bool);
	event Transfer(address indexed from, address indexed to, uint value);
	event Approval(address indexed account, address indexed proxy, uint value);
}