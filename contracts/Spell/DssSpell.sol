// SPDX-FileCopyrightText: © 2020 Dai Foundation <www.daifoundation.org>
// SPDX-License-Identifier: AGPL-3.0-or-later
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

pragma solidity 0.8.16;

// Enable ABIEncoderV2 when onboarding collateral through `DssExecLib.addNewCollateral()`
pragma experimental ABIEncoderV2;

import "./src/DssExec.sol";
import "./src/DssAction.sol";

// Interface for interacting with Gem-like tokens.

// Interface for interacting with Pause contracts.
interface Authorizable {
    function rely(address) external;

    function deny(address) external;

    function setAuthority(address) external;
}

interface PauseLike {
    function setOwner(address owner_) external;

    function setAuthority(Authorizable authority_) external;
}

// Interface for interacting with Oracle contracts.
interface OracleLike {
    function src() external view returns (address);

    function change(address) external;

    function poke() external;
}

interface MedianLike {
    function deny(address) external;
}

// DssSpellAction contract defines the actions to be executed by the spell.
contract DssSpellAction is DssAction {
    // Provides a descriptive tag for bot consumption
    // This should be modified weekly to provide a summary of the actions
    // Hash: cast keccak -- "$(wget https://raw.githubusercontent.com/PulseMakerWin/community/refs/heads/master/governance/votes/Executive%20Vote%20-%20December%2030%2C%202024.md -q -O - 2>/dev/null)"
    string public constant override description =
        "2025-4-02 MakerDAO Executive Spell | Hash: 0x5b4d14302bb9eea1728dfcaa053d38e823e17c503034699b65caf2b9fe4462e0";

    function officeHours() public pure override returns (bool) {
        return false;
    }

    // Addresses of various Pip (Price Feed) contracts.
    address internal constant pip1 = 0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763;
    // Addresses of various Medianizer contracts.
    address internal constant median1 =
        0x613433AE2B8d3Ae6371CA6eC26bCe0A73c005bA2;
    address internal constant pip2 = 0xB4eb54AF9Cc7882DF0121d26c5b97E802915ABe6;
    address internal constant median2 =
        0x82e5e259Ed1569586FCCa571ce50A7D1D6786Bad;
    address internal constant pip3 = 0x64ee82FC3Af7785fBD78A2Be24b0b31cd7Bfd2E0;
    address internal constant median3 =
        0xf11B5fd3839516DE7ac53755eaF277A74EcEf327;
    address internal constant pip4 = 0xf185d0682d50819263941e5f4EacC763CC5C6C42;
    address internal constant median4 =
        0x6E088B573694F1958C2FAdB2d4e926fD8FFF4f2C;
    address internal constant pip5 = 0x3A2D8aDb238F47B4D258545701439E05DB201574;
    address internal constant median5 =
        0x2BD28b9C8B3B1ACDA7ad8e189Bc02e615A0a3C7c;
    address internal constant pip6 = 0x7382c066801E7Acb2299aC8562847B9883f5CD3c;
    address internal constant median6 =
        0x623fE3720C94Ab42CE31CB255780E4d0e1D04a1b;
    address internal constant pip7 = 0xf36B79BD4C0904A5F350F1e4f776B81208c13069;
    address internal constant median7 =
        0x4b9aD4401CBDe1ADa6adD90aC40f326fB88dDF4E;
    address internal constant pip8 = 0x8067259EA630601f319FccE477977E55C6078C13;
    address internal constant median8 =
        0x31df188997E1Fe0C7fb29b43C0D8148D83e1C584;
    address internal constant pip9 = 0x7a5918670B0C390aD25f7beE908c1ACc2d314A3C;
    address internal constant median9 =
        0x5Cf7B83c17B70D2a06c592b91ad4F5C3cCa7c0Dd;
    address internal constant pip10 =
        0x348Fc3eF33373828e09270e9b2DC672Eb5e5FDf8;
    address internal constant median10 =
        0x6f34A64C5bcd197F200E974C2B8180c97bC308ef;
    address internal constant pip11 =
        0xBED0879953E633135a48a157718Aa791AC0108E4;
    address internal constant median11 =
        0x1694676AA992D3C6aB859D6d9D2e7bc448f4332b;
    address internal constant pip12 =
        0x9eb923339c24c40Bef2f4AF4961742AA7C23EF3a;
    address internal constant median12 =
        0x8f8cDd12d5F0Ec99B1314c37446ebC50481a16C5;
    address internal constant pip13 =
        0x9B0C694C6939b5EA9584e9b61C7815E8d97D9cC7;
    address internal constant median13 =
        0xB11eDc36668F5509EFE8A563CFA9E7a5A302003e;
    address internal constant pip14 =
        0x3ff860c0F28D69F392543A16A397D0dAe85D16dE;
    address internal constant median14 =
        0x3882c9a2D251a972312e411BcB7E0D9c79788e8A;
    address internal constant pip15 =
        0x5F122465bCf86F45922036970Be6DD7F58820214;
    address internal constant median15 =
        0x5bdF3B8fB8476f8250420B95e09c5c900a67EBe8;
    address internal constant pip16 =
        0x828169221293Cb90d747B17341b7b7b20E58E039;
    address internal constant median16 =
        0xa4a1388473267f73F74141bcdF62426761e6C5C2;
    address internal constant pip17 =
        0xf363c7e351C96b910b92b45d34190650df4aE8e7;
    address internal constant median17 =
        0x7B64f61f9C30c1A2979AE78ff00D3D1F6d8E51Fc;
    address internal constant pip18 =
        0x8Df8f06DC2dE0434db40dcBb32a82A104218754c;
    address internal constant median18 =
        0x1662712Eb3C4bF961D58a0E118C567343Ac218fC;
    address internal constant pip19 =
        0x8874964279302e6d4e523Fb1789981C39a1034Ba;
    address internal constant median19 =
        0x75aeb7a72200241E66d843926B5d584928e89011;
    address internal constant pip20 =
        0xFe7a2aC0B945f12089aEEB6eCebf4F384D9f043F;
    address internal constant median20 =
        0x5E08F4239847792dC6f65d0E178F7e544c119E77;
    address internal constant pip21 =
        0xeE7F0b350aA119b3d05DC733a4621a81972f7D47;
    address internal constant median21 =
        0x9B2722BE6488ee2d2C6862eE316286522aFb9D5b;
    address internal constant pip22 =
        0xd800ca44fFABecd159c7889c3bf64a217361AEc8;
    address internal constant median22 =
        0xc6111BFCE7A59d3F86d8227DBEcb5255318dd2ad;

    // Address of the DIA Oracle contract.
    address internal constant DIAORACLE =
        0xCe5d1c4613f113fB8abFb9415e1F0D947B120Bf2;

    address internal constant deployer =
        0x666256650e4eA279861979CA9ddC0153A3004808;

    address internal constant makerAuctionOracle =
        0xFB6A63B465D04151DE94C5E3F52ACC0C37EF5003;

    address internal constant pause =
        0xbE286431454714F511008713973d3B053A2d38f3;

    address internal constant chief =
        0x21EDd6f4542423737075E674624C0F6596c629C1;

    // The main function that defines the actions to be executed.
    function actions() public override {
        /**************************************/
        /*** System Risk Parameters Changes ***/
        /**************************************/
        // Sets the amount of MKR to 10 in debt auction
        DssExecLib.setDebtAuctionMKRAmount(10);
        // Sets the amount of DAI to be controled by a contract. will change to 1000 usd value of dai debt auction.
        DssExecLib.authorize(DssExecLib.vow(), makerAuctionOracle);
        // Sets the duration of the debt auction to 3600 seconds (1 hour).
        DssExecLib.setDebtAuctionDuration(3600);
        // Sets the bid duration of the debt auction to 1800 seconds (30 minutes).
        DssExecLib.setDebtAuctionBidDuration(1800);
        // Sets the global debt ceiling to 5,000,000,000 DAI.
        DssExecLib.setGlobalDebtCeiling(0);

        /********************************/
        /*** DsPause Ownership Change ***/
        /********************************/

        PauseLike(pause).setOwner(address(0));

        /**********************/
        /*** Authorizations ***/
        /**********************/

        // Authorizes the DIA Oracle to interact with the Spotter.
        DssExecLib.authorize(DssExecLib.spotter(), DIAORACLE);

        // sets the pause authority to the new chief
        DssExecLib.setAuthority(pause, chief);

        /**********************/
        /*** Median changes ***/
        /**********************/

        // Changes the medianizer for pip1 to median1.
        OracleLike(pip1).change(median1);
        // Adds the source of pip1 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip1).src(), pip1);

        // Changes the medianizer for pip2 to median2.
        OracleLike(pip2).change(median2);
        // Adds the source of pip2 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip2).src(), pip2);

        // Changes the medianizer for pip4 to median4.
        OracleLike(pip4).change(median4);
        // Adds the source of pip4 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip4).src(), pip4);

        // // Changes the medianizer for pip6 to median6.
        OracleLike(pip6).change(median6);
        // Adds the source of pip6 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip6).src(), pip6);
        // Changes the medianizer for pip7 to median7.
        OracleLike(pip7).change(median7);

        // Adds the source of pip7 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip7).src(), pip7);
        // Changes the medianizer for pip8 to median8.
        OracleLike(pip8).change(median8);

        // Adds the source of pip8 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip8).src(), pip8);
        // Changes the medianizer for pip9 to median9.
        OracleLike(pip9).change(median9);

        // Adds the source of pip9 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip9).src(), pip9);

        // Changes the medianizer for pip11 to median11.
        OracleLike(pip11).change(median11);
        // Adds the source of pip11 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip11).src(), pip11);

        // Changes the medianizer for pip12 to median12.
        OracleLike(pip12).change(median12);
        // Adds the source of pip12 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip12).src(), pip12);

        // Changes the medianizer for pip13 to median13.
        OracleLike(pip13).change(median13);
        // Adds the source of pip13 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip13).src(), pip13);
        // Changes the medianizer for pip14 to median14.
        OracleLike(pip14).change(median14);

        // Adds the source of pip14 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip14).src(), pip14);
        // Changes the medianizer for pip15 to median15.
        OracleLike(pip15).change(median15);

        // Adds the source of pip15 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip15).src(), pip15);
        // Sets the pip for the GUSD-A collateral type in the Spotter.

        // Changes the medianizer for pip17 to median17.
        OracleLike(pip17).change(median17);
        // Adds the source of pip17 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip17).src(), pip17);

        // Changes the medianizer for pip18 to median18.
        OracleLike(pip18).change(median18);
        // Adds the source of pip18 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip18).src(), pip18);

        // Changes the medianizer for pip19 to median19.
        OracleLike(pip19).change(median19);
        // Adds the source of pip19 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip19).src(), pip19);

        // Changes the medianizer for pip20 to median20.
        OracleLike(pip20).change(median20);
        // Adds the source of pip20 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip20).src(), pip20);

        // Changes the medianizer for pip21 to median21.
        OracleLike(pip21).change(median21);
        // Adds the source of pip21 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip21).src(), pip21);

        // Changes the medianizer for pip22 to median22.
        OracleLike(pip22).change(median22);
        // Adds the source of pip22 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip22).src(), pip22);

        /*********************/
        /*** Pip Additions ***/
        /*********************/

        // Sets the pip for the USDC-A collateral type in the Spotter.
        DssExecLib.setContract(
            DssExecLib.spotter(),
            0x555344432d410000000000000000000000000000000000000000000000000000,
            "pip",
            pip3
        );
        // Sets the pip for the PSM-USDC-A collateral type in the Spotter.
        DssExecLib.setContract(
            DssExecLib.spotter(),
            0x50534d2d555344432d4100000000000000000000000000000000000000000000,
            "pip",
            pip3
        );
        // Authorizes OSM Mom to interact with the pip3.
        DssExecLib.authorize(pip3, DssExecLib.osmMom());
        // Whitelists the medianizer for pip3.
        DssExecLib.whitelistOracleMedians(pip3);
        // Adds Spotter to the whitelist for the pip3.
        DssExecLib.addReaderToWhitelist(pip3, DssExecLib.spotter());
        // Adds clip to the whitelist for pip3.
        DssExecLib.addReaderToWhitelist(
            pip3,
            0x046b1A5718da6A226D912cFd306BA19980772908
        );
        // Adds Clipper Mom to the whitelist for the pip3.
        DssExecLib.addReaderToWhitelist(pip3, DssExecLib.clipperMom());
        // Adds End to the whitelist for the pip3.
        DssExecLib.addReaderToWhitelist(pip3, DssExecLib.end());
        // Allows the OSM to freeze the USDC-A collateral type.
        DssExecLib.allowOSMFreeze(
            pip3,
            0x555344432d410000000000000000000000000000000000000000000000000000
        );
        // Allows the OSM to freeze the PSM-USDC-A collateral type.
        DssExecLib.allowOSMFreeze(
            pip3,
            0x50534d2d555344432d4100000000000000000000000000000000000000000000
        );
        // Adds the source of pip3 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip3).src(), pip3);

        // Sets the pip for the TUSD-A collateral type in the Spotter.
        DssExecLib.setContract(
            DssExecLib.spotter(),
            0x545553442d410000000000000000000000000000000000000000000000000000,
            "pip",
            pip5
        );
        // Authorizes pip5 to interact with the OSM Mom.
        DssExecLib.authorize(pip5, DssExecLib.osmMom());
        // Whitelists the medianizer for pip5.
        DssExecLib.whitelistOracleMedians(pip5);
        // Adds Spotter to the whitelist for pip5.
        DssExecLib.addReaderToWhitelist(pip5, DssExecLib.spotter());
        // Adds clip to the whitelist for pip5.
        DssExecLib.addReaderToWhitelist(
            pip5,
            0x0F6f88f8A4b918584E3539182793a0C276097f44
        );
        // Adds Clipper Mom to the whitelist for pip5.
        DssExecLib.addReaderToWhitelist(pip5, DssExecLib.clipperMom());
        // Adds End contract to the whitelist for pip5.
        DssExecLib.addReaderToWhitelist(pip5, DssExecLib.end());
        // Allows the OSM to freeze the TUSD-A collateral type.
        DssExecLib.allowOSMFreeze(
            pip5,
            0x545553442d410000000000000000000000000000000000000000000000000000
        );
        // Adds the source of pip5 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip5).src(), pip5);

        // Sets the pip for the PAXUSD-A collateral type in the Spotter.
        DssExecLib.setContract(
            DssExecLib.spotter(),
            0x5041585553442d41000000000000000000000000000000000000000000000000,
            "pip",
            pip10
        );
        // Authorizes OSM Mom to interact with the pip10.
        DssExecLib.authorize(pip10, DssExecLib.osmMom());
        // Sets the pip for the PSM-PAX-A collateral type in the Spotter.
        DssExecLib.setContract(
            DssExecLib.spotter(),
            0x50534d2d5041582d410000000000000000000000000000000000000000000000,
            "pip",
            pip10
        );
        // Whitelists the medianizer for pip10.
        DssExecLib.whitelistOracleMedians(pip10);
        // Adds Spotter to the whitelist for pip10.
        DssExecLib.addReaderToWhitelist(pip10, DssExecLib.spotter());
        // Adds clip to the whitelist for pip10.
        DssExecLib.addReaderToWhitelist(
            pip10,
            0xBCb396Cd139D1116BD89562B49b9D1d6c25378B0
        );
        // Adds Clipper Mom to the whitelist for the pip10.
        DssExecLib.addReaderToWhitelist(pip10, DssExecLib.clipperMom());
        // Adds the End contract to the whitelist for pip10.
        DssExecLib.addReaderToWhitelist(pip10, DssExecLib.end());
        // Allows the OSM to freeze the PAXUSD-A collateral type.
        DssExecLib.allowOSMFreeze(
            pip10,
            0x5041585553442d41000000000000000000000000000000000000000000000000
        );
        // Allows the OSM to freeze the PSM-PAX-A collateral type.
        DssExecLib.allowOSMFreeze(
            pip10,
            0x50534d2d5041582d410000000000000000000000000000000000000000000000
        );
        // Adds the source of pip10 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip10).src(), pip10);
        DssExecLib.setContract(
            DssExecLib.spotter(),
            0x475553442d410000000000000000000000000000000000000000000000000000,
            "pip",
            pip16
        );
        // Authorizes pip16 to interact with the OSM Mom.
        DssExecLib.authorize(pip16, DssExecLib.osmMom());
        // Adds pip16 to the whitelist for a specific address.
        DssExecLib.addReaderToWhitelist(
            pip16,
            0xa47D68b9dB0A0361284fA04BA40623fcBd1a263E
        );
        // Allows the OSM to freeze the GUSD-A collateral type.
        DssExecLib.allowOSMFreeze(
            pip16,
            0x475553442d410000000000000000000000000000000000000000000000000000
        );
        // Sets the pip for the PSM-GUSD-A collateral type in the Spotter.
        DssExecLib.setContract(
            DssExecLib.spotter(),
            0x50534d2d475553442d4100000000000000000000000000000000000000000000,
            "pip",
            pip16
        );
        // Authorizes pip16 to interact with the OSM Mom.
        DssExecLib.authorize(pip16, DssExecLib.osmMom());
        // Whitelists the medianizer for pip16.
        DssExecLib.whitelistOracleMedians(pip16);
        // Adds pip16 to the whitelist for the Spotter.
        DssExecLib.addReaderToWhitelist(pip16, DssExecLib.spotter());
        // Adds pip16 to the whitelist for a specific address.
        DssExecLib.addReaderToWhitelist(
            pip16,
            0xf93CC3a50f450ED245e003BFecc8A6Ec1732b0b2
        );
        // Adds the Clipper Mom to the whitelist for pip16.
        DssExecLib.addReaderToWhitelist(pip16, DssExecLib.clipperMom());
        // Adds the End contract to the whitelist for pip16.
        DssExecLib.addReaderToWhitelist(pip16, DssExecLib.end());
        // Allows the OSM to freeze the PSM-GUSD-A collateral type.
        DssExecLib.allowOSMFreeze(
            pip16,
            0x50534d2d475553442d4100000000000000000000000000000000000000000000
        );
        // Adds the source of pip16 to the whitelist.
        DssExecLib.addReaderToWhitelistCall(OracleLike(pip16).src(), pip16);

        /***********************/
        /*** Deployer revoke ***/
        /***********************/

        MedianLike(median22).deny(deployer);
        MedianLike(DIAORACLE).deny(deployer);
        MedianLike(makerAuctionOracle).deny(deployer);
        MedianLike(median21).deny(deployer);
        MedianLike(median20).deny(deployer);
        MedianLike(median19).deny(deployer);
        MedianLike(median18).deny(deployer);
        MedianLike(pip17).deny(deployer);
        MedianLike(pip16).deny(deployer);
        MedianLike(median15).deny(deployer);
        MedianLike(median14).deny(deployer);
        MedianLike(median12).deny(deployer);
        MedianLike(median11).deny(deployer);
        MedianLike(pip10).deny(deployer);
        MedianLike(median9).deny(deployer);
        MedianLike(median8).deny(deployer);
        MedianLike(median7).deny(deployer);
        MedianLike(median6).deny(deployer);
        MedianLike(pip5).deny(deployer);
        MedianLike(median4).deny(deployer);
        MedianLike(pip3).deny(deployer);
        MedianLike(median2).deny(deployer);
        MedianLike(median1).deny(deployer);

        // // Sets the changelog version to 1.15.0.
        DssExecLib.setChangelogVersion("1.15.0");
        // adds the new chief to the changelog
        DssExecLib.setChangelogAddress("CHIEF", chief);
    }
}

// DssSpell contract is the main contract that executes the actions defined in DssSpellAction.
contract DssSpell is DssExec {
    // Constructor that initializes the DssExec contract and deploys a new DssSpellAction contract.
    constructor()
        DssExec(block.timestamp + 180 days, address(new DssSpellAction()))
    {}
}
