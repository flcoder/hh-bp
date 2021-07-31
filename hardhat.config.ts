import "@nomiclabs/hardhat-waffle"
import '@nomiclabs/hardhat-etherscan'
import {mnemonic} from './secrets.json'
import './tasks/accounts'
import './tasks/balance'
import './tasks/deploy-ownable-token'

export default {
	defaultNetwork: "hardhat",
	etherscan: {
		// Your API key for Etherscan
		// Obtain one at https://bscscan.com/apis
		apiKey: "YOUR_API_KEY"
	},
	networks: {
		localhost: {
			url: "http://127.0.0.1:8545"
		},
		hardhat: {
		},
		testnet: {
			url: "https://data-seed-prebsc-1-s1.binance.org:8545",
			chainId: 97,
			gasPrice: 20000000000,
			accounts: {mnemonic: mnemonic}
		},
		mainnet: {
			url: "https://bsc-dataseed.binance.org/",
			chainId: 56,
			gasPrice: 20000000000,
			accounts: {mnemonic: mnemonic}
		}    
	},
	solidity: {
		version: "0.8.4",
		settings: {
			optimizer: {
				enabled: true
			}
		}
	},
	paths: {
		sources: "./contracts",
		tests: "./test",
		cache: "./cache",
		artifacts: "./artifacts"
	},
	mocha: {
		timeout: 20000
	}
}

