import { TransactionResponse } from '@ethersproject/abstract-provider'
import { Contract } from '@ethersproject/contracts'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import hre from 'hardhat'
import * as util from '../tasks/util'

const {log, parseEther, formatEther} = util

const isLive = util.isLive(hre)
const confirms = isLive ? 5 : 1
const {provider} = hre.ethers

let dev:SignerWithAddress, acc1:SignerWithAddress, tToken:Contract, tx:TransactionResponse, result:any

run().catch(e=>log(`Exception: ${e}`))

async function run() {
	[dev, acc1] = await hre.ethers.getSigners()
	const factory = await (await hre.ethers.getContractFactory('TestToken'))
	tToken = await factory.deploy()
	await tToken.deployTransaction.wait(confirms)
	log('Test Token Address:', tToken.address)
	await showBalances(dev.address)
}

async function showBalances(address:string) {
	const [balb, balt] = await Promise.all([provider.getBalance(address), tToken.balanceOf(address)])
	log(`Balances: ${address}`)
	log(`BNB:        ${formatEther(balb)}`)
	log(`test token: ${formatEther(balt)}`)
}