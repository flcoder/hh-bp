import "@nomiclabs/hardhat-waffle"
import { ethers, utils } from "ethers"
import { HardhatRuntimeEnvironment } from "hardhat/types"
export { task } from "hardhat/config"
export const log = console.log.bind(console)
export const parseEther = ethers.utils.parseEther
export const formatEther = ethers.utils.formatEther

export function isLive(hre:HardhatRuntimeEnvironment) {
	const {name} = hre.network
	return name == 'testnet' || name == 'mainnet'
}