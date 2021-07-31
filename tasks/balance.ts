import { log, formatEther, task } from './util'

task("balance", "Prints an account's balance")
	.addParam("account", "The account's address", "0x8Fa534838D3F8f1f3B1B1684872093BF573e8e85")
	.setAction(async (args, hre) => {
		log(formatEther(await hre.ethers.provider.getBalance(args.account)))
	});