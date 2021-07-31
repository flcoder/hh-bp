// SPDX-License-Identifier: MIT

pragma solidity >=0.8.4;

import './Ownable.sol';
import './IBEP20.sol';

contract OwnableBEP20 is Ownable, IBEP20 {
	
	mapping (address => uint) public balances;

	mapping (address => mapping (address => uint)) public allowances;

	string public override name;
	string public override symbol;
	uint public override totalSupply = 0;
	uint8 public constant override decimals = 18;

	constructor(string memory _name, string memory _symbol) {
		name = _name;
		symbol = _symbol;
	}

	function _transfer(address from, address to, uint amount) internal {
		balances[from] -= amount;
		balances[to] += amount;
		emit Transfer(from, to, amount);
	}

	function _mint(address to, uint amount) internal {
		totalSupply = totalSupply += amount;
		balances[to] += amount;
		emit Transfer(address(0), to, amount);
	}

	function balanceOf(address account) external view override returns (uint) {
		return balances[account];
	}

	function getOwner() public view override returns (address) {
		return owner;
	}

	function transfer(address to, uint amount) external override returns (bool) {
		_transfer(msg.sender, to, amount);
		return true;
	}

	function allowance(address account, address proxy) external view override returns (uint) {
		return allowances[account][proxy];
	}

	function approve(address proxy, uint amount) external override returns (bool) {
		allowances[msg.sender][proxy] = amount;
		emit Approval(msg.sender, proxy, amount);
		return true;
	}

	function transferFrom(address from, address to, uint amount) external override returns (bool) {
		allowances[from][msg.sender] -= amount;
		_transfer(from, to, amount);
		return true;
	}

	function mint(uint amount) external onlyOwner returns (bool) {
		_mint(msg.sender, amount);
		return true;
	}

	function mintTo(address to, uint amount) external onlyOwner returns (bool) {
		_mint(to, amount);
		return true;
	}

}