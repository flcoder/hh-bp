import { HardhatRuntimeEnvironment } from 'hardhat/types'
import {log, task, parseEther, isLive} from './util'

task('deploy-ownable-token', 'Deploys an ownable token')
	.addParam('name', 'Token name')
	.addParam('symbol', 'Token symbol')
	.addFlag('noVerify', 'Do not verify')
	.addOptionalParam('mintAmount', 'Amount to mint', '1000000000000000')
	.setAction(
		async (args:any, hre:HardhatRuntimeEnvironment) => {
			log(`Network: ${hre.network.name}`)
			log('Deploying...')
			const factory = await (await hre.ethers.getContractFactory('OwnableBEP20'))
			const constructorArguments = [args.name, args.symbol]
			const contract = await factory.deploy(...constructorArguments)
			const live = isLive(hre)
			const confirms = live ? 5 : 1
			await contract.deployTransaction.wait(confirms)
			console.log(`Address: ${contract.address}`)
			const txn = await contract.mint(parseEther(args.mintAmount))
			await txn.wait(confirms)
			if(live && !args.noVerify) {
				log('Verifying...')
				await hre.run("verify:verify", {
					address: contract.address,
					constructorArguments
				})
			}
			log('Finished.')
		}
	)

