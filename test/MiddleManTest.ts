import hre from "hardhat";
import {deployContractInfra} from "./contractUtils";
import {loadFixture} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import {expect} from "chai";
import {ZeroAddress} from "ethers";
import {deployMockContract} from "@clrfund/waffle-mock-contract";
import {middleManSol} from "../typechain-types/contracts";


const ACCESS_RESTRICTED = 'Access Restricted';

describe("MiddleMan.sol  contracts", () => {

    // initalise test harness for  middleman  contract
    async function deployContracts() {
        const [owner] = await hre.ethers.getSigners();

        let {
            accessManager,
            autoZapper,
        } = await deployContractInfra(owner);

        return {accessManager, autoZapper};
    }

    describe("access control", () => {

        it('only consul (4) and above methods', async () => {
            const [owner, anotherUser] = await hre.ethers.getSigners();
            const {autoZapper, accessManager} = await loadFixture(deployContracts);

            //  grant senator
            await expect(accessManager.connect(owner).grantRole(anotherUser, 3)).not.to.be.reverted;

            // params are not importane here  - we expect access violation
            await expect(autoZapper.connect(anotherUser).setStorage(anotherUser)).to.be.revertedWith(ACCESS_RESTRICTED)
            await expect(autoZapper.connect(anotherUser).addLp(anotherUser, anotherUser, anotherUser, [])).to.be.revertedWith(ACCESS_RESTRICTED)
        })

    })

    describe("setting values", () => {
        it('shall set storage  as consul', async () => {
            const [owner, anotherUser, fakeStorage] = await hre.ethers.getSigners();
            const {autoZapper, accessManager} = await loadFixture(deployContracts);

            //  grant consul
            await expect(accessManager.connect(owner).grantRole(anotherUser, 4)).not.to.be.reverted

            await expect(autoZapper.connect(anotherUser).setStorage(fakeStorage)).not.to.be.reverted;
            expect(await autoZapper.storageContract()).to.be.equal(await fakeStorage.getAddress())

        })
    })


    describe('LP manpulations', () => {

        // TODO: path is not returned by HH somehow.
        it('shall add LPs properly', async () => {
            const [owner, token0, token1, router, vaults, path0, path1] = await hre.ethers.getSigners();
            const {autoZapper} = await loadFixture(deployContracts);

            //  create mock liquidity pool
            let univVPairABI = require('../artifacts/contracts/interfaces/IUniV2Pair.sol/IUniV2Pair.json');
            let lp = await deployMockContract(owner, univVPairABI.abi);

            await lp.mock.token0.returns(await token0.getAddress());
            await lp.mock.token1.returns(await token1.getAddress());


            await autoZapper.addLp(lp, router, vaults, [path0, path1])

            let tokenMap = await autoZapper.lpTokenMap(lp);

            expect(tokenMap.token0).to.be.equal(await token0.getAddress());
            expect(tokenMap.token1).to.be.equal(await token1.getAddress());
            expect(tokenMap.lpToken).to.be.equal(await lp.getAddress());
            expect(tokenMap.vault).to.be.equal(await vaults.getAddress());
            expect(tokenMap.router).to.be.equal(await router.getAddress());

        })
    })
})