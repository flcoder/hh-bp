// SPDX-License-Identifier: MIT

pragma solidity >=0.8.4;

import './lib/OwnableBEP20.sol';

contract TestToken is OwnableBEP20 {

	constructor() OwnableBEP20("Test Token", "TEST") {}
	
}